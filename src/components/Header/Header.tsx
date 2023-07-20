"use client";
import { useRouter, redirect } from "next/navigation";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

export default function Header() {
  const router = useRouter();
  return (
    <div>
      <ButtonPrimary onClick={() => logout()}>Logout</ButtonPrimary>
    </div>
  );
  function logout() {
    localStorage.removeItem("token");
    console.log(localStorage.getItem("token"));
    router.replace("/");
  }
}
