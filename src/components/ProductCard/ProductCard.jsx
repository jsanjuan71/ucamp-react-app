
function ProductCard( props ) {

    const bgColor = 'lightgrey';

    const estiloTitulo = {
        backgroundColor: bgColor
    }

    return (
        <figure className='product-card'>
        <img width="100%" src={props.imageSrc} />
        <figcaption>
          <h1 style={estiloTitulo} >{props.title}</h1>
          <p>{props.description}</p>
        </figcaption>

        <h1 style={estiloTitulo}>
          5 disponibles
        </h1>
        <p className={"bigSized price"}>
          $ 1000
        </p>
      </figure>
    )
}

export default ProductCard;