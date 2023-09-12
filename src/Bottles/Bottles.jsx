import  { useEffect, useState } from 'react';
import Bottle from './Bottle/bottle';



const Bottles = () => {

    const[bottles,setBottles]  = useState([])
    const[cart,setCart] = useState([]);

    useEffect(() =>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    const handleAddedToCart = bottle =>{
        const newCart = [...cart,bottle];
        setCart(newCart);
    }

    return (
        <div>
            <h1>Bottles: {bottles.length}</h1>
            <h1>Cart: {cart.length}</h1>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px'}}>
                {
                bottles.map(bottle => <Bottle 
                    key={bottles.id} 
                    bottle={bottle}
                    handleAddedToCart={handleAddedToCart}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;