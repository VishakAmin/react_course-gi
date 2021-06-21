import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };


  // {cartCtx.items.map((item) => (
  //   <CartItem
  //     key={item.id}
  //     name={item.name}
  //     amount={item.amount}
  //     price={item.price}
  //     onRemove={cartItemRemoveHandler.bind(null, item.id)}
  //     onAdd={cartItemAddHandler.bind(null, item)}
  //   />

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>  
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}  />
      </div>
    </li>
  );
};

export default MealItem;
