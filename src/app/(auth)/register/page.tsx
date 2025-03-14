"use client";

import { useActionState, useEffect, useState } from "react";

import { toast, ToastContainer } from "react-toastify";

import registerForms from "./register-form";

import Button from "@/components/button/button";
import FormFooter from "@/components/form-main/form-footer/form-footer";
import FormInput from "@/components/form-main/form-input/form-input";
import FormMain from "@/components/form-main/form-main";
import FormNotification from "@/components/form-main/form-notification/form-notification";
import FormTitle from "@/components/form-main/form-title/form-title";
import FormComponent from "@/components/form-main/form/form";

export default function Register() {
  const [error, setError] = useState<Record<string, string>>({});
  const [state, formAction, isPending] = useActionState(registerForms, null);

  useEffect(() => {
    if (state?.success === false) {
      toast.error(state.message);
      setError(state.errors || {});
    } else if (state?.success === true) {
      toast.success(state.message);
      setError({});
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
            title="Cadastre-se"
            description="Faça seu cadastro gratuitamente"
          />

          <FormComponent action={formAction}>
            <FormInput
              name="name"
              type="name"
              placeholder="Fulano de Tal"
              labelName="Nome"
              error={error.name}
            />

            <FormInput
              name="email"
              type="email"
              placeholder="eu@exemplo.com.br"
              labelName="Email"
              error={error.email}
            />

            <FormInput
              name="password"
              type="password"
              placeholder="********"
              labelName="Senha"
              error={error.password}
            />

            <Button
              type="submit"
              children="Registrar"
              className="w-full h-10"
              disabled={isPending}
            />

            <FormNotification
              children="Ao continuar, você concorda com nossos Termos de Uso e nossa
              Política de Privacidade."
            />
          </FormComponent>
        </div>

        <FormFooter
          children="Não possui cadastro?"
          href="/login"
          childrenLink="Faça o Login"
        />
      </FormMain>
    </main>
  );
}
