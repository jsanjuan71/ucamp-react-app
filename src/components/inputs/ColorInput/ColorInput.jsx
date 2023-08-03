import { useState } from 'react';

function ColorInput( props ) {

    const [color, setColor] = useState( "red" );


    const handleColorSelected = (evt) => {
        setColor( evt.target.value );
    }

    return (
        <>
            <input type="color" value={color} onChange={handleColorSelected} />
            <p>Color seleccionado: {color}</p>
        </>
    )
}

export default ColorInput;