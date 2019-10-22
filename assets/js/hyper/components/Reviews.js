import { h, app } from 'hyperapp';

export default function Reviews({ state, actions }) {
	var currentReview = function() {
		return (
			<div>
				<h5 class="comp-title">Reviews</h5>
				<h2>{state.reviewsData[state.reviewStatus.currentReview].company}</h2>
				<h4>{state.reviewsData[state.reviewStatus.currentReview].highlight}</h4>
				<p>{state.reviewsData[state.reviewStatus.currentReview].review}</p>
				<div class="author">
					<strong>
						{state.reviewsData[state.reviewStatus.currentReview].author}
					</strong>{' '}
					- {state.reviewsData[state.reviewStatus.currentReview].authorInfo}
				</div>
			</div>
		);
	};

	var leftClickBtn = function() {
		if (state.reviewStatus.currentReview == 0) {
			console.log('do nothing');
		} else {
			actions.reviewLeftClicked();
		}
	};

	var rightClickBtn = function() {
		if (state.reviewStatus.currentReview == state.reviewsData.length - 1) {
			console.log('do nothing');
		} else {
			actions.reviewRightClicked();
		}
	};

	return (
		<section id="Reviews">
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<div class="side-img">
							<img src="https://img.freepik.com/free-photo/professional-male-cook-chef-s-white-uniform-presenting-dish-white-background_23-2147863827.jpg?size=626&ext=jpg"></img>
						</div>
					</div>
					<div class="col-md-4">
						{currentReview()}
						<div class="arrows">
							<i
								onclick={leftClickBtn}
								class={`fas fa-arrow-left ${
									state.reviewStatus.currentReview > 0 ? 'ready' : ''
								}`}
							></i>
							,
							<i
								onclick={rightClickBtn}
								class={`fas fa-arrow-right ${
									state.reviewStatus.currentReview ==
									state.reviewsData.length - 1
										? ''
										: 'ready'
								}`}
							></i>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
