import { Categories } from "./components/Categories/Categories";
import { Hero } from "./components/Hero/Hero";
import "./Home.css";

const Home = () => {
	return (
		<>
			<Hero />
			<Categories />
		</>
	);
};

export { Home };
