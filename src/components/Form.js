import React from 'react'
import { Link } from 'react-router-dom'
import ThisOrder from './ThisOrder'

export default function Form(props) {
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        errors,
        order,
    } = props;

    // const nextPath = (path) => {
    //     this.props.history.push(path)
    // }
    return (
        <form className='form container' onSubmit={onSubmit}>
            <h2>Build Your Own Pizza</h2>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
                <div>{errors.sauce}</div>
            </div>

            {/* ////////// DROPDOWN ////////// */}
            <div className="form-group inputs">
                <label>Name: &nbsp;
                    <input
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                    />
                </label>
                <label>Size:&nbsp;
                    <select
                        onChange={onInputChange}
                        value={values.size}
                        name='size'
                    >
                        <option value=''>- Select an option -</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                <label>Sauce:&nbsp;
                    <select
                        onChange={onInputChange}
                        value={values.sauce}
                        name='sauce'
                    >
                        <option value=''>- Select an option -</option>
                        <option value='marinara'>Marinara</option>
                        <option value='white'>White</option>
                        <option value='bbq'>BBQ</option>
                    </select>
                </label>
            </div>

            <div className='form-group checkboxes'>
                <h4>Toppings</h4>

                {/* ////////// CHECKBOXES ////////// */}
                <label>Pepperoni
                        <input
                        name='pepperoni'
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.pepperoni}
                    />
                </label>

                <label>Sausage
                        <input
                        name='sausage'
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.sausage}
                    />
                </label>

                <label>Canadian Bacaon
                        <input
                        name='canadianBacon'
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.canadianBacon}
                    />
                </label>
                <label>Grilled Chicken
                        <input
                        name='grilledChicken'
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.grilledChicken}
                    />
                </label>
                <label>Onions
                        <input
                        name='onions'
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.onions}
                    />
                </label>
                <label>Green Peppers
                        <input
                        name='greenPeppers'
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.greenPeppers}
                    />
                </label>
                <label>Diced Tomatos
                        <input
                        name='dicedTomatos'
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.dicedTomatos}
                    />
                </label>
                <label>Black Olives
                        <input
                        name='blackOlives'
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.blackOlives}
                    />
                </label>
                <label>Roasted Garlic
                        <input
                        name='roastedGarlic'
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.roastedGarlic}
                    />
                </label>
                <label>Pineapple
                        <input
                        name='pineapple'
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.pineapple}
                    />
                </label>
                <label>Three Cheese
                        <input
                        name='threeCheese'
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.threeCheese}
                    />
                </label>
                <label>Extra Cheese
                        <input
                        name='extraCheese'
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.extraCheese}
                    />
                </label>
            </div>
            {/* ////////// TEXT INPUTS ////////// */}

            <label>Special Instructions&nbsp;
          <input
                    value={values.specialInstructions}
                    onChange={onInputChange}
                    name='specialInstructions'
                    type='text'
                />
            </label>

            {/* ////////// CHECKBOXES ////////// */}
            <div className='form-group checkboxes'>
                <h4>Gluten Free</h4>

                <label>Gluten Free
                        <input
                        name='glutenFree'
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.glutenFree}
                    />
                </label>
            </div>


            <div className='form-group submit'>

                <button to='/confirmation' renderas={Link} disabled={disabled}>submit</button>

            </div>
            <div>
                {order.map(data => {
                    return (
                        <ThisOrder key={data.id} details={data} />
                    )
                })}
            </div>
        </form >

    )
}
