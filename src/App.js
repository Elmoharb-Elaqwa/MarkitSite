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
import Branding from './components/products/branding1/Branding';
import SocialMedia from './components/products/socialMedia/SocialMedia';
import WebApp from './components/products/web&app/WebApp';
import MediaGraphic from './components/products/mediaGraphic/MediaGraphic';
import PhotoVideos from './components/products/photoAndVideos/PhotoVideos';
import OffsitPrints from './components/products/offsetPrints/OffsitPrints';
import OutDoorIndoor from './components/products/outdoorAndIndoor/OutDoorIndoor';
function App() {
  const [serviceId, setServiceId] = useState({});
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/MarkitSite" element={<Home />} />
        <Route path="/MarkitSite/about" element={<About />} />
        <Route
          path="/MarkitSite/services"
          element={<Services setServiceId={setServiceId} />}
        />
        <Route
          path="/MarkitSite/services/:id"
          element={<Service service={serviceId} />}
        />
        <Route path="/MarkitSite/work" element={<Gallery />} />
        <Route path="/MarkitSite/contact" element={<Contact />} />
        <Route path="/MarkitSite/brand" element={<Branding />} />
        <Route path="/MarkitSite/social" element={<SocialMedia />} />
        <Route path="/MarkitSite/webapp" element={<WebApp />} />
        <Route path="/MarkitSite/media" element={<MediaGraphic />} />
        <Route path="/MarkitSite/photovideos" element={<PhotoVideos />} />
        <Route path="/MarkitSite/offset" element={<OffsitPrints />} />
        <Route path="/MarkitSite/outindoor" element={<OutDoorIndoor />} />
      </Routes>
    </div>
  );
}

export default App;
