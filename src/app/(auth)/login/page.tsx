import Button from "@/components/button/button";
import FormFooter from "@/components/form-main/form-footer/form-footer";
import FormInput from "@/components/form-main/form-input/form-input";
import FormMain from "@/components/form-main/form-main";
import FormNotification from "@/components/form-main/form-notification/form-notification";
import FormTitle from "@/components/form-main/form-title/form-title";
import Form from "@/components/form-main/form/form";
import Notification from "@/components/notification/notification";

export default function Login() {
  return (
    <main className="w-full flex justify-center items-center h-screen">
      <FormMain>
        <div className="w-full">
          <FormTitle
            title="Boas Vindas"
            description="Faça seu login com email e senha"
          />

          <Form>
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

            <Button children="Login" className="w-full h-10" />

            <FormNotification
              children="Ao continuar, você concorda com nossos Termos 
              de Uso e nossa Política de Privacidade."
            />
          </Form>
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
