import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../App.css';
import ProductCard from '../ProductCard/ProductCard';
import ColorInput from '../inputs/ColorInput/ColorInput';
import RangeInput from '../inputs/RangeInput/RangeInput';
import TextInput from '../inputs/TextInput/TextInput';
import CalendarInput from '../inputs/DateTimePickerInput/CalendarInput';
import Header from '../Header/Header';
import {Button, Badge} from 'react-bootstrap'
import { UserContext } from '../../context/user.context'

function Home() {
    const productos = [
        {
            id: 1,
            title: "Producto 1",
            desc: "Descripcion del producto 1",
            imgSrc: "https://res.cloudinary.com/sahj/image/upload/v1626912538/samples/ecommerce/leather-bag-gray.jpg"
        },
        {
            id: 2,
            title: "Producto 2",
            desc: "Descripcion del producto 2",
            imgSrc: "https://res.cloudinary.com/sahj/image/upload/v1626912536/samples/people/bicycle.jpg"
        },
        {
            id: 3,
            title: "Producto 3",
            desc: "Descripcion del producto 3",
            imgSrc: "https://res.cloudinary.com/sahj/image/upload/v1626912532/samples/food/pot-mussels.jpg"
        },
        {
            id: 4,
            title: "Producto 4",
            desc: "Descripcion del producto 4",
            imgSrc: "https://res.cloudinary.com/sahj/image/upload/v1626912532/samples/food/pot-mussels.jpg"
        }
    ]

    const [currentYear, setCurrentYear] = useState(2023);

    const [nombreAlumno, setNombreAlumno] = useState('Juan');

    const pasos = [
        "pedido",
        "cocinando",
        "recolectando",
        "entrega",
        "cierre"
    ]

    const [paso, setPaso] = useState(0)

    const { user } = useContext(UserContext)

    const navigate = useNavigate()
    //currentYear = 2024 -> no valido

    //setCurrentYear(2024) //-> valido

    const handleGuttonClick = (evt) => {
        console.log(evt);
        setCurrentYear( currentYear + 1 );
        setNombreAlumno('Pedro');
    }

    const handleSiguientePaso = () => {
        setPaso( paso + 1 )
    }

    useEffect(() => {
        console.log("Home", user)
        if(user.token){
            navigate('/home')
        }
        return () => {
            console.log("useEffect cleanup")
        }
    }, [user])

   return(
    <div className="App">
        <Header />
        
        <h1>Estado de tu pedido</h1>
        <h2>{ pasos[paso] }</h2>
        <Button variant='secondary' onClick={handleSiguientePaso}>Siguiente Paso</Button>

        <br />
        {/** Se condiciona el renderizado de un componente
         * Si la condicion se cumple entonces se renderiza, de otra forma no existira el componte
         * Ojo, no confundir con que se oculta o algo asi, simplemente no existe
         */}
        {paso > 4 && (
            <Badge bg='success'>Tu pedido fue entregado</Badge>
        )}
            
        <br />
        
        {/** Usamos operador ternario
         * Si se cumple la condicion, se renderiza el primer componente
         * Si no, se renderiza el segundo despues de los dos puntos
         */}
        {paso > 4? 
            <Badge bg='success'>Tu pedido fue entregado</Badge>
            : <Badge bg='primary'>Estamos en proceso</Badge>
        }

        <h1>{nombreAlumno} UCamp Store app {currentYear} </h1>
        <button onClick={handleGuttonClick} >Aumentar año</button>
        
        <hr />
        <section className='display-flex'>
        {productos.map(prod => {
            return(
            <ProductCard
                key={prod.id}
                id={prod.id}
                title={prod.title}
                description={prod.desc}
                imageSrc={prod.imgSrc}
            ></ProductCard>
            )
        })}
        
        {/*<ProductCard 
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
        />  */}
        </section>

        <hr />

        <ColorInput />
        {/*<div>
        <input type="color" value={color} onChange={handleColorSelected} />
        <p>Color seleccionado: {color}</p>
        </div> */}

        <RangeInput />


        <TextInput rows={190} />

        <TextInput isTextArea={true} rows={5} />
        
        <CalendarInput />
    </div>
   ) 
}

export default Home