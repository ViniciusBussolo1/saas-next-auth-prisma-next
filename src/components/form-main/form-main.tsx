import { ReactNode } from "react";

import FormTitle from "./form-title/form-title";
import Form from "./form/form";
import FormFooter from "./form-footer/form-footer";

import Image from "next/image";

interface FormMainProps {
  children: ReactNode;
}

export default function FormMain({ children }: FormMainProps) {
  return (
    <div className="max-w-[22rem] w-full flex flex-col items-center ">
      <Image src="/logo.svg" alt="logo" width={129} height={40} />

      {children}
    </div>
  );
}
