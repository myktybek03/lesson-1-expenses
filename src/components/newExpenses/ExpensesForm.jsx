import React, { useState } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import './ExpensesForm.css'

const ExpensesForm = ({ onClose, onSubmit }) => {
   const [inputText, setInputText] = useState('')
   const [inputNumber, setInputNumber] = useState(0)
   const [inputDate, setInputDate] = useState(undefined)

   const getInputValue = (e) => {
      setInputText(e.target.value)
   }

   const getNumberValue = (e) => {
      setInputNumber(e.target.value)
   }

   const getDateValue = (e) => {
      setInputDate(e.target.value)
   }

   const submitHandler = (event) => {
      event.preventDefault()
      const product = {
         title: inputText,
         price: inputNumber,
         date: inputDate,
      }
      onSubmit(product)
      setInputText('')
      setInputNumber('')
      setInputDate('')
   }

   return (
      <form>
         <div className="expense-form_input">
            <Input
               value={inputText}
               type="text"
               placeholder="Заголовок"
               children="Заголовок"
               onChange={getInputValue}
            />
            <Input
               value={inputNumber}
               type="number"
               placeholder="Количество"
               children="Количество"
               onChange={getNumberValue}
            />
            <Input
               value={inputDate}
               type="date"
               placeholder="Датировать"
               children="Датировать"
               onChange={getDateValue}
            />
            <div className="button">
               <Button onClick={onClose} marginRight="20px">
                  Отмена
               </Button>
               <Button onClick={submitHandler}>Добавить расходы</Button>
            </div>
         </div>
      </form>
   )
}

export default ExpensesForm



// StateFull and Stateless




 // StateFull 

// import React, { Component } from 'react';

// class StatefulComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }


// Stateless

// import React from 'react';

// const StatelessComponent = (props) => {
   

//   return (
//     <div>
//       <p>{props.message}</p>
//     </div>
//   );
// };
