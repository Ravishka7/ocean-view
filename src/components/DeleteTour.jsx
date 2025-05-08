import { useParams, useNavigate } from "react-router";
import { useDeleteTourMutation } from "@/lib/api";  // Import your custom hook
import { toast } from "sonner";  // For showing toast notifications
import { Button } from "./ui/button";

const DeleteTour = () => {
  const { id } = useParams();  // Get the room ID from the URL
  const navigate = useNavigate();
  const [deleteTour, { isLoading }] = useDeleteTourMutation();  // Using the mutation hook

  const handleDelete = async () => {
    const toastId = toast.loading("Deleting tour...");

    try {
      // Call the delete mutation with the tour ID
      await deleteTour(id).unwrap();  // unwrap() resolves the mutation
      toast.dismiss(toastId);
      toast.success("Tour deleted successfully!");
      navigate("/tours");  // Redirect to the rooms list after successful deletion
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Failed to delete tour. Please try again.");
    }
  };

  return (
    <div>
      {/* Render tour details here */}
      <Button 
        onClick={handleDelete} 
        disabled={isLoading} 
        className="bg-red-500 text-white hover:bg-red-700"
      >
        {isLoading ? "Deleting..." : "Delete Tour"}
      </Button>
    </div>
  );
};

export default DeleteTour;
