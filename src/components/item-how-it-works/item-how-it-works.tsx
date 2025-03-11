import Image from "next/image";

interface ItemsHowItWorksWithProps {
  children: string;
}

export default function ItemsHowItWorks({
  children,
}: ItemsHowItWorksWithProps) {
  return (
    <div className="flex items-center gap-16">
      <p className="max-[458px]:text-xs max-[657px]:text-base max-[768px]:text-xl text-2xl text-gray-500 flex-1">
        {children}
      </p>
      <Image
        src="./vector.svg"
        alt="Imagem de um vetor"
        width={21.15}
        height={15.78}
      />
    </div>
  );
}
