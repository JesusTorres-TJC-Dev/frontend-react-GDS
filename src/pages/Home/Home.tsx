import React from 'react';
import { Courses } from './components/Courses';
import { Hero } from './components/Hero';
export interface HomeInterface {}

const Home : React.FC<HomeInterface> = () => {
	return (
		<>
			<Hero/>
			<Courses/>
		</>
	);
};

export default Home;
