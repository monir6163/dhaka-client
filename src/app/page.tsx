import Blog from "./components/Blog";
import Contact from "./components/Contact";
import DownloadApp from "./components/DownloadApp";
import Features from "./components/Features";
import Home from "./components/Home";
import HowitWorks from "./components/HowitWorks";
import Pricing from "./components/Pricing";
import SavingMoney from "./components/SavingMoney";
import Testimonial from "./components/Testimonial";

export default function Index() {
    return (
        <main>
            <Home />
            <Features />
            <SavingMoney />
            <HowitWorks />
            <Testimonial />
            <Pricing />
            <Blog />
            <DownloadApp />
            <Contact />
        </main>
    );
}
