import style from "./auth.module.scss";

import BackgroundRandom from "@/components/BackgroundRandom/BackgroundRandom";
import AuthForm from "@/components/AuthForm/AuthForm";

export default () => {
  return (
    <div className={style.main}>
      <BackgroundRandom />
      <AuthForm />
    </div>
  );
};
