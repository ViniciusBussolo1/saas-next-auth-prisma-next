import Image from "next/image";
import Link from "next/link";

import TitleDescription from "@/components/title-description/title-description";
import Header from "@/components/header/header";
import Button from "@/components/button/button";
import PlanCard from "@/components/plan-card/plan-card";
import Notification from "@/components/notification/notification";

export default function Home() {
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center mt-12 gap-[5.438rem] px-3">
        <Header>
          <div className="flex items-center gap-7">
            <nav>
              <ul className="flex items-center gap-6">
                <li>
                  <a
                    href="#"
                    className="text-black text-sm hover:text-gray-600 transition-colors"
                  >
                    Funcionamento
                  </a>
                </li>
                <li>
                  <a
                    href="#preco"
                    className="text-black text-sm hover:text-gray-600 transition-colors"
                  >
                    Preço
                  </a>
                </li>
              </ul>
            </nav>

            <button
              className="w-20 h-10 bg-white border border-gray-300 rounded-md text-black text-sm"
              type="button"
            >
              <Link href="/login">Login</Link>
            </button>
          </div>
        </Header>

        <div className="max-w-[51.688rem] w-full">
          <TitleDescription
            title="Simplifique Seus Estudos"
            description="Deixe que nós fazemos a curadoria para você. 
            Assine nossa plataforma e receba todos os meses um ebook novo de programação."
          />

          <div className="flex flex-col items-center mt-16 gap-5">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Coloque seu email"
                className="w-72 px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
              />
              <Button className="px-6 py-3" children="Assine Agora" />
            </div>

            <Notification children="Comece sua assinatura agora mesmo. Cancele quando quiser." />
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center mt-44 px-3">
        <div className="max-w-[56.286rem] w-full flex flex-col items-center gap-10 px-3">
          <h1 className="font-bold text-[2.5rem]">Como funciona?</h1>

          <div className="flex items-center justify-center gap-14">
            <Image
              src="/woman.svg"
              alt="Imagem de uma mulher carregando caixas"
              width={392}
              height={392}
            />

            <div className="flex flex-col gap-9 items-end">
              <div className="flex  items-center gap-16">
                <p className="text-2xl text-gray-500">
                  Acesso a 1 ebook por mês{" "}
                </p>
                <Image
                  src="./vector.svg"
                  alt="Imagem de um vetor"
                  width={21.15}
                  height={15.78}
                />
              </div>

              <div className="flex  items-center gap-16">
                <p className="text-2xl text-gray-500">Curadoria especial </p>
                <Image
                  src="./vector.svg"
                  alt="Imagem de um vetor"
                  width={21.15}
                  height={15.78}
                />
              </div>

              <div className="flex  items-center gap-16">
                <p className="text-2xl text-gray-500">Cancele quando quiser </p>
                <Image
                  src="./vector.svg"
                  alt="Imagem de um vetor"
                  width={21.15}
                  height={15.78}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center mt-52 px-3 gap-[4.625rem]">
        <TitleDescription
          title="Preço Simples e Transparente"
          description="Pra que inúmeros planos quando nós sabemos exatamente o que é melhor para você? 
          Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um ebook novo de programação. 
          E por menos de um café por dia."
        />

        <PlanCard />
      </section>

      <section className="w-full flex flex-col justify-center items-center mt-56 px-3 gap-11">
        <TitleDescription
          title="Pronto Para Mudar Sua Vida?"
          description="Faça como milhares de outras pessoas. Assine nosso produto e tenha garantido seus estudos"
        />

        <div className="max-w-[26.375rem] w-full flex flex-col items-center gap-4">
          <Button className="w-full h-10" children="Assine Agora" />

          <Notification children="Comece sua assinatura agora mesmo. Cancele quando quiser." />
        </div>

        <footer className="flex flex-col items-center gap-2 mt-16 mb-10">
          <Image src="/logo.svg" alt="logo" width={129} height={40} />
          <p className="text-xs font-light text-gray-500">
            © 2024 LivroSaaS. Todos os direitos reservados.
          </p>
        </footer>
      </section>
    </>
  );
}
