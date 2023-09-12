
import './bottle.css'
const Bottle = ({bottle,handleAddedToCart }) => {

    const{name,img,price} = bottle;
    return (
        <div className="bottle">
            <h2>{name}</h2>
            <img src={img} alt="" />
            <h2>Price: ${price}</h2>
            <button onClick={()=>handleAddedToCart(bottle) }>Purchase</button>
          
        </div>
        
    );
};

export default Bottle;