import { h, app } from 'hyperapp';

export default function OurStory({ state, actions }) {
	return (
		<section id="OurStory">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<h5 class="comp-title">Our Story</h5>
						<h2>Cooking is the Art of Adjustment</h2>
						<p>
							Bacon ipsum dolor amet jerky alcatra burgdoggen tri-tip andouille
							porchetta ham landjaeger shankle pig bacon beef ribs tongue. Ball
							tip leberkas brisket andouille capicola frankfurter kevin boudin
							flank pastrami. Pork chop short loin pig tail brisket, biltong
							tri-tip swine. Meatloaf biltong kevin, cupim t-bone tri-tip
							buffalo jowl prosciutto swine landjaeger shoulder beef ribs spare
							ribs.
						</p>
						<div class="quote">
							"The best steak in the city of Toronto" -{' '}
							<strong>Thomas Eggsy</strong>{' '}
						</div>
						<a href="#" class="res-btn">
							Reserve
						</a>
					</div>
					<div class="col-md-6">
						<div class="video-img"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
