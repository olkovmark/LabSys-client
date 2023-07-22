"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import logoutImg from "@/assets/images/icons/logout.svg";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const navLinks = navigationsLinks;
  const currentRoute = usePathname();
  const currentRouteIndex = navigationsLinks.findIndex(
    (v) => v.url === currentRoute
  );

  return (
    <div className={styles.header}>
      <Image
        priority={true}
        className={styles.logo}
        width={200}
        height={50}
        alt="logo"
        src={logo.src}
      ></Image>
      <nav className={styles.nav}>
        {navLinks.map((v, i) => (
          <Link
            key={i}
            href={v.url}
            className={`${styles.nav_item} ${
              i === currentRouteIndex ? styles.nav_active : ""
            }`}
          >
            {v.name}
          </Link>
        ))}
        <div
          className={styles.line}
          style={{ left: `${110 * currentRouteIndex + 10}px` }}
        ></div>
      </nav>
      <button
        className={styles.logout}
        style={{ backgroundImage: `url(${logoutImg.src})` }}
        onClick={() => logout()}
      ></button>
    </div>
  );
  function logout() {
    localStorage.removeItem("token");
    router.replace("/");
  }
}

export const navigationsLinks = [
  {
    name: "Analyses",
    url: "/analyses",
  },
  {
    name: "Patients",
    url: "/patients",
  },

  {
    name: "Settings",
    url: "/settings",
  },
  {
    name: "Analyses",
    url: "/analyses",
  },
  {
    name: "Patients",
    url: "/patients",
  },

  {
    name: "Settings",
    url: "/settings",
  },
];
