export default function LoadNewIssuePage() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-7">
          <div className="mb-5">
            <h1>New Issue</h1>
          </div>

          <form>
            <div className="mb-3">
              <input
                className="form-control fs-3 shadow-pri"
                placeholder="Title"
              />
            </div>

            <div className="mb-3">
              <textarea
                className="form-control fs-3 shadow-pri"
                rows={5}
                placeholder="Description"
              />
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
