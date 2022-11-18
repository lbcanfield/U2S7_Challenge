import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import formSchema from './validation/formSchema';
import * as yup from 'yup';
import Home from './Home';
import OrderForm from './OrderForm';
import Help from './Help';


const initialFormValues = {
  nameinput: '',
  emailinput: '',
  crustsize: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  canadianbacon: false,
  spicyitaliansausage: false
}

const initialOrders = [];
const initialDisabled = true;


export default function App(props) {
  const { data } = props;

  // Obtain site variable from data
  // const sv = data.filter((element) => {
  //   return element.section === 'siteVariable';
  // })
  // console.log(sv);
  // const company = sv[0].companyName;


  // document.querySelector('title').textContent = `${company} Eats`;
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState('');
  const [disabled, setDisabled] = useState(initialDisabled);

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(error => setFormErrors({ ...formErrors, [name]: error.errors[0] }))
  }


  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value })
  }

  const formSubmit = () => {
    const newOrder = {
      nameinput: formValues.nameinput,
      emailinput: formValues.emailinput.trim(),
      crustsize: formValues.crustsize.trim(),
      sauce: formValues.sauce.trim(),
      toppings: ['pepperoni', 'sausage', 'canadianbacon', 'spicyitaliansausage']
        .filter(toppings => !!formValues[toppings])
    }
    postNewOrder(newOrder);
    console.log(newOrder);
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(response => {
        setOrders([response.data, ...orders]);
      })
      .catch(error => console.error(error))
      .finally(() => setFormValues(initialFormValues))
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <div className='App'>
      <nav className='nav-container'>
        {/* <h1>{company} Eats</h1> */}
        <h1>Lambda Eats</h1>
        <div className='navBtns'>
          <button>
            <Link to='/'>Home</Link>
          </button>
          <button>
            <Link id='order-pizza' to='/pizza'>Pizza</Link>
          </button>
          <button>
            <Link to='/help'>Help</Link></button>
        </div>
      </nav>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/help'><Help /></Route>
        <Route path='/pizza'>
          <OrderForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            errors={formErrors}
          />
        </Route>

      </Switch>

    </div>
  );
};
