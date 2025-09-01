import { useMemo } from "react";

export default function FallingLeaves({
    images = ["/icon/leaf_1.PNG","/icon/leaf_2.PNG"],
    count = 10,
    hideOnMobile = true,
}){
    const leaves = useMemo(()=>{
        const rand = (a,b) => a + Math.random()*(b-a);
        return Array.from({length: count}).map((_,i)=>({
            id: i,
            left: rand(0, 100),           // 葉子「水平起點」(百分比)，散在整個寬度
            size: rand(20, 48),           // 圖片寬度（px）
            fall: rand(12, 24),           // 掉落一圈的時間（秒）
            sway: rand(3.5, 6.5),         // 左右擺動的時間（秒）
            spin: rand(4, 7),             // 旋轉時間（秒）
            delay: rand(0, 10),           // 開始前延遲（秒），讓它們別同時開始
            img: images[Math.floor(Math.random() * images.length)], // 隨機挑一張圖
            opacity: rand(0.55, 0.9),     // 透明度：看起來遠近不一
        }));
    },[count,images]);

    return (
        <div
        aria-hidden
        className={["pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none",
        hideOnMobile ? "hidden sm:block" : "", // 手機隱藏：需要就拿掉
      ].join(" ")}>

    {leaves.map((l) => (
        // 外層：只負責「垂直掉落」
        <div
          key={l.id}
          className="absolute will-change-transform"
          style={{
            left: `${l.left}%`,                     // 散佈水平位置
            top: "-10%",                            // 從視口上方之外開始
            animation: `leaf-fall ${l.fall}s linear ${l.delay}s infinite`, // 直直往下
          }}
        >
          {/* 中層：只負責「左右擺動」 */}
          <div
            className="will-change-transform"
            style={{
              animation: `leaf-sway ${l.sway}s ease-in-out ${l.delay / 2}s infinite alternate`,
            }}
          >
            {/* 內層：圖像本身與「旋轉」 */}
            <img
              src={l.img}
              alt=""
              className="block"
              style={{
                width: `${l.size}px`,
                opacity: l.opacity,
                animation: `leaf-rotate ${l.spin}s ease-in-out ${l.delay / 3}s infinite alternate`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}