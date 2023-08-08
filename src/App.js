import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Products from "./components/Products/Products";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />

        <Route path="/contact" element={ <h1>Contacto</h1> } />

        <Route path="/products" element={ <Products />  } />

        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Router>
  );
}

export default App;
