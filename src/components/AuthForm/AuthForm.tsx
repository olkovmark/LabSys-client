"use client";
import { useState } from "react";
import Input from "../Input";
import style from "./AuthForm.module.scss";
import logo from "@/assets/images/logo.svg";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { getToken } from "@/services/api/userApi";
import styles from "./AuthForm.module.scss";

import { redirect, useRouter } from "next/navigation";

export default function ({ loginF }: any) {
  const router = useRouter();
  const [username, setUsername] = useState("olkovmark");
  const [password, setPassword] = useState("12345");
  const [isLoadin, setIsloadin] = useState(false);
  const isToken = localStorage.getItem("token");
  if (isToken) return redirect("/analyses");
  if (isLoadin)
    return (
      <div className={`spinner-grow ${styles.loader}`} role="status"></div>
    );
  return (
    <div className={style.form}>
      <img className={style.logo} src={logo.src} alt="" />
      <Input
        value={username}
        onChange={(v: any) => {
          v = setUsername(v.target.value);
        }}
        className={style.input}
        placeholder="username"
      />
      <Input
        value={password}
        onChange={(v: any) => {
          v = setPassword(v.target.value);
        }}
        className={style.input}
        placeholder="Password"
        type="password"
      />
      <ButtonPrimary onClick={() => login()} className={style.button}>
        Login
      </ButtonPrimary>
    </div>
  );

  async function login() {
    setIsloadin(true);
    try {
      const res = await getToken(username, password);
      if (res) {
        localStorage.setItem("token", res?.data.acces_token);
      }
      setIsloadin(false);
    } catch (error) {}
  }
}
