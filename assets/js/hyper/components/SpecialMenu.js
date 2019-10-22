import { h, app } from 'hyperapp';

export default function SpecialMenu({ state, actions }) {
	var loopMenu = function() {
		return state.specialMenuData.map(function(item) {
			console.log(item.title);
			return (
				<div class="col-md-4">
					<div class="box">
						<div class="box-img">
							<div class="price-circle">{item.price}</div>
						</div>
						<div class="copy-ctn">
							<span class="title">{item.title}</span>
							<p class="details">{item.description}</p>
						</div>
					</div>
				</div>
			);
		});
	};

	return (
		<section id="SpecialMenu" class="texture-bg">
			<div class="container">
				<h5 class="comp-title">Special Menu</h5>
				<h2>Delicious Flavors of Autumn</h2>
				<div class="row boxes"></div>
				<a href="#" class="link">
					View Full Menu
				</a>
				{loopMenu()}
			</div>
		</section>
	);
}
