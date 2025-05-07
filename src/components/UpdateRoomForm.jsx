import { useEffect } from "react";
import { useParams } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useGetRoomByIdQuery, useUpdateRoomMutation } from "@/lib/api";


// Define schema with Zod
const formSchema = z.object({
  name: z.string().min(1, { message: "Room Name is required" }),
  description: z.string().min(1, { message: "Room Description is required" }),
  image: z.string().min(1, { message: "Room Image is required" }),
  price: z.number().min(1, { message: "Room Price is required" }),
  subImage_1: z.string().min(1, { message: "Carousel Images are required" }),
  subImage_2: z.string().min(1, { message: "Carousel Images are required" }),
  subImage_3: z.string().min(1, { message: "Carousel Images are required" }),
});

const UpdateRoomForm = () => {
  const { id } = useParams();
  const { data: room, isLoading } = useGetRoomByIdQuery(id); // Fetch Room data
  const [updateRoom] = useUpdateRoomMutation();

  // Initialize the form with react-hook-form and zod
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: "",
        description: "",
        image: "",
        price: "",
        subImage_1: "",
        subImage_2: "",
        subImage_3: "",
      },
  });

  // Check if the Room data is available
  const isRoomReady = !!room;

  // Use effect to set values in form once the Room data is fetched
  useEffect(() => {
    console.log(room);  // Log to see the structure of room data
    if (room) {
      form.setValue("name", room.name || "");
      form.setValue("description", room.description || "");
      form.setValue("image", room.image || "");
      form.setValue("subImage_1", room.subImage_1 || "");
      form.setValue("subImage_2", room.subImage_2 || "");
      form.setValue("subImage_3", room.subImage_3 || "");
    }
  }, [room, form]);
  

  // Handle form submission
  const handleSubmit = async (values) => {
    console.log("Submitting form values:", values);
    const toastId = toast.loading("Updating room...");
    try {
      await updateRoom({ id, updatedRoom: values }).unwrap();
      toast.dismiss(toastId);
      toast.success("Room updated successfully!");
    } catch (err) {
      toast.dismiss(toastId);
      toast.error("Failed to update room.");
    }
  };

  // Show loading message until the Room data is available
  if (isLoading || !isRoomReady) return <p>Loading...</p>;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-1/2">
        <div className="grid gap-4">
          {/* Room Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Room Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Room Description Field */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Room Image Field */}
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            {/* Room Price Field */}
            <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                            <Input 
                            placeholder="Enter the price of the room" 
                            type="number" 
                            onChange={(e) => {
                                field.onChange(parseFloat(e.target.value));
                            }}
                            value={field.value} />
                        </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Sub Images Field */}
          <FormField
            control={form.control}
            name="subImage_1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Sub Images Field */}
          <FormField
            control={form.control}
            name="subImage_2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Sub Images Field */}
          <FormField
            control={form.control}
            name="subImage_3"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-4">
          <Button type="submit">Update Room</Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateRoomForm;
