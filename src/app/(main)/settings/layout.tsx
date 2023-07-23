import Menu from "@/components/Menu/Menu";
import styles from "./Settings.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <div className={styles.menu_nav}>
        <Menu links={setting_links} />
      </div>
      <div className={styles.content}>{children}</div>
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
