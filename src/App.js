import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import ProductCard from './components/ProductCard/ProductCard';
import ColorInput from './components/inputs/ColorInput/ColorInput';
import RangeInput from './components/inputs/RangeInput/RangeInput';
import TextInput from './components/inputs/TextInput/TextInput';

function App() {

  var nombre = 'Juan';

  const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 35,
    direccion: {
      ciudad: 'Bogota',
      zip: 111111,
    },
    licenciaturas: ['Sistemas', 'Aeronautica', 'Matematicas']
  }

  const [currentYear, setCurrentYear] = useState(2023);

  const [nombreAlumno, setNombreAlumno] = useState('Juan');


  //currentYear = 2024 -> no valido

  //setCurrentYear(2024) //-> valido

  const handleGuttonClick = (evt) => {
    console.log(evt);
    setCurrentYear( currentYear + 1 );
    nombre = 'Pedro';
    setNombreAlumno('Pedro');
  }


  return (
    <div className="App">
      <h1>{nombreAlumno} UCamp Store app {currentYear} </h1>
      <section className='display-flex'>
        <ProductCard 
          title="Producto 1" description="Descripcion del producto 1"
          imageSrc="https://res.cloudinary.com/sahj/image/upload/v1626912538/samples/ecommerce/leather-bag-gray.jpg"
          titulo="lo que sea"
        />

        <ProductCard 
          title="Producto 2"
          description="Descripcion del producto 2"
          imageSrc="https://res.cloudinary.com/sahj/image/upload/v1626912536/samples/people/bicycle.jpg"
        />
        
        <ProductCard 
          title="Producto 3"
          description="Descripcion del producto 3"
          imageSrc="https://res.cloudinary.com/sahj/image/upload/v1626912532/samples/food/pot-mussels.jpg"
        /> 

        <button onClick={handleGuttonClick} >Aumentar año</button>

      </section>

      <ColorInput />
      {/*<div>
        <input type="color" value={color} onChange={handleColorSelected} />
        <p>Color seleccionado: {color}</p>
      </div> */}

      <RangeInput />


      <TextInput rows={190} />

      <TextInput isTextArea={true} rows={20} />
      

    </div>
  );
}

export default App;
