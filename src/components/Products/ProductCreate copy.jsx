import { useRef } from 'react';

function MyComponent() {

    const clickOnProduct = (id) => {
        {/** Genera una redirección hacia /products/:id */}
        navigate("/products"+"/"+id)
    }
    
   return(
     <></>
   ) 
}

export default MyComponent