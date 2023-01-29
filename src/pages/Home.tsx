import Banner from "../component/Banner";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  Aos.init({
    duration: 2500,
    delay: 400,
  });
  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative ">
      <Banner />
    </div>
  );
}

export default App;
