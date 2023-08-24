import { Component } from "react";
import moment from 'moment'
import 'moment/locale/es' // importar de moment el locale 'es' para español

class CalendarInput extends Component { // Definición del componente usando clases
   
    constructor() { // definición del constructor
        super() // se inicializa la clase base Component para poder acceder a this.state
        this.state = { // inicializar el state
            date: moment().format("MM/DD/YYYY") // declarar un state con valor default
        }
        moment.locale("es") // cambiamos el lenguaje para mostrar las fechas en español
    }

    render() { // definimos el metodo render
        /** Siempre debemos retornar un unico elemento padre */
        return <> 
            <hr />
            <label>Seleccione una fecha: </label>
            <br />
            <input 
                type="date" 
                // Se usa this.state para acceder a un estado
                value={this.state.date}
                // * Se omite el uso de un handler, sino se manda una funcion flecha para cambiar el valor
                // Se usa this.setState para cambiar el valor de un estado
                onChange={ ({target}) => this.setState({date: target.value}) } 
                className={this.props.class} />

            {/** se pone la fecha en un formato amigable */}
            <p>Fecha: { moment(this.state.date).format("LLL") }</p>
        </>
    }

}

export default CalendarInput
