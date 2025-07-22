import "./App.css";
import { ContactUs } from "./pages/contactus/ContactUs.tsx";

import { Home } from "./pages/home/Home.tsx";
import Navbar from "./pages/navbar/Navbar.tsx";
import Services from "./pages/services/Services.tsx";
import { Softwares } from "./pages/softwares/Softwares.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Softwares />
      <ContactUs />
    </>
  );
}

export default App;
