import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Blog, Login, Admin, PrivateRoute, SecretButton } from "./components";

const App = () => {
  return (
    <BrowserRouter>
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

        {/* Secret Button */}
        <SecretButton />
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
