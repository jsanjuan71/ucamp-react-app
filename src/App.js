import logo from './logo.svg';
import './App.css';

function App() {

  const bgColor = 'blue';

  const nombre = 'Juan';
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

  const estiloTitulo = {
    color: 'red',
    backgroundColor: bgColor
  }

  return (
    <div className="App">
      <figure className='product-card'>
        <img width="100%" src='https://res.cloudinary.com/sahj/image/upload/v1626912534/samples/ecommerce/shoes.png' />
        <figcaption>
          <h1 style={estiloTitulo} >Tenis de color morado</h1>
          <p>Calzado muy comodo y de buen material</p>
        </figcaption>

        <h1 style={estiloTitulo}>
          5 disponibles
        </h1>
        <p className={"bigSized "}>
          $ 1000
        </p>
      </figure>
    </div>
  );
}

export default App;
