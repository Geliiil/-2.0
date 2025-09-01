import Navbar from "./components/Navbar";
import HeroSplit from "./components/HeroSplit";
import Stats from "./components/Stats";
import Skill from "./components/Skill";
import InternshipTimeLine from "./components/InternshipTimeLine";
import AboutBlock from "./components/AboutBlock";
import PortfolioShowcase from "./components/Portfolio";
import Footer from "./components/Footer";
import FallingLeaves from "./components/FallingLeaf";   

export default function App() {
  return (
    <div className="min-h-screen bg-stone-100">
      <div className="relative isolate min-h-[100dvh] w-screen overflow-x-clip bg-stone-100" >
        <FallingLeaves
            images={["icon/leaf_1.PNG", 
              "icon/leaf_2.PNG",
              "icon/leaf_3.PNG",
              "icon/leaf_4.PNG",
              "icon/leaf_5.PNG",
            ]}
            count={5}
            className="absolute inset-0 z- opacity-70 pointer-events-none outline outline-1 outline-red-500"
            hideOnMobile={false}
            />
      <div className="relative z-10 ">
        <main>
          <Navbar /> 
          <section className="px-6 md:px-10  ">
            <div className="grid lg:grid-cols-3 gap-10 ">
              <div className="lg:col-span-2">
                <HeroSplit />
              </div>
              <aside className="lg:col-span-1 lg:pt-40">
                <Stats />
              </aside>
            </div>
            <Skill />
          </section>
  
          <section className="px-6 md:px-10 py-20 " id="about">
            <AboutBlock />
          </section>

          <section className="px-6 md:px-10  md:pt-10 " id="experience">
            <InternshipTimeLine />
          </section>
          <section className="px-6 md:px-10 pt-12  ">
            <PortfolioShowcase />
          </section>
        </main>
        <Footer />
        </div>
      </div>
    </div>
  );
}


