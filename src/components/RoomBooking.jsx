import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { toast } from "sonner";

const mealPlans = [
  "Room Only",
  "Bed & Breakfast",
  "Half Board",
  "Full Board",
];

const formSchema = z
  .object({
    checkInDate: z.string().min(1, "Check-in date required"),
    checkOutDate: z.string().min(1, "Check-out date required"),
    adults: z.coerce.number().min(1, "At least 1 adult required"),
    children: z.coerce.number().min(0),
    mealPlan: z.enum(mealPlans),
  })
  .refine(
    (data) => new Date(data.checkOutDate) > new Date(data.checkInDate),
    { message: "Checkout must be after check-in", path: ["checkOutDate"] }
  );

export function RoomBookingModal({ isOpen, onClose, room }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      checkInDate: "",
      checkOutDate: "",
      adults: 1,
      children: 0,
      mealPlan: "Room Only",
    },
  });

  const { user, isSignedIn } = useUser();

  const onSubmit = async (values) => {
    if (!isSignedIn) {
      toast.error("You must be signed in to book a room");
      return;
    }

    const totalGuests = values.adults + values.children;
    const maxGuests = room.name.toLowerCase().includes("triple") ? 3 : 2;

    if (totalGuests > maxGuests) {
      toast.error(`Max ${maxGuests} guests allowed for this room`);
      return;
    }

    try {
      const token = await window?.Clerk?.session?.getToken();

      const response = await fetch("http://localhost:8000/api/roomBookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({
          ...values,
          roomId: room._id,
          userId: user.id,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to book room");
      }

      toast.success("Booking successful");
      onClose();
    } catch (error) {
      toast.error(error.message || "Failed to book room");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-900">Book {room.name}</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="checkInDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Check-in</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="checkOutDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Check-out</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      min={form.watch("checkInDate")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="adults"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adults</FormLabel>
                  <FormControl>
                    <Input type="number" min={1} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="children"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Children</FormLabel>
                  <FormControl>
                    <Input type="number" min={0} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mealPlan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meal Plan</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select meal plan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {mealPlans.map((plan) => (
                        <SelectItem key={plan} value={plan}>
                          {plan}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
              className="w-full bg-blue-800 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 disabled:bg-blue-300 disabled:cursor-not-allowed transition duration-300"
            >
              {form.formState.isSubmitting ? "Booking..." : "Confirm Booking"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
