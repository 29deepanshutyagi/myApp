import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/App.scss";
import { Link } from "react-router-dom";
// import Footer from "./components/Footer";
import "./styles/header.scss";
import "./styles/Home.scss";
import "./styles/footer.scss";
import Contact from "./components/Contact";
import Services from "./components/Services";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";

function App() {
  const footerStyles = `
  background-color: #ffffff;
  height: 200px;
  width: 100%;
  color: #000000;
  display: grid;
  grid-template-columns: 4fr 1fr;
  padding: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
      font: 700 2rem Arial, sans-serif;
      text-transform: uppercase;
      color: #ff0000;
    }

    > p {
      font: 500 1.2rem Arial, sans-serif;
    }

    > h5 {
      font: 300 2rem Arial, sans-serif;
      margin: 1rem 0;
      text-align: center;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      a {
        color: #000000;
        font: 900 1rem Verdana, sans-serif;

        &:hover {
          color: #ff0000;
        }
      }
    }
  }
`;
  return (
   <Router>
    <Header/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
     </Routes>
     <footer style={{ cssText: footerStyles }}>
        <div>
          <h1>TechyStar</h1>
          <p>@all right reserved</p>
        </div>

        <div>
          <h5>Follow Us</h5>
          <div>
            <Link to="https://youtube.com" target="_blank">
              Youtube
            </Link>
            <Link to="https://instagram.com/_deepanshutyagi._" target="_blank">
              Instagram
            </Link>
            <Link to="https://github.com/29deepanshutyagi" target="_blank">
              Github
            </Link>
          </div>
        </div>
      </footer>
    
   </Router>
  );
}

export default App;
