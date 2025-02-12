import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <main className="w-full flex justify-center items-center h-screen">
      <div className="max-w-[22rem] w-full flex flex-col items-center ">
        <Image src="/logo.svg" alt="logo" width={129} height={40} />

        <div className="w-full">
          <div className="mt-11">
            <h1 className="font-semibold text-xl text-black">Cadastre-se</h1>
            <p className="text-sm text-gray-500">
              Faça seu cadastro gratuitamente
            </p>
          </div>

          <form className="mt-11 w-full space-y-7 ">
            <div className="space-y-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-bold text-xs">
                  Nome
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Fulano de Tal"
                  className="text-sm p-1"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-bold text-xs">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="eu@exemplo.com.br"
                  className="text-sm p-1"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="font-bold text-xs">
                  Senha
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  className="text-sm p-1"
                />
              </div>
            </div>

            <button className="w-full h-10 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition-colors">
              Registrar
            </button>

            <p className="font-light text-[0.625rem] text-gray-500 text-center mt-6">
              Ao continuar, você concorda com nossos Termos de Uso e nossa
              Política de Privacidade.
            </p>
          </form>
        </div>

        <p className="font-light text-[0.625rem] text-gray-500 mt-11">
          Já possui cadastro?{" "}
          <Link
            href={"/login"}
            className="text-[#5E6063] font-bold hover:text-gray-800"
          >
            Faça o Login
          </Link>
        </p>
      </div>
    </main>
  );
}
