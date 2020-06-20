import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Confirmation from './Confirmation.js'
import Form from './Form.js'
import HomePage from './HomePage'
import * as Yup from 'yup'
import formSchema from '../validation/FormSchema'
import '../App.css'
import hero from '../static/pizza.jpg'
import axios from 'axios'

const App = () => {

  //////////////// INITIAL STATES ////////////////
  const initialFormValues = {
    name: '',
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
    axios.get('https://reqres.in/api/users')
      .then(response => {
        console.log(response)
        setOrder(response.data[1].data)
      })
      .catch(err => {
      })
  }

  const postNewOrder = (newOrder) => {
    axios.post('https://reqres.in/api/users', newOrder)
      .then(res => {
        console.log(res.data)
        setOrder([...order, res.data])
      })
      .catch(err => {
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
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
    // axios.post('https://reqres.in/api/users', formValues)
    //   .then(res => {
    //     setOrder([order, res.data])
    //     console.log(order)
    //   })

    const newOrder = {
      name: formValues.name,
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: Object.keys(formValues.toppings)
        .filter(toppingName => (formValues.toppings[toppingName] === true)),
      specialInstructions: formValues.specialInstructions
    }
    postNewOrder(newOrder)

  }
  /////////Side Effects//////////
  useEffect(() => {
    getOrders()
  }, [])

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
          <Link to='./Confirmation'>My Orders</Link>
        </div>
      </nav>
      <img src={hero} alt='fruit' />
      <Switch>
        <Route path="/Confirmation">
          <Confirmation order={order} />
        </Route>

        <Route path="/form">
          <Form
            values={formValues}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            disabled={disabled}
            errors={formErrors}
            order={order}
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
