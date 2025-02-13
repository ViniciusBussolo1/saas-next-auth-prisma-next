"use client";

import { useState } from "react";
import Image from "next/image";

type menuIsSelectedProps = "livroMes" | "minhasAssinaturas";

export default function Dashboard() {
  const [menuIsSelected, setMenuIsSelected] =
    useState<menuIsSelectedProps>("minhasAssinaturas");

  return (
    <>
      <header className="w-full h-[100px] flex justify-center items-center px-3">
        <div className="max-w-[84.5rem] w-full flex justify-between items-center">
          <Image src="/logo.svg" alt="logo" width={129} height={40} />

          <div className="flex items-center gap-7">
            <nav>
              <ul className="flex items-center gap-6">
                <li>
                  <button
                    type="button"
                    className={`text-black text-sm hover:text-gray-600 transition-colors ${
                      menuIsSelected === "livroMes" ? "underline" : ""
                    }`}
                    onClick={() => setMenuIsSelected("livroMes")}
                  >
                    Livro do Mês
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={`text-black text-sm hover:text-gray-600 transition-colors ${
                      menuIsSelected === "minhasAssinaturas" ? "underline" : ""
                    }`}
                    onClick={() => setMenuIsSelected("minhasAssinaturas")}
                  >
                    Minha Assinatura
                  </button>
                </li>
              </ul>
            </nav>

            <button className=" text-black " type="button">
              <Image
                src="/user.svg"
                alt="Icone de um usúario"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </header>

      {menuIsSelected === "minhasAssinaturas" ? (
        <main className="w-full flex justify-center items-center px-3 mt-[4.5rem]">
          <div className="max-w-[84.5rem] w-full">
            <h1 className="font-bold text-3xl text-black">Assinatura</h1>

            <div className="w-full h-[4.625rem] bg-[#FDE7A0]/60 flex items-center gap-6 mt-7">
              <div className="h-full w-1 bg-[#FFC744]"></div>

              <div className="flex items-center gap-[1.625rem]">
                <Image
                  src={"./triangle-alert.svg"}
                  alt="Icone de um triangulo"
                  width={24}
                  height={24}
                />

                <p className="font-medium text-base text-[#8F641E]">
                  Você não possui nenhuma assinatura ativa. Que tal assinar
                  agora?{" "}
                </p>
              </div>
            </div>

            <div className="max-w-[26.125rem] w-full flex flex-col items-start gap-11 pl-10 pr-12 mt-12">
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
                  <span className="text-4xl font-semibold text-black">
                    R$29
                  </span>
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
                    <p className="text-sm text-gray-500">
                      Cancele a qualquer momento
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full h-10 bg-black text-white rounded-md text-sm">
                Assine Agora
              </button>
            </div>
          </div>
        </main>
      ) : (
        <main className="w-full flex justify-center items-center px-3 mt-[4.5rem]">
          <div className="max-w-[84.5rem] w-full space-y-14">
            <h1 className="font-bold text-3xl text-black">Livro do Mês</h1>

            <Image
              src={"./book-image.svg"}
              alt="Imagem de um livro"
              width={376}
              height={534}
            />

            <button
              className="max-w-[14.938rem] w-full h-10 bg-black text-white rounded-md 
              text-sm flex items-center justify-center gap-4"
            >
              <Image
                src={"./download.svg"}
                alt="Icone de download"
                width={18}
                height={18}
              />
              Download do PDF
            </button>
          </div>
        </main>
      )}
    </>
  );
}
