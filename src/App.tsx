import Header from "./components/Header";
import Hero from "./components/section/Hero";
import Uspc from "./components/section/Uspc";
import Trail from "./components/section/Trail";
import VideoCarousel from "./components/section/Video-Carousel";

function App() {
  return (
    <div>
      <Header />
      <main>
        <div className="bg-backgound relative z-10">
          <Hero />
          <Uspc />
          <Trail />
        </div>
        <VideoCarousel />
        <div className="h-[300vh]">3 col</div>
      </main>
    </div>
  );
}

export default App;
