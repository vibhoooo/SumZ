import React from 'react';
import { logo } from '../assets';

const Hero = () => {
	return (
		<div>
			<header className = "flex flex-col items-center justify-center w-full">
				<h1 className = "head_text">
					Summarize articles with
					<br />
					<span className = "orange_gradient">
						SumZ
					</span>
				</h1>
				<h2 className = "desc">
					Simplify your reading using SumZ!
				</h2>
			</header>
		</div>
	);
};

export default Hero;
