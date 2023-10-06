import './App.css';

import { Routes, Route } from "react-router-dom";

import Navbar from './components/navbar';
import SearchBox from './components/searchBox';
import Home from './pages/home';
import MealDetail from './pages/mealdetail';
import { useState } from 'react';

function App() {

	const [inputMeal, setInputMeal] = useState('');	

	function handleInputMeal(input){
		setInputMeal(input);
	};

	return (
		<div className='App'>
			<Navbar>
				<SearchBox onInputMeal={handleInputMeal} />
			</Navbar>
      <Routes>
        <Route path='/' element={<Home input={inputMeal} />} />
        <Route exact path='/meals/:id' element={<MealDetail />} />
      </Routes>

		</div>
	);
}

export default App;
