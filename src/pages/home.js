import React from 'react';
import MealPreviwGrid from '../components/mealPreviwGrid';

function Home(props) {
	return (
		<div className='page'>
			<MealPreviwGrid input={props.input} />
		</div>
	);
}

export default Home;
