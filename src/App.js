//Styles
import "./styles/app.scss";

//Global Style from styled-components
import GlobalStyle from "./components/GlobalStyle";

//Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import Pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';

//Nav component
import Nav from './components/Nav';




function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
