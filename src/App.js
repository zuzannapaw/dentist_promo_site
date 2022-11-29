import './App.css';
import Nav from './components/navigation/Nav';
import { Routes, Route } from 'react-router';
import AboutUsPage from "./pages/AboutUsPage"
import Footer from './components/footer/Footer';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUsPage />} />
        <Route path="/gallery" element={<GalleryPage/>} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
