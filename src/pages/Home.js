import Banner from '../components/Banner';
import Highlights from '../components/Highlights';


export default function Home() {
	return (
		<div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
			<Banner />
			<Highlights />
		</div>
	)
}