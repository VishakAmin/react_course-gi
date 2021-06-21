import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [ itemAmount, setItemAmount] = useState(0)

  const amountInputRef = useRef();


  const handleClickremove = () => { 
    setItemAmount(itemAmount-1)
  }
  
  const handleClickadd = () => { 
    setItemAmount(itemAmount+1)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = itemAmount;
    const enteredAmountNumber = +enteredAmount;


    if (
      
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };


  // {/* } <form className={classes.form} > */}

  return (
   <div>
      <Input
        ref={amountInputRef}
        label='Amount'
        value={itemAmount}
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
        }}
      />
        <div className={classes.actions}>
          <button className={classes.buttons} onClick={handleClickremove}>−</button>
          <button className={classes.buttons} onClick={handleClickadd}>+</button>
        </div>
      <button className={classes.add} onClick={submitHandler} type="submit" >+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    {/* </form> */}
    </div>
  );
};

export default MealItemForm;
