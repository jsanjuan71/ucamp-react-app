import { useEffect, useState, useRef } from "react"

function UseRef() {
    const [inputValue, setInputValue]  = useState('')
    const [segundos, setSegundos] = useState(0)

    const [desde, setDesde] = useState(0)
    const [hasta, setHasta] = useState(20)

    

    //pokemons.slice(desde, hasta)


    const count = useRef(0)
    const timer = useRef(null)

    useEffect( () => {
        if( timer.current == null) {
            timer.current = setInterval( ()=> {
                count.current = count.current + 1
                console.log("Count value:", count.current )
                //setSegundos( segundos + 1) // = 1
            }, 1000 )
        }
    }, [] )

    const handleInputChange = ({target}) => {
        setInputValue( target.value )
        setSegundos( segundos + 1)
    }

    return (
        <>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <h1>Count value: {count.current}</h1>
            <p>{segundos} segundos</p>
        </>
    )
}

export default UseRef