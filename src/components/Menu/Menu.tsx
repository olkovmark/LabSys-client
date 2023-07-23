"use client";
import Link from "next/link";
import styles from "./Menu.module.scss";
import { usePathname } from "next/navigation";
export default function Menu({ links }: any) {
  const currentRoute = usePathname();
  const currentRouteIndex = links.findIndex((v: any) => v.url === currentRoute);

  return (
    <div>
      <ul className={styles.menu}>
        {links.map((v: any, i: number) => (
          <li key={i} className={styles.menu_item}>
            <Link
              className={`${styles.menu_item_link} ${
                i === currentRouteIndex ? styles.active : ""
              }`}
              href={v.url}
            >
              {v.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
