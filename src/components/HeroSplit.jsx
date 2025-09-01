import profile from "../assets/profile.jpg"; 


export default function HeroSplit() {
  const address = "ge268413975@gmail.com"
  const copy = async()=>{
    try{
      await navigator.clipboard.writeText(address);
      alert("Text copy!");
    } catch(err){
      console.error('Failed to copy text: ', err);
      alert('Failed to copy text.');
    }
  };
    return (
      <section id="home" className="grid lg:grid-cols-2  flex gap-8 items-center pt-30">
        <div className="relative flex justify-center ">
          <img
            src={profile}
            alt="portrait"
            className=" h-48 rounded-full object-cover"
          />
        </div>
        <div className="text-black ">
          <h1 className="mt-2 text-3xl md:text-5xl font-black leading-[1.05]">
          Hey, 我叫蔡宜倫
          </h1>
          <p className="mt-5 max-w-xl text-stone-700">
            喜歡大自然、程式設計以及資料分析
          </p>
          <p className="mt-5 max-w-xl text-stone-700">
            嘗試挑戰新事物，但有點金魚腦
          </p>
          <div className="flex flex-wrap gap-1  w-full">
            <a href="https://github.com/Geliiil" target="_blank" rel="noopener noreferrer" className="w-15 h-20 px-1 py-4 ">
              <img src="./icon/github-mark.png"className=" bg-white rounded-full w-10 h-10 hover:w-11 hover:h-11 "/>  
            </a>
            <div className="mt-4 w-80 h-10 bg-white rounded-xl shadow-sm px-2
                flex items-center gap-2">
              <img
                src="icon/gmail.png"  // 或用你的 asset()：asset("icon/gmail.png")
                alt="gmail"
                className="w-6 h-6 shrink-0 rounded"
              />
              <p className="flex-1 min-w-0 truncate text-sm leading-none">ge268413975@gmail.com</p>

              <button
                type="button"
                onClick={copy}
                className="shrink-0 h-8 px-3 rounded-xl border border-black
                          hover:bg-stone-100 cursor-pointer bg-white"
              >
                Copy
              </button>
            </div>

          </div>
        </div>
        
      </section>
    );
  }
  