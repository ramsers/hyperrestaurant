import { h, app } from 'hyperapp';

export default function TopImg({ state, actions }) {
	return (
		<section id="TopImg">
			<div class="container">
				<div class="title">
					<h5>Welcome to</h5>
					<h1>{state.companyInfo.title}</h1>
				</div>
				<div class="contact-info">
					<div class="container">
						<div class="booking">Book Tables Directly</div>
						<h2>(718)-219-8652</h2>
						<div>
							Opening Hours <strong> Mon - Fri </strong> 9am - 9pm
							<strong> Weekend </strong> 9am - 11pm
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
