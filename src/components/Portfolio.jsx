import Project from "../data/portfolio";
import { asset } from "../asset";

export default function PortfolioShowcase({ items = Project }) {
  return (
    <div id="portfolio">
      <h3 className="text-3xl pt-25 md:pt-20 font-extrabold tracking-wide">作品集 / Portfolio</h3>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6">
        {items.map((t) => (
          <Card key={t.title} items={t} />   
        ))}
      </div>
    </div>
  );
}

function Card({ items }) {
  // 取封面圖（images 可能是字串或陣列）
  const cover = Array.isArray(items.images) ? items.images[0] : items.images;

  const onImgError = (e) => {
    e.currentTarget.onerror = null;
    // 沒有預備圖就先隱藏，或換成你有的占位圖：asset("image/placeholder.jpg")
    e.currentTarget.style.visibility = "hidden";
  };

  return (
    <div className="mt-6 border rounded-3xl p-10 bg-white border-black border-xl shadow-xl">
      <img
        src={asset(cover)}                  
        alt={items.title}
        className="w-full h-[360px] md:h-[460px] object-cover rounded-2xl border-black border overflow-hidden"
        loading="lazy"
        onError={onImgError}
      />

      <div className="flex flex-col md:flex-row md:items-center justify-between px-2 md:px-3 py-4 text-sm text-stone-700">
        <div>
          <div className="flex justify-between">
            <h3 className="text-2xl font-semibold order-first">{items.title}</h3>

            {items.link ? (
              <a
                className="inline-block border border-black p-1 rounded-lg text-sm hover:bg-neutral-50 order-last"
                href={items.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex justify-center gap-2">
                  <img
                    src={asset(items.link_photo || "")}   
                    className="w-5 h-5"
                    alt=""
                    onError={onImgError}
                  />
                  <p className="text-black">{items.link_name}</p>
                </div>
              </a>
            ) : null}
          </div>

          <div className="text-x pt-2">{items.summary}</div>

          <ul className="flex flex-wrap gap-2 py-2">
            {items.tags?.map((t) => (
              <li key={t} className="px-2 py-0.5 text-sm border border-[#2ea936] rounded-full bg-white text-[#2ea936]">
                {t}
              </li>
            ))}
          </ul>

          <p className="border-t border-black pt-2">作者：{items.co_authors}</p>
        </div>
      </div>
    </div>
  );
}
