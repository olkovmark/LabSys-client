"use client";
import { useState } from "react";
import styles from "./CollapsePanel.module.scss";

export default function CollapsePanel({ onClick, items, children }: any) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.panel}>
      <div
        className={styles.header}
        onClick={() => {
          setOpen(!open);
          onClick({ items, open: !open });
        }}
      >
        {items.map((item: any, index: number) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div className={`${styles.conteiner} ${open ? styles.open : ""}`}>
        <div className={styles.content}>
          <div className={styles.content_pad}>{children}</div>
        </div>
      </div>
    </div>
  );
}
