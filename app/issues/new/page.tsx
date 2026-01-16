"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function NewIssuePage() {
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-7">
          <h1 className="mb-5">New Issue</h1>

          <form
            onSubmit={handleSubmit(async (data) => {
              await axios.post("/api/issues", data);

              router.push("/issues");
            })}
          >
            <div className="mb-3">
              <input
                {...register("title")}
                className="form-control fs-3 shadow-pri"
                placeholder="Title"
              />
              <div className="form-text  fs-3 text-danger">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <textarea
                {...register("description")}
                className="form-control fs-3 shadow-pri"
                rows={5}
                placeholder="Description"
              />
            </div>
            <div className="form-text fs-3 text-danger">
              We'll never share your email with anyone else.
            </div>

            <button
              type="submit"
              className="btn btn-primary fs-3 mt-5 shadow-pri"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
