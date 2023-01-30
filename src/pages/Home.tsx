import Banner from "../component/Banner";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "../component/About";
import Technology from "../component/Technology";

function App() {
  Aos.init({
    duration: 2500,
    delay: 400,
  });
  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative ">
      <Banner />
      <About />
      <Technology />
    </div>
  );
}

export default App;
