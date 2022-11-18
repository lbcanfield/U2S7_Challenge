import React from 'react';
import { Link, Route } from 'react-router-dom';
import OrderForm from './OrderForm';

export default function Home(props) {
    return (
        <div className='home-image'>
            <h2>Your favorite food, delivered while coding</h2>
            <button><Link to='/pizza'>Pizza?</Link></button>
            <Route path='/pizza'><OrderForm /></Route>
        </div>

    )
}