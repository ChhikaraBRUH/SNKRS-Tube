import "./common.css";
import { Navbar } from "./components/Navbar/Navbar";
import { NavRoutes } from "./routes/NavRoutes";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<NavRoutes />
		</div>
	);
}

export default App;
