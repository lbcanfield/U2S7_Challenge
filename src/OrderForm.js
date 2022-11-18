import React, { useState } from 'react';







export default function OrderForm(props) {
    const { values, change, submit, errors } = props;

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse);
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <div className='order-form-container'>
            <div className='order-form'>
                <h3>Build Your Own Pizza</h3>
                <div className='errors'>
                    <div>{errors.nameinput}</div>
                    <div>{errors.emailinput}</div>
                </div>
                <form
                    id='pizza-form'
                    onSubmit={onSubmit} >

                    {/* /////////////////////////////////  Personal Information Text  ///////////////////////////////// */}
                    <div className='form-header'>
                        <h4>Personal Information</h4>
                    </div>
                    <div className='form-input personal-text-group'>
                        <div className='text-group'>
                            <label > Enter Name </label>
                            <input
                                id='name-input'
                                type='text'
                                name='nameinput'
                                placeholder='Enter Name'
                                value={values.nameinput}
                                onChange={onChange}
                            />
                        </div>
                        <div className='text-group'>
                            <label> Enter Email</label>
                            <input
                                id='user-email'
                                type='email'
                                name='emailinput'
                                placeholder='Enter Email Address'
                                value={values.email}
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    {/* /////////////////////////////////  Crust Size Dropdown  ///////////////////////////////// */}
                    <div className='form-header'>
                        <h4>Choice of Size</h4>
                    </div>

                    <div className='form-input crust-dropdown-group'>
                        <div className='dropdown-group'>
                            <label> Select Size</label>
                            <select
                                id='size-dropdown'
                                name='crustsize'
                                onChange={onChange}
                            >
                                <option value=''>--- Select ---</option>
                                <option value='extralarge'>Extra Large</option>
                                <option value='large'>Large</option>
                                <option value='medium'>Medium</option>
                                <option value='small'>Small</option>
                                <option value='personal'>Personal</option>
                            </select>
                        </div>
                    </div>

                    {/* /////////////////////////////////  Sauce Radio Group  ///////////////////////////////// */}
                    <div className='form-header'>
                        <h4>Choice of Sauce</h4>
                    </div>
                    <div className='form-input sauce-radio-group'>
                        <div className='radio-group'>
                            <label>Original Red</label>
                            <input
                                type='radio'
                                name='sauce'
                                value='originalred'
                                onChange={onChange}
                                checked={values.sauce === 'originalred'}
                            />
                        </div>
                        <div className='radio-group'>
                            <label>Garlic Ranch</label>
                            <input
                                type='radio'
                                name='sauce'
                                value='garlicranch'
                                onChange={onChange}
                                checked={values.sauce === 'garlicranch'}
                            />
                        </div>
                        <div className='radio-group'>
                            <label>BBQ Sauce</label>
                            <input
                                type='radio'
                                name='sauce'
                                value='bbqsauce'
                                onChange={onChange}
                                checked={values.sauce === 'bbqsauce'}
                            />
                        </div>
                        <div className='radio-group'>
                            <label>Spinach Alfredo</label>
                            <input
                                type='radio'
                                name='sauce'
                                value='spinachalfredo'
                                onChange={onChange}
                                checked={values.sauce === 'spinachalfredo'}
                            />
                        </div>
                    </div>


                    {/* /////////////////////////////////  Toppings Checkbox Group  ///////////////////////////////// */}
                    <div className='form-header'>
                        <h4>Add Toppings</h4>
                    </div>
                    <div className='form-input toppings-checkbox-group' >
                        <div className='checkbox-group'>
                            <label>Pepperoni</label>
                            <input
                                type='checkbox'
                                name='pepperoni'
                                checked={values.pepperoni}
                                onChange={onChange}
                            />
                        </div>
                        <div className='checkbox-group'>
                            <label>Sausage</label>
                            <input
                                type='checkbox'
                                name='sausage'
                                checked={values.sausage}
                                onChange={onChange}
                            />
                        </div>
                        <div className='checkbox-group'>
                            <label>Canadian Bacon</label>
                            <input
                                type='checkbox'
                                name='canadianbacon'
                                checked={values.canadianbacon}
                                onChange={onChange}
                            /></div>
                        <div className='checkbox-group'>
                            <label>Spicy Italian Sausage</label>
                            <input
                                type='checkbox'
                                name='spicyitaliansausage'
                                checked={values.spicyitaliansausage}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className='form-header'>
                        <h4>Special Instructions</h4>
                    </div>
                    <div className='form-input'>
                        <textarea
                            id='special-text'
                            placeholder='add any special instructions you want'
                        />
                    </div>
                    <div className='form-input'>
                        <input
                            type='text'
                            name='quantity'
                        />
                        <input
                            id='order-button'
                            type='submit'
                            value='Create an Order'
                        />
                    </div>
                </form>
            </div>
        </div>

    )
}
