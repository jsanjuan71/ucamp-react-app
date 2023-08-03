import { useState } from "react";

function RangeInput( {min = 0, max = 100, ...props} ) {
    const [number, setNumber] = useState( 10 )


    const handleChangeRange = ( {target} ) => {
        setNumber( target.value )
    }

    return (
        <>
            <input type="range" value={number} min={ min } max={ max } onChange={handleChangeRange} className={props.class} />
            <p>Numero: {number}</p>
        </>
        
    )

}

export default RangeInput
