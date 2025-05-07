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
import { useCreateRoomMutation } from "@/lib/api";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, { message: "Room Name is required" }),
  description: z.string().min(1, { message: "Room Description is required" }),
  image: z.string().min(1, { message: "Room Image is required" }),
  price: z.number().min(1, { message: "Room Price is required" }),
  subImage_1: z.string().min(1, { message: "Sub Image required" }),
  subImage_2: z.string().min(1, { message: "Sub Image required" }),
  subImage_3: z.string().min(1, { message: "Sub Image required" }),

});

const CreateRoomForm = () => {
    const [createRoom, {isLoading}] = useCreateRoomMutation();
    const form = useForm ({
        resolver: zodResolver(formSchema),
     })


  const handleSubmit = async (values) => {
    const { name, description, image, price, subImage_1, subImage_2, subImage_3 } = values;

    const toastId = toast.loading("Creating room...");

    try {
        toastId;
        await createRoom({
            name,
            description,
            image,
            price,
            subImage_1,
            subImage_2,
            subImage_3,

        }).unwrap();
        toast.dismiss(toastId);
        toast.success("Room created successfully!");

        
    } catch (error) {
        toast.dismiss(toastId);
        toast.error("Failed to create room. Please try again.");
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
                        <FormLabel>Room Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter the name of the room" {...field} />
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
                        <FormLabel>Room Description</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Enter the description of the room" {...field} />
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
                        <FormLabel>Room Image</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter the URL of the room image" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Room Price</FormLabel>
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
                        Add New Room
                    </Button>
                </div>
            </form>
        </Form>
    )
};

export default CreateRoomForm;