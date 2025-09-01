import { useState, useRef, useEffect } from "react";
import ITEMS from "../data/projects";
import { asset } from "../asset";  

function parseYearMonth(s) {
  if (!s) return { y: NaN, m: NaN };
  const [yy, mm] = s.split("-").map(Number);
  return { y: yy, m: mm || 1 };
}
function yearLabel(a, b) {
  const ya = parseYearMonth(a).y;
  const yb = b ? parseYearMonth(b).y : ya;
  return ya === yb ? `${ya}` : `${ya}–${yb}`;
}

export default function InternshipTimeline({ items = ITEMS }) {
  const [idx, setIdx] = useState(0);
  const [photoIdx, setphotoIdx] = useState(0);
  const n = items.length;
  const wrap = (i) => (i + n) % n;

  useEffect(() => { setphotoIdx(0); }, [idx]);

  // 觸控滑動（手機）
  const touchX = useRef(null);
  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) setIdx((i) => (dx < 0 ? wrap(i + 1) : wrap(i - 1)));
    touchX.current = null;
  };

  // 鍵盤左右鍵
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") setIdx((i) => wrap(i + 1));
    if (e.key === "ArrowLeft") setIdx((i) => wrap(i - 1));
  };

  const cur = items[idx];
  const photos = (Array.isArray(cur.images) && cur.images.length ? cur.images : []).slice(0, 12);
  const pCount = Math.max(1, photos.length);

  const nextPhoto = () => setphotoIdx((k) => (k + 1) % pCount);
  const prevPhoto = () => setphotoIdx((k) => (k - 1 + pCount) % pCount);

  const onImgError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = typeof PLACEHOLDER !== "undefined" ? PLACEHOLDER : asset("image/wildlife_lab.jpg");
  };

  return (
    <section
      className="select-none pt-5 "
      tabIndex={0}
      onKeyDown={onKeyDown}
      aria-label="Internship timeline (buttons only)"
    >
      <h3 className="text-3xl mt-4 font-bold">歷程經驗 / Experience</h3>

      {/* 上方控制列 */}
      <div className="flex items-center justify-between gap-3 py-4">
        <button
          className="border px-3 py-1.5 rounded-lg hover:bg-neutral-50"
          onClick={() => setIdx((i) => wrap(i - 1))}
          aria-label="上一個"
        >
          ←
        </button>

        <div className="flex flex-col items-center min-w-24">
          <h1 className="md:text-6xl text-3xl font-semibold tracking-wide text-black">
            {yearLabel(cur.start, cur.end)}
          </h1>
        </div>

        <button
          className="border px-3 py-1.5 rounded-lg hover:bg-neutral-50"
          onClick={() => setIdx((i) => wrap(i + 1))}
          aria-label="下一個"
        >
          →
        </button>
      </div>

      {/* 主內容 */}
      <div
        className="grid md:grid-cols-2 items-start bg-white rounded-2xl p-5"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* 左：文字 */}
        <div className="bg-white border rounded-2xl p-5 ">
          <div className="text-lx tracking-wider text-neutral-500">
            {yearLabel(cur.start, cur.end)}
          </div>
          <h3 className="mt-1 text-xl font-bold">{cur.title}</h3>
          <p className="mt-3 text-neutral-700 leading-7">{cur.summary}</p>

          {cur.tags?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {cur.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full bg-black text-white text-xs">
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          {cur.link ? (
            <a
              className="inline-block mt-4 border border-black px-3 py-2 rounded-lg text-sm hover:bg-neutral-50"
              href={cur.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex justify-center gap-2">
                <img
                  src={asset(cur.link_photo)}  
                  className="w-5 h-5"
                  alt=""
                  onError={onImgError}
                />
                <p className="text-black">{cur.link_name}</p>
              </div>
            </a>
          ) : null}
        </div>

        {/* 右：圖片 */}
        <div className="bg-white border rounded-2xl p-3 ">
          <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
            <img
              key={`${idx}-${photoIdx}`}
              src={photos[photoIdx] ? asset(photos[photoIdx]) : PLACEHOLDER}  
              alt={`${cur.title} - photo ${photoIdx + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              onError={onImgError}
            />
            {pCount > 1 && (
              <>
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 border bg-white/80 backdrop-blur px-2 py-1 rounded-lg hover:bg-white"
                  onClick={prevPhoto}
                  aria-label="上一張照片"
                >
                  ‹
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 border bg-white/80 backdrop-blur px-2 py-1 rounded-lg hover:bg-white"
                  onClick={nextPhoto}
                  aria-label="下一張照片"
                >
                  ›
                </button>
                <div className="absolute right-2 top-2 text-xs px-2 py-1 rounded bg-white/50 border">
                  {photoIdx + 1}/{pCount}
                </div>
              </>
            )}
          </div>

          {pCount > 1 && (
            <div className="mt-2 flex gap-2 overflow-x-auto rounded-lg">
              {photos.map((src, i) => (
                <button
                  key={i}
                  className={`m-1 w-16 h-10 rounded-lg overflow-hidden border ${i === photoIdx ? "ring-3 ring-black rounded-lg" : ""}`}
                  onClick={() => setphotoIdx(i)}
                  aria-label={`第 ${i + 1} 張縮圖`}
                >
                  <img
                    src={asset(src)}          
                    alt={`thumb ${i + 1}`}
                    className="w-full h-full object-cover"
                    onError={onImgError}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
