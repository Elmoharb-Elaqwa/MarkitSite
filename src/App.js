import About from './components/about/About';
import Blog from './components/bolg/Blog';
import Contact from './components/contact/Contact';
import Events from './components/events/Events';
import Gallery from './components/gallery/Gallery';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import { Routes, Route } from 'react-router-dom';
import ServicesPage from './components/servicesPage/ServicesPage';
import Service from './components/services/service/Service';
import { useState } from 'react';
function App() {
  const [serviceId, setServiceId] = useState({});
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/MarkitSite" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/services"
          element={<Services setServiceId={setServiceId} />}
        />
        <Route
          path="MarkitSite/services/:id"
          element={<Service service={serviceId} />}
        />
        <Route path="/work" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
