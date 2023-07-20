"use client";

import style from "./BackgroundRandom.module.scss";
import icon_1 from "@/assets/images/icons/auth_icons/icon_1.svg";
import icon_2 from "@/assets/images/icons/auth_icons/icon_2.svg";
import icon_3 from "@/assets/images/icons/auth_icons/icon_3.svg";
import icon_4 from "@/assets/images/icons/auth_icons/icon_4.svg";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

function BackgroundRandom() {
  const [screenW, setScreenW] = useState(0);
  const [screenH, setScreenH] = useState(0);
  const icons = [icon_1.src, icon_2.src, icon_3.src, icon_4.src];

  useEffect(() => {
    setScreenW(window.innerWidth);
    setScreenH(window.innerHeight);
  }, []);
  return (
    <div>
      {Array(100)
        .fill(1)
        .map((v, index) => {
          const w = Math.random() * screenW;
          const h = Math.random() * screenH;
          const iconNum = Math.round(Math.random() * icons.length);
          const rotate = Math.round(Math.random() * 200);

          const elemtStyles = {
            top: h,
            right: w,
            transform: `rotate(${rotate}deg)`,
          };

          const element = (
            <img
              key={index}
              className={style.icon}
              src={icons[iconNum]}
              style={elemtStyles}
              alt=""
            />
          );
          return element;
        })}
    </div>
  );
}

export default dynamic(() => Promise.resolve(BackgroundRandom), {
  ssr: false,
});
