<script>
	import sand from '$lib/images/shoe3.jpg';
	import logo from '$lib/images/shoe4.jpg';
</script>

<section class="grid-section" id="bags">
	<div class="grid-item">
		<div class="item-heading">Leather Men Shoes</div>
		<p>Explore our collection of high-quality leather shoes for men.</p>
		<div class="shop-now-link">
			<button href="#">Shop Now</button>
		</div>
	</div>
	<div class="grid-item">
		<div class="item-heading">Featured Collection</div>
		<p>Discover our handpicked selection of premium leather goods.</p>
		<div class="shop-now-link">
			<button href="#">Shop Now</button>
		</div>
	</div>
	<div class="image-wrapper">
		<img src={sand} alt="Leather Men Shoes" class="item-image" />
	</div>
	<div class="image-wrapper">
		<img src={logo} alt="Featured Collection" class="item-image" />
	</div>
</section>

<style>
	/* Your existing styles */

	.grid-section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
		padding: 2rem;
	}

	.grid-item {
		background-color: #f0f0f0;
		padding: 1rem;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.item-heading {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	.shop-now-link {
		text-align: left;
		margin-top: auto;
	}

	.shop-now-link button {
		color: #3490dc;
		text-decoration: none;
	}

	.image-wrapper {
		text-align: right;
	}

	.item-image {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
	}
	img {
		aspect-ratio: 2/1;
		object-fit: cover;
	}
</style>
