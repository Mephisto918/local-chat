import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom' 
import HomePage from "../views/HomePage";
import AboutPage from "../views/About";
import AboutAbout from "../views/AboutAbouPage";
const CustomRouter = () => createRoutesFromElements(
	<>
		<Route path="/" element={<HomePage/>}></Route>
		<Route path="/about" element={<AboutPage/>}>
			<Route path="aboutAbout" element={<AboutAbout/>}></Route>
		</Route>
	</>
)

export default CustomRouter; 