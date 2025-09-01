// src/components/FallingLeaf.jsx
import { useMemo } from "react";
import { asset } from "../asset";

export default function FallingLeaves({
  images = ["icon/leaf_1.PNG", "icon/leaf_2.PNG", "icon/leaf_3.PNG", "icon/leaf_4.PNG", "icon/leaf_5.PNG"],
  count = 10,
  hideOnMobile = true,
  className = "",
}) {
  // 將傳入的相對路徑統一轉成含 /portfolio/ 的完整 URL
  const urls = useMemo(() => {
    const arr = Array.isArray(images) ? images : [images];
    return arr.map((p) => {
      if (!p) return "";
      if (/^https?:\/\//i.test(p)) return p;      // 外部網址就原樣
      const path = p.startsWith("/") ? p : `/${p}`; // 允許 "icon/xxx" 或 "/icon/xxx"
      return asset(path);
    });
  }, [images]);

  const leaves = useMemo(() => {
    const rand = (a, b) => a + Math.random() * (b - a);
    const pool = urls.length ? urls : [asset("/icon/leaf_1.PNG")]; // 保底
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: rand(0, 100),
      size: rand(20, 48),
      fall: rand(12, 24),
      sway: rand(3.5, 6.5),
      spin: rand(4, 7),
      delay: rand(0, 10),
      img: pool[Math.floor(Math.random() * pool.length)],
      opacity: rand(0.55, 0.9),
    }));
  }, [count, urls]);

  return (
    <div
      aria-hidden
      className={[
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none",
        hideOnMobile ? "hidden sm:block" : "",
        className,
      ].join(" ")}
    >
      {leaves.map((l) => (
        <div
          key={l.id}
          className="absolute will-change-transform"
          style={{
            left: `${l.left}%`,
            top: "-10%",
            animation: `leaf-fall ${l.fall}s linear ${l.delay}s infinite`,
          }}
        >
          <div
            className="will-change-transform"
            style={{
              animation: `leaf-sway ${l.sway}s ease-in-out ${l.delay / 2}s infinite alternate`,
            }}
          >
            <img
              src={l.img}
              alt=""
              className="block"
              style={{
                width: `${l.size}px`,
                opacity: l.opacity,
                animation: `leaf-rotate ${l.spin}s ease-in-out ${l.delay / 3}s infinite alternate`,
              }}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
