import { h, app } from 'hyperapp';

export default function RandomQuote({ state, actions }) {
	return (
		<section
			id="RandomQuote"
			style={{
				backgroundimage:
					"linear-gradient(135deg,rgba(0, 0, 0, 0.1)0, #000 100%),  url('https://images.unsplash.com/photo-1565299715199-866c917206bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80')"
			}}
		>
			<div class="container">
				<h1>"Cooking and baking is both physical and mental therapy."</h1>{' '}
				<span class="author"> -Mary Berry</span>
			</div>
		</section>
	);
}
