"use client";

import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { updateIssueSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Issue, Status } from "../generated/prisma/client";

interface Props {
  issue: Issue;
}

export default function IssueForm({ issue }: Props) {
  //
  const router = useRouter();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const statuses: { label: string; value: Status }[] = [
    { label: "WIP", value: "IN_PROGRESS" },
    { label: "Open", value: "OPEN" },
    { label: "Closed", value: "CLOSED" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateIssueSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await axios.patch(`/api/issues/${issue.id}`, data);
      router.push(`/issues/${issue.id}`);
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
                defaultValue={issue?.title}
                className="form-control fs-3 shadow-tile"
                placeholder="Title"
              />
              <ErrorMessage>{errors.title?.message}</ErrorMessage>
            </div>

            <div className="mb-3">
              <select
                {...register("status")}
                defaultValue={issue.status}
                className="fs-3 shadow-tile form-select"
              >
                {statuses.map(({ label, value }) => (
                  <option key={label} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <textarea
                {...register("description")}
                defaultValue={issue?.description}
                className="form-control fs-3 shadow-tile"
                rows={5}
                placeholder="Description"
              />
            </div>
            <ErrorMessage>{errors.description?.message}</ErrorMessage>

            <button
              type="submit"
              className="btn btn-primary fs-3 mt-5 shadow-tile"
              disabled={submitting}
            >
              <span className="d-flex align-items-center">
                Update
                {submitting && <Spinner />}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
