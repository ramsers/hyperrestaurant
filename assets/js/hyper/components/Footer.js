import { h, app } from 'hyperapp';

export default function Footer({ state, actions }) {
	return (
		<footer id="Footer">
			<div class="container">
				<h2>Logo</h2>
				<nav class="menu">
					<a href="#">Our Story</a>
					<a href="#">Reviews</a>
					<a href="#">Special Menu</a>
					<a href="#">Reservations</a>
					<a href="#">Contact Us</a>
				</nav>

				<ul class="social-media">
					<li>
						<a href="http://www.facebook.com">
							<i class="fab fa-facebook"></i>
						</a>
					</li>
					<li>
						<a href="http://www.instagram.com">
							<i class="fab fa-instagram"></i>
						</a>
					</li>
					<li>
						<a href="http://www.twitter.com">
							<i class="fab fa-twitter-square"></i>
						</a>
					</li>
					<li>
						<a href="http://www.gooogle.com">
							<i class="fab fa-google-plus-square"></i>
						</a>
					</li>
				</ul>
				<div class="copyright">© 2019 Copyright</div>
			</div>
		</footer>
	);
}
