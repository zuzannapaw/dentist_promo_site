import './App.css';
import Nav from './components/navigation/Nav';
import { Routes, Route } from 'react-router';
import AboutUsPage from "./pages/AboutUsPage"
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
