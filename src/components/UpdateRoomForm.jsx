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
import { useCreateRoomMutation, useUpdateRoomMutation } from "@/lib/api";
import { toast } from "sonner";
import { Delete } from "lucide-react";
import DeleteRoom from "./DeleteRoom";

const formSchema = z.object({
  name: z.string().min(1, { message: "Room Name is required" }),
  description: z.string().min(1, { message: "Room Description is required" }),
  image: z.string().min(1, { message: "Room Image is required" }),
  price: z.number().min(1, { message: "Room Price is required" }),
  subImage_1: z.string().min(1, { message: "Sub Image required" }),
  subImage_2: z.string().min(1, { message: "Sub Image required" }),
  subImage_3: z.string().min(1, { message: "Sub Image required" }),
});

const UpdateRoomForm = () => {
  const { id } = useParams(); // Get room ID from URL
  const navigate = useNavigate();
  const [updateRoom, { isLoading }] = useUpdateRoomMutation();
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  // Fetch the room data when the component mounts
  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/rooms/${id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const room = await response.json();
        console.log(room); // Log the fetched room data
        // Manually set each field
        form.setValue("name", room.name);
        form.setValue("description", room.description);
        form.setValue("image", room.image);
        form.setValue("price", room.price);
        form.setValue("subImage_1", room.subImage_1);
        form.setValue("subImage_2", room.subImage_2);
        form.setValue("subImage_3", room.subImage_3);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch room data");
      }
    };
  
    fetchRoomData();
  }, [id, form]);
  
  

  const handleSubmit = async (values) => {
    const { name, description, image, price, subImage_1, subImage_2, subImage_3 } = values;

    const toastId = toast.loading("Updating room...");

    try {
      toastId;
      await updateRoom({
        id,
        name,
        description,
        image,
        price,
        subImage_1,
        subImage_2,
        subImage_3,
      }).unwrap();
      toast.dismiss(toastId);
      toast.success("Room updated successfully!");
      navigate("/rooms"); // Redirect to rooms list after successful update
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Failed to update room. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-1/2">
        <div className="grid gap-4">
          {/* Repeat the same fields as the create form */}
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormLabel>Room Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter the name of the room" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="description" render={({ field }) => (
            <FormItem>
              <FormLabel>Room Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter the description of the room" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="image" render={({ field }) => (
            <FormItem>
              <FormLabel>Room Image</FormLabel>
              <FormControl>
                <Input placeholder="Enter the URL of the room image" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="price" render={({ field }) => (
            <FormItem>
              <FormLabel>Room Price</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the price of the room"
                  type="number"
                  onChange={(e) => {
                    field.onChange(parseFloat(e.target.value));
                  }}
                  value={field.value}
                />
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

        <div className="mt-4 grid grid-cols-2 gap-4">
  <div>
    <Button
      type="submit"
      disabled={isLoading}
      className="w-full py-2 px-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 disabled:bg-blue-300 disabled:cursor-not-allowed transition duration-300"
    >
      {isLoading ? "Updating..." : "Update Room"}
    </Button>
  </div>
  <div>
    <DeleteRoom id={id} className="w-full py-2 px-4 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 transition duration-300" />
  </div>
</div>

      </form>
    </Form>
  );
};

export default UpdateRoomForm;
