import logo from './logo.svg';
import './App.css';
import ProductCard from './components/ProductCard/ProductCard';

function App() {

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

  

  return (
    <div className="App">
      <h1>UCamp Store app</h1>
      <section className='display-flex'>
        <ProductCard 
          title="Producto 1" description="Descripcion del producto 1"
          imageSrc="https://res.cloudinary.com/sahj/image/upload/v1626912538/samples/ecommerce/leather-bag-gray.jpg"
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
      </section>
    </div>
  );
}

export default App;
