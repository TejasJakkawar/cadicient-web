import "./App.css";
import { ContactUs } from "./pages/contactus/ContactUs.tsx";
import AboutUs from "./pages/about-us/AboutUs.tsx";
import { Home } from "./pages/home/Home.tsx";
import Navbar from "./pages/navbar/Navbar.tsx";
import Services from "./pages/services/Services.tsx";
import { Softwares } from "./pages/softwares/Softwares.tsx";
import Footer from "./pages/footer/Footer.tsx";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator.tsx";

function App() {
  return (
    <>
      <ScrollIndicator />
      <Navbar />
      <div className="data-container-height mt-[100px] overflow-y-scroll">
        <Home />
        <AboutUs />
        <Services />
        <Softwares />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
