import { useParams, useNavigate } from "react-router";
import { useDeleteRoomMutation } from "@/lib/api";  // Import your custom hook
import { toast } from "sonner";  // For showing toast notifications
import { Button } from "./ui/button";

const DeleteRoom = () => {
  const { id } = useParams();  // Get the room ID from the URL
  const navigate = useNavigate();
  const [deleteRoom, { isLoading }] = useDeleteRoomMutation();  // Using the mutation hook

  const handleDelete = async () => {
    const toastId = toast.loading("Deleting room...");

    try {
      // Call the delete mutation with the room ID
      await deleteRoom(id).unwrap();  // unwrap() resolves the mutation
      toast.dismiss(toastId);
      toast.success("Room deleted successfully!");
      navigate("/rooms");  // Redirect to the rooms list after successful deletion
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Failed to delete room. Please try again.");
    }
  };

  return (
    <div>
      {/* Render room details here */}
      <Button 
        onClick={handleDelete} 
        disabled={isLoading} 
        className="bg-red-500 text-white hover:bg-red-700"
      >
        {isLoading ? "Deleting..." : "Delete Room"}
      </Button>
    </div>
  );
};

export default DeleteRoom;
