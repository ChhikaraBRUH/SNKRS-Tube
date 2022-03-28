import React from "react";
import { HERO_IMG } from "../../../../assets";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<>
			<section className='hero-section'>
				<div className='hero-text'>
					<h1>SNKRS TUBE</h1>
					<p>WATCH ANYTHING & EVERYTHING SNKRS</p>
					<Link to={"/"}>
						<button className='btn btn-primary'>WATCH NOW</button>
					</Link>
				</div>
				<div className='hero-img-div'>
					<img className='hero-img' src={HERO_IMG} alt='SNKRS Tube Hero Image' />
				</div>
			</section>
		</>
	);
};

export { Hero };
