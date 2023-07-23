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
          onClick(items);
          setOpen(!open);
        }}
      >
        {items.map((item: any, index: number) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div className={`${styles.conteiner} ${open ? styles.open : ""}`}>
        <div className={styles.content}>
          {children}
          {children}
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}
