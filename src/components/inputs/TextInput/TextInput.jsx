import { useState } from "react";

import './textInput.css'

function TextInput( {
    isTextArea = false,
    ...props
} ) {
    const [text, setText] = useState( "" )


    const handleChangeText = ( {target} ) => {
        setText( target.value )
    }

    var component = null

    if( isTextArea === true ) {
        component = <textarea placeholder="Escriba aquí" value={text} rows={props.rows} onChange={handleChangeText} className="input-w50" ></textarea>
    } else {
        component = <input type="text" placeholder="Escriba aquí" value={text} onChange={handleChangeText} className="input-w50 input-w3rem" />
    }

    return (
        <>
            <hr />
            <label>Escriba un texto</label>
            <br />
            {component}
            <p>Text: {text}</p>
        </>
        
    )

}

export default TextInput
