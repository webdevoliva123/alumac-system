import "./App.css";
import MainHome from "./Pages/MainHome";
import { Route, Routes } from "react-router-dom";
import MainAboutUs from "./Pages/MainAboutUs";
import MainProducts from "./Pages/MainProducts";
import MainOurClient from "./Pages/MainOurClient";
import MainContactUs from "./Pages/MainContactUs";
import Data from "./Data/Data";
import Navbar from "./components/jsFiles/Navbar";
import MainProduct from "./Pages/MainProduct";
import Footer from "./components/jsFiles/Footer";
function App() {
  return (
    <div className="App">
      <Navbar relative={"relative"} web_logo={Data.webLogo} />
      <Routes>
        <Route
          exact
          path="/"
          element={<MainHome producShow={6} clientShow={3} />}
        />
        <Route
          exact
          path="/home"
          element={<MainHome producShow={6} clientShow={3} />}
        />
        <Route exact path="/aboutUs" element={<MainAboutUs />} />
        <Route
          exact
          path="/products"
          element={<MainProducts producShow={Data.product.length} />}
        />
        <Route
          exact
          path="/client"
          element={<MainOurClient clientShow={Data.clientData.length} />}
        />
        <Route
          exact
          path="/product/:id"
          element={<MainProduct clientShow={Data.product} />}
        />
        <Route exact path="/contact" element={<MainContactUs />} />
      </Routes>
      <Footer data={Data.footer}/>
    </div>
  );
}

export default App;
