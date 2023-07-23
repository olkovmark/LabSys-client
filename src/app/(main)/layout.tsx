import Header from "@/components/Header/Header";
import styles from "./main.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
