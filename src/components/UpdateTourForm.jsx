import { useEffect } from "react";
import { useParams, useNavigate } from "react-router"; // Assuming you are using react-router for navigation
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
import { useCreateTourMutation, useUpdateTourMutation } from "@/lib/api";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, { message: "Tour Name is required" }),
  description: z.string().min(1, { message: "Tour Description is required" }),
  image: z.string().min(1, { message: "Tour Image is required" }),
  subImage_1: z.string().min(1, { message: "Sub Image required" }),
  subImage_2: z.string().min(1, { message: "Sub Image required" }),
  subImage_3: z.string().min(1, { message: "Sub Image required" }),
});

const UpdateTourForm = () => {
  const { id } = useParams(); // Get room ID from URL
  const navigate = useNavigate();
  const [updateTour, { isLoading }] = useUpdateTourMutation();
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  // Fetch the room data when the component mounts
  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/tours/${id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const tour = await response.json();
        console.log(tour); // Log the fetched room data
        // Manually set each field
        form.setValue("name", tour.name);
        form.setValue("description", tour.description);
        form.setValue("image", tour.image);
        form.setValue("subImage_1", tour.subImage_1);
        form.setValue("subImage_2", tour.subImage_2);
        form.setValue("subImage_3", tour.subImage_3);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch tour data");
      }
    };
  
    fetchTourData();
  }, [id, form]);
  
  

  const handleSubmit = async (values) => {
    const { name, description, image, subImage_1, subImage_2, subImage_3 } = values;

    const toastId = toast.loading("Updating tour...");

    try {
      toastId;
      await updateTour({
        id,
        name,
        description,
        image,
        subImage_1,
        subImage_2,
        subImage_3,
      }).unwrap();
      toast.dismiss(toastId);
      toast.success("Tour updated successfully!");
      navigate("/tours"); // Redirect to tours list after successful update
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Failed to update tour. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-1/2">
        <div className="grid gap-4">
          {/* Repeat the same fields as the create form */}
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormLabel>Tour Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter the name of the tour" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="description" render={({ field }) => (
            <FormItem>
              <FormLabel>Tour Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter the description of the tour" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="image" render={({ field }) => (
            <FormItem>
              <FormLabel>Tour Image</FormLabel>
              <FormControl>
                <Input placeholder="Enter the URL of the tour image" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          {/* Add subImage fields similar to the above */}
          <FormField control={form.control} name="subImage_1" render={({ field }) => (
            <FormItem>
              <FormLabel>Sub Image 1</FormLabel>
              <FormControl>
                <Input placeholder="Enter the URL of the sub image" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="subImage_2" render={({ field }) => (
            <FormItem>
              <FormLabel>Sub Image 2</FormLabel>
              <FormControl>
                <Input placeholder="Enter the URL of the sub image" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="subImage_3" render={({ field }) => (
            <FormItem>
              <FormLabel>Sub Image 3</FormLabel>
              <FormControl>
                <Input placeholder="Enter the URL of the sub image" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        <div className="mt-4">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Updating..." : "Update Tour"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateTourForm;
