import { h, app } from 'hyperapp';

export default function ContactUs({ state, actions }) {
	return (
		<section id="ContactUs" class="texture-bg">
			<div class="container">
				<h5 class="comp-title">Contact Us</h5>
				<h2></h2>

				<div class="box">
					<div class="row">
						<div class="col-md-6">
							<div class="title">{state.companyInfo.location}</div>
							<h6 class="address">
								435 Bay Street,
								<br /> Toronto, Ontario M5R 3E6
							</h6>
							<p class="email">
								<strong>email:</strong>{' '}
								<a href="mailtoinfo@primesteak.com">info@primesteak.com</a>
							</p>
						</div>
						<div class="col-md-6">
							<h6>Phone:</h6>
							<div class="title">{state.companyInfo.phone}</div>
							<h6>Lunch Service:</h6>
							<p>
								Friday, Saturday,& Sunday:
								<br />
								Bookings from 12pm - 10pm
							</p>

							<h6>Dinner Service:</h6>
							<p>
								Daily:
								<br />
								Bookings from 3pm - 9:30pm
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
