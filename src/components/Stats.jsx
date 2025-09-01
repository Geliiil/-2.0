export default function Stats() {
    const items = [
      { k: "目前就讀", v: "國立中興大學森林系" },
      { k: "目前研究", v: "枯落物動態、遙測" },
      { k: "使用工具", v: "GEE、R、python、QGIS..." }
    ];
    return (
      <div className="bg-white rounded-2xl border p-6 space-y-5 ">
        {items.map(x => (
          <div key={x.v} className="flex items-baseline gap-4">
            <div className="text-1xl text-stone-600 font-extrabold">{x.k}</div>
            <div className="text-m text-stone-600">{x.v}</div>
          </div>
        ))}
      </div>
    );
  }
  