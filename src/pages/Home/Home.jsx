import { Navbar } from "../../components/Navbar/Navbar";
import { Categories } from "./components/Categories/Categories";
import { Hero } from "./components/Hero/Hero";
import "./Home.css";

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Categories />
		</>
	);
};

export { Home };
