import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  //description: z.string().min(1, "Description is required"),
});

const CreateTourForm = () => {};

export default CreateTourForm;