import { Card } from "./Card";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Jumbotron } from "./Jumbotron";

//create your first component
export default function Home() {

	return (

		<>
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		</>

	)
};
