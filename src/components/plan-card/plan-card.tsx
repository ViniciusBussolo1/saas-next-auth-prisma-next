import Image from "next/image";
import Button from "../button/button";

export default function PlanCard() {
  return (
    <div className="max-w-[26.125rem] w-full flex flex-col items-start gap-11 pl-10 pr-12">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-black">
          Plano Pro Premium VIP
        </h3>

        <p className="text-sm text-gray-500">
          Tudo de você precisa para seus estudos
        </p>
      </div>

      <div className="space-y-4">
        <p className="text-xl text-gray-500">
          <span className="text-4xl font-semibold text-black">R$29</span>
          /mês
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-5">
            <Image
              src="./vector.svg"
              alt="Imagem de um vetor"
              width={14}
              height={10}
            />
            <p className="text-sm text-gray-500">1 ebook por mês</p>
          </div>

          <div className="flex items-center gap-5">
            <Image
              src="./vector.svg"
              alt="Imagem de um vetor"
              width={14}
              height={10}
            />
            <p className="text-sm text-gray-500">Curadoria especial</p>
          </div>

          <div className="flex items-center gap-5">
            <Image
              src="./vector.svg"
              alt="Imagem de um vetor"
              width={14}
              height={10}
            />
            <p className="text-sm text-gray-500">Acesso ilimitado</p>
          </div>

          <div className="flex items-center gap-5">
            <Image
              src="./vector.svg"
              alt="Imagem de um vetor"
              width={14}
              height={10}
            />
            <p className="text-sm text-gray-500">Cancele a qualquer momento</p>
          </div>
        </div>
      </div>

      <Button className="w-full h-10">Assine Agora</Button>
    </div>
  );
}
