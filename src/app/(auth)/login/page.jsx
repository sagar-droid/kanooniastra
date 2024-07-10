import LoginForm from "../../../component/loginForm/LoginForm";
import { handleGithubLogin } from "../../../lib/action";
const LoginPage = async () => {
  return (
    <div className=" flex flex-col gap-10 justify-center items-center p-24">
      <LoginForm />
      <form
        action={handleGithubLogin}
        className=" flex justify-center items-center text-blue-600">
        <button className=" rounded bg-white p-2">Login with Github</button>
      </form>
    </div>
  );
};
export default LoginPage;
