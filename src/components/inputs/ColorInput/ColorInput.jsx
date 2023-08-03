import { useState } from 'react';

function ColorInput( props ) {

    const [color, setColor] = useState( "#ff00ff" );


    const handleColorSelected = (evt) => {
        setColor( evt.target.value );
    }

    const spanSyle = {
        color: color
    }

    return (
        <>
            <hr />
            <label>Seleccione un color:</label>
            <br />
            <input type="color" value={color} onChange={handleColorSelected} />
            <p>Color seleccionado: <span style={spanSyle}>{color}</span></p>
        </>
    )
}

export default ColorInput;