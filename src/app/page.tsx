import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center mt-12 gap-[5.438rem] px-3">
        <header className="max-w-[84.5rem] w-full flex justify-between items-center">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />

          <div className="flex items-center gap-7">
            <nav>
              <ul className="flex items-center gap-6">
                <li>
                  <a
                    href="#funcionamento"
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
              Login
            </button>
          </div>
        </header>

        <div className="max-w-[51.688rem] w-full">
          <div className="w-full flex flex-col items-center gap-6">
            <h1 className="font-bold text-6xl text-black text-center">
              Simplifique Seus Estudos
            </h1>
            <p className="text-center 6B7280 text-xl max-w-2xl">
              Deixe que nós fazemos a curadoria para você. Assine nossa
              plataforma e receba todos os meses um ebook novo de programação.
            </p>
          </div>

          <div className="flex flex-col items-center mt-16 gap-5">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Coloque seu email"
                className="w-72 px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
              />
              <button
                type="button"
                className="px-6 py-3 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition-colors"
              >
                Assine Agora
              </button>
            </div>
            <span className="text-xs text-gray-500">
              Comece sua assinatura agora mesmo. Cancele quando quiser.
            </span>
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
    </>
  );
}
