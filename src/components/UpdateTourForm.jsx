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
import { useGetTourByIdQuery, useUpdateTourMutation } from "@/lib/api";

// Define schema with Zod
const formSchema = z.object({
  name: z.string().min(1, { message: "Tour Name is required" }),
  description: z.string().min(1, { message: "Tour Description is required" }),
  image: z.string().min(1, { message: "Tour Image is required" }),
  carouselImages: z.array(z.string()).min(1, { message: "Carousel Images are required" }),
});

const UpdateTourForm = () => {
  const { id } = useParams();
  const { data: tour, isLoading } = useGetTourByIdQuery(id); // Fetch tour data
  const [updateTour] = useUpdateTourMutation();

  // Initialize the form with react-hook-form and zod
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  // Check if the tour data is available
  const isTourReady = !!tour;

  // Use effect to set values in form once the tour data is fetched
  useEffect(() => {
    if (tour) {
      form.setValue("name", tour.name);
      form.setValue("description", tour.description);
      form.setValue("image", tour.image);
      form.setValue("carouselImages", tour.carouselImages || []); // Ensure it's always an array
    }
  }, [tour, form]);

  // Handle input change for carousel images field
  const handleCarouselImagesChange = (event) => {
    const value = event.target.value;
    const carouselImagesArray = value
      .split(",")
      .map((url) => url.trim())
      .filter((url) => url);
    form.setValue("carouselImages", carouselImagesArray);
  };

  // Handle form submission
  const handleSubmit = async (values) => {
    const toastId = toast.loading("Updating tour...");
    try {
      await updateTour({ id, updatedTour: values }).unwrap();
      toast.dismiss(toastId);
      toast.success("Tour updated successfully!");
    } catch (err) {
      toast.dismiss(toastId);
      toast.error("Failed to update tour.");
    }
  };

  // Show loading message until the tour data is available
  if (isLoading || !isTourReady) return <p>Loading...</p>;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-1/2">
        <div className="grid gap-4">
          {/* Tour Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tour Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Tour Description Field */}
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

          {/* Tour Image Field */}
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

          {/* Carousel Images Field */}
          <FormField
            control={form.control}
            name="carouselImages"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Carousel Images</FormLabel>
                <FormControl>
                  <Textarea
                    value={(field.value || []).join(", ")} // Safe check to ensure it's always a string
                    onChange={handleCarouselImagesChange} // Handle input changes
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-4">
          <Button type="submit">Update Tour</Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateTourForm;
