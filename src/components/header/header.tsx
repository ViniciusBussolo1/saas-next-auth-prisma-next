import { ReactNode } from "react";
import Image from "next/image";

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="max-w-[84.5rem] w-full flex justify-between items-center">
      <Image src="/logo.svg" alt="logo" width={129} height={40} />

      {children}
    </header>
  );
}
