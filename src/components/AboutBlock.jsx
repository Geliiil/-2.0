
export default function AboutBlock() {
    return (
      <div className="relative pt-20">
        <div className="relative grid  md:grid-cols-2 gap-10 items-start ">
          <div className="relative flex justify-center overflow-hidden">
            <div className="relative z-20  lg:mt-10  ">
              <h2 className=" text-4xl md:text-5xl font-black leading-tight text-stone-700 p-10 ">
                關於我以及<br/>一些自我介紹<br/>
              </h2>
            </div>
          </div>
          <div className="relative z-20">
            <div className="relative space-y-4  p-10 z-10">
              <p className="text-stone-700">
                Hi，我是蔡宜倫，我目前就讀國立中興大學森林學系。對森林生態研究、程式撰寫、網頁開發、資料分析以及地理資訊資料分析充滿興趣。
              </p>
              <p className="text-stone-700">
                專注並嘗試用不同方式將生態、地理資訊資料分析更自動化、視覺化。實際應用如使用GEE篩選、擷取長期的指標（NDVI/NDWI）資料，並撰寫R進行資料分析與視覺化圖表輸出。
                另外也在學習其他領域知識，如網頁設計與開發、統計分析以及資料分析等，並以線上自學的方式學習。未來目標是可以將森林生態資料與資訊應用、資料分析等領域應用結合，探索新的研究方法、分析方式與呈現方式。
              </p>
              <p className="text-stone-700">
               雖然我的學習過程中很多時候很仰賴AI的輔助，但我覺得最重要的就是可以從AI中學習到更多知識，啟發更多的想法並實踐，除了可以短時間解決問題，也可以在之中變成找到問題、提出問題與反思的角色，這是我學習過程中收穫最多的。
              </p>
            </div>

            <div aria-hidden 
            className="absolute inset-0 bg-stone-200/50 backdrop-blur-md rounded-2xl pointer-events-none  z-5"/>
            </div>
        </div>

      </div>
    );
  }
  