"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";

export default function NewIssuePage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createIssueSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/issues");
      setSubmitting(true);
    } catch (error) {
      setSubmitting(false);
      setError("Oops, something went wrong.");
    }
  });

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-7">
          <div className="mb-5">
            {error ? (
              <h1 className="text-danger">{error}</h1>
            ) : (
              <h1>New Issue</h1>
            )}
          </div>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <input
                {...register("title")}
                className="form-control fs-3 shadow-pri"
                placeholder="Title"
              />
              <ErrorMessage>{errors.title?.message}</ErrorMessage>
            </div>

            <div className="mb-3">
              <textarea
                {...register("description")}
                className="form-control fs-3 shadow-pri"
                rows={5}
                placeholder="Description"
              />
            </div>
            <ErrorMessage>{errors.description?.message}</ErrorMessage>

            <button
              type="submit"
              className="btn btn-primary fs-3 mt-5 shadow-pri"
              disabled={submitting}
            >
              <span className="d-flex align-items-center">
                Submit
                {submitting && <Spinner />}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
