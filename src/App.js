import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './Component/HomePage';
import { AboutUsPage } from './Component/AboutUsPage';
import { ContactUsPage } from './Component/ContactUsPage';
import { Header } from './Component/Header';
import { Footer } from './Component/Footer';
import { OurServicePage } from './Component/OurServicePage';
import { Login } from './Component/Login';

const Layout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/";

  return (
    <div className="mainComponent">
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/service" element={<OurServicePage />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
