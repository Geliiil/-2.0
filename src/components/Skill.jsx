const data = {
  specialties: [
    "Python 自動化",
    "R 簡單分析工作",
    "QGIS地圖繪製",
  ],
  experienced: [
    " Python ", "R", "QGIS ","GEE","React / 網站設計"
  ],
  learning: ["網站設計", "資料分析", "人工智慧","統計分析"]
};

export default function Skills() {
  return (
    <section className="pt-8 ">
      <h3 className="text-xl pt-4 font-bold">技能 / Skills</h3>
      <div className="mt-4 grid md:grid-cols-3 gap-6">
        <Card title="可獨立完成" items={data.specialties} tone="strong" />
        <Card title="有經驗" items={data.experienced} />
        <Card title="正在學習" items={data.learning} />
      </div>
    </section>
  );
}

function Card({ title, items, tone }) {
  return (
    <div className="bg-white border rounded-2xl p-4">
      <div className="font-semibold text-stone-600">{title}</div>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((t) => (
          <li
            key={t}
            className={`px-2.5 py-1 rounded-full text-sm bg-stone-200 text-black
            `}
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
