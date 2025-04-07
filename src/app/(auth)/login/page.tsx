"use client";

import { useActionState, useEffect } from "react";

import { toast, ToastContainer } from "react-toastify";

import Button from "@/components/button/button";
import FormFooter from "@/components/form-main/form-footer/form-footer";
import FormInput from "@/components/form-main/form-input/form-input";
import FormMain from "@/components/form-main/form-main";
import FormNotification from "@/components/form-main/form-notification/form-notification";
import FormTitle from "@/components/form-main/form-title/form-title";
import FormComponent from "@/components/form-main/form/form";
import loginForms from "./login.form";

export default function Login() {
  const [state, formAction, isPending] = useActionState(loginForms, null);

  useEffect(() => {
    if (state?.success === false) {
      toast.error(state.message);
    } else if (state?.success === true) {
      toast.success(state.message);
    }
  }, [state]);
  return (
    <main className="w-full flex justify-center items-center h-screen">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <FormMain>
        <div className="w-full">
          <FormTitle
            title="Boas Vindas"
            description="Faça seu login com email e senha"
          />

          <FormComponent action={formAction}>
            <FormInput
              name="email"
              type="email"
              placeholder="eu@exemplo.com.br"
              labelName="Email"
            />

            <FormInput
              name="password"
              type="password"
              placeholder="********"
              labelName="Senha"
            />

            <Button
              type="submit"
              children="Login"
              className="w-full h-10"
              disabled={isPending}
            />

            <FormNotification
              children="Ao continuar, você concorda com nossos Termos 
              de Uso e nossa Política de Privacidade."
            />
          </FormComponent>
        </div>

        <FormFooter
          children="Não possui cadastro?"
          href="/register"
          childrenLink="Registre-se"
        />
      </FormMain>
    </main>
  );
}
