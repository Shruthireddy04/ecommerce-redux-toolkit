import React from 'react';

import './App.css';
import Main from './Components/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilteredProducts from './Components/FilteredProducts/FilteredProducts';
import Navbar from './Components/Navbar/Navbar';
import SingleProduct from './Components/FilteredProducts/SingleProduct';
import { useSelector } from 'react-redux';
import Login from './Components/Login/Login';

function App() {
	const cart = useSelector((state) => state.cart.totalAmount);
	const user = useSelector((state) => state.user.user);
	const { authUser } = user;
	console.log(user);

	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" Component={!authUser ? Login : Main} />
					<Route
						path="/products/:type"
						Component={!authUser ? Login : FilteredProducts}
					/>
					<Route
						path="/products/:type/:id"
						Component={!authUser ? Login : SingleProduct}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
