import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
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
import { useCreateTourMutation } from "@/lib/api";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, { message: "Tour Name is required" }),
  description: z.string().min(1, { message: "Tour Description is required" }),
  image: z.string().min(1, { message: "Tour Image is required" }),
  subImage_1: z.string().min(1, { message: "Sub Image required" }),
  subImage_2: z.string().min(1, { message: "Sub Image required" }),
  subImage_3: z.string().min(1, { message: "Sub Image required" }),
});

const CreateTourForm = () => {
    const [createTour, {isLoading}] = useCreateTourMutation();
    const navigate = useNavigate();
    const form = useForm ({
       resolver: zodResolver(formSchema),
    })

  // Handle form submission
  const handleSubmit = async (values) => {
    const { name, description, image, subImage_1, subImage_2, subImage_3 } = values;

    const toastId = toast.loading("Creating tour...");
    try {
        toastId;
        await createTour({
            name,
            description,
            image,
            subImage_1,
            subImage_2,
            subImage_3,
        }).unwrap();
        toast.dismiss(toastId);
        toast.success("Tour created successfully!");
        navigate("/tours");
    } catch (error) {
        toast.dismiss(toastId);
        toast.error("Failed to create tour. Please try again.");
    }
  };


    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="w-1/2">
                <div className="grid gap-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Tour Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter the name of the tour" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Tour Description</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Enter the description of the tour" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Tour Image</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter the URL of the tour image" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subImage_1"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Sub Image 1</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter the URL of the room image" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subImage_2"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Sub Image 2</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter the URL of the room image" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subImage_3"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Sub Image 3</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter the URL of the room image" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                </div>

                <div className="mt-4">
                    <Button type="submit">
                        Add New Tour
                    </Button>
                </div>
            </form>
        </Form>
    )    


};

export default CreateTourForm;