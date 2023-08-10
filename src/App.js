import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Products from "./components/Products/Products";
import Patients from "./components/Patients/Patients";
import Patient from "./components/Patients/Patient";
import ProductCreate from "./components/Products/ProductCreate";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/contact" element={ <h1>Contacto</h1> } />
        <Route path="/products" element={ <Products />  } />

        <Route path="/products/customize" element={ <ProductCreate /> } />
        {/*<Route path="/products/:sku" element={ <Product /> } /> */}

        {/* Ruta para listar todos los pacientes */}
        <Route path="/patients" element={ <Patients /> } />
        {/* Ruta para ver un solo paciente usando su curp */}
        <Route path="/patients/:curp" element={ <Patient /> } />

        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Router>
  );
}

export default App;
