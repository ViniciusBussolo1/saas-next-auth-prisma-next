import { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
}

export default function Form({ children }: FormProps) {
  return <form className="mt-11 w-full space-y-7 ">{children}</form>;
}
