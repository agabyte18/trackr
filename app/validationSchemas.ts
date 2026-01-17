import z from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(3, "Description is required"),
});

export const updateIssueSchema = z.object({
  title: z.string().min(3, "Title is required"),
  status: z.string(),
  description: z.string().min(3, "Description is required"),
});
