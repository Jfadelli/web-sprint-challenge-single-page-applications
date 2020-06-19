import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom'
import Confirmation from './Confirmation.js'
import Form from './Form.js'
import HomePage from './HomePage'
import * as Yup from 'yup'
import formSchema from '../validation/FormSchema'
import '../App.css'
import hero from '../static/pizza.jpg'
const App = () => {

  //////////////// INITIAL STATES ////////////////
  const initialFormValues = {
    size: '',
    sauce: '',
    toppings: {
      pepperoni: false,
      sausage: false,
      canadianBacon: false,
      grilledChicken: false,
      onions: false,
      greenPeppers: false,
      dicedTomatos: false,
      blackOlives: false,
      roastedGarlic: false,
      pineapple: false,
      threeCheese: false,
      extraCheese: false,
      glutenFree: false
    },

    specialInstructions: '',
  }

  const initialFormErrors = {
    size: '',
    sauce: '',
  }

  const initialOrder = []
  const initialDisabled = true

  //////////////// STATES ////////////////
  const [order, setOrder] = useState(initialOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  //////////////// HELPERS ////////////////
  const getOrders = () => {

  }

  const postNewOrder = () => {
    setOrder([...order, formValues])
    setFormValues(initialFormValues)
  }

  //////////////// EVENT HANDLERS ////////////////
  const onInputChange = evt => {
    const { name, value } = evt.target
    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckboxChange = evt => {
    const { name, checked } = evt.target

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      }
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newOrder = {
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: Object.keys(formValues.toppings)
        .filter(toppingName => (formValues.toppings[toppingName] === true)),
      glutenFree: formValues.glutenFree,
      specialInstructions: formValues.specialInstructions
    }
    postNewOrder(() => {
      getOrders()
    })
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })
  }, [formValues])



  return (
    <div className='home-page'>
      <nav>
        <h1>Lambda Eats</h1>
        <p>Hungry? We've got you covered</p>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/Form'>Order</Link>
        </div>
      </nav>
      <img src={hero} alt='fruit' />
      <Switch>
        <Route path="/Confirmation">
          <Confirmation />
        </Route>

        <Route path="/form">
          <Form
            values={formValues}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
