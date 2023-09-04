<script>
	import weldone from '$lib/images/shoe1.jpg';
	import sand from '$lib/images/bet.jpg';
	import chair from '$lib/images/gucci.jpg';
	import fork from '$lib/images/red.jpg';
	import bed from '$lib/images/bag.jpg';
	import belt from '$lib/images/belt.jpg';

	let activeTab = 'special';

	// data for special div

	let products = [
		{
			image: weldone,
			name: 'Product 1',
			rating: 4.5,
			price: '$39.99'
		},
		{
			image: sand,
			name: 'Product 2',
			rating: 3.8,
			price: '$49.99'
		},
		{
			image: chair,
			name: 'Product 3',
			rating: 4.2,
			price: '$29.99'
		},
		{
			image: fork,
			name: 'Product 4',
			rating: 4.7,
			price: '$59.99'
		}
	];

	///secnd aspect of images
	let products1 = [
		{
			image: chair,
			name: 'Product 1',
			rating: 4.5,
			price: '$39.99'
		},
		{
			image: fork,
			name: 'Product 2',
			rating: 3.8,
			price: '$49.99'
		},
		{
			image: '/images/product3.jpg',
			name: 'Product 3',
			rating: 4.2,
			price: '$29.99'
		},
		{
			image: '/images/product4.jpg',
			name: 'Product 4',
			rating: 4.7,
			price: '$59.99'
		}
	];
	// third aspect of it

	let products2 = [
		{
			image: chair,
			name: 'Product 1',
			rating: 4.5,
			price: '$39.99'
		},
		{
			image: fork,
			name: 'Product 2',
			rating: 3.8,
			price: '$49.99'
		},
		{
			image: bed,
			name: 'Product 3',
			rating: 4.2,
			price: '$29.99'
		},
		{
			image: belt,
			name: 'Product 4',
			rating: 4.7,
			price: '$59.99'
		}
	];

	function setActiveTab(tab) {
		activeTab = tab;
	}
</script>

<!-- Other content -->

<section class="container mx-auto">
	<div class="flex space-x-4 mt-8 px-4">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="tab"
			class:active={activeTab === 'special'}
			on:click={() => setActiveTab('special')}
		>
			Special Product
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="tab" class:active={activeTab === 'best'} on:click={() => setActiveTab('best')}>
			Best Product
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="tab" class:active={activeTab === 'new'} on:click={() => setActiveTab('new')}>
			New Product
		</div>
	</div>

	<div class="mt-8">
		{#if activeTab === 'special'}
			<div class="grid">
				{#each products as product}
					<div class="card">
						<img src={product.image} alt={product.name} />
						<div class="info">
							<h3>{product.name}</h3>
							<p>Rating: {product.rating} stars</p>
							<p>Price: {product.price}</p>
						</div>
					</div>
				{/each}
			</div>
		{/if}
		{#if activeTab === 'best'}
			<div class="grid">
				{#each products2 as product}
					<div class="card">
						<img src={product.image} alt={product.name} />
						<div class="info">
							<h3>{product.name}</h3>
							<p>Rating: {product.rating} stars</p>
							<p>Price: {product.price}</p>
						</div>
					</div>
				{/each}
			</div>
		{/if}
		{#if activeTab === 'new'}
			<div class="grid">
				{#each products1 as product}
					<div class="card">
						<img src={product.image} alt={product.name} />
						<div class="info">
							<h3>{product.name}</h3>
							<p>Rating: {product.rating} stars</p>
							<p>Price: {product.price}</p>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style>
	/* Your existing styles */

	.tab {
		cursor: pointer;
		padding: 0.5rem 1rem;
		border: 2px solid transparent;
		border-bottom-width: 0;
		transition: border-color 0.2s, background-color 0.2s;
		background-color: #f0f0f0;
		border-radius: 0.25rem 0.25rem 0 0;
	}

	.tab.active {
		border-color: #3490dc;
		border-bottom-width: 2px;
		background-color: white;
		border-radius: 0.25rem 0.25rem 0 0;
	}

	.tab:hover {
		background-color: #e5e5e5;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
		padding: 1rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: white;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		padding: 1rem;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
	}

	.card img {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
		aspect-ratio: 2/1;
		object-fit: cover;
	}

	.info {
		margin-top: 1rem;
	}
</style>
