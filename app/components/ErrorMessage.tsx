import { PropsWithChildren } from "react";

export default function ErrorMessage({ children }: PropsWithChildren) {
  //
  if (!children) return null;

  return <div className="form-text  fs-3 text-danger">{children}</div>;
}
