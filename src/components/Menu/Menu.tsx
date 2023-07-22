import Link from "next/link";
import styles from "./Menu.module.scss";
export default function Menu() {
  return (
    <div>
      <ul className={styles.menu}>
        {setting_links.map((v) => (
          <li className={styles.menu_item}>
            <Link href={v.url}>{v.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const setting_links = [
  {
    name: "Users",
    url: "/settings/users",
  },
  {
    name: "Analyses",
    url: "/settings/analyses",
  },
];
