import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, ServiceHero, Navbar, Tech, Works, Blog, Login, Admin, PrivateRoute, SecretButton } from "./components";
import ServicesPage from "../src/pages/ServicePage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Route for Home Page */}
        <Route
          path="/"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <Blog />
              <div className='relative z-0'>
                <Contact />
              </div>
            </div>
          }
        />

        {/* Services Route */}
        <Route
          path="/services"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <ServiceHero />
              </div>

              <ServicesPage />
            </div>
          }
        />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Admin Route with Private Access */}
        <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
