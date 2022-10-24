import { Button, Row, Col } from "react-bootstrap";

export default function Banner() {
	return (
		<Row>
			<Col className="p-5">
				<h1>Express Arms Dealer</h1>
				<p>Cheapest Weapons for Your Protection! </p>
				<Button variant="dark">Shop Now!</Button>
			</Col>
		</Row>
	)
}