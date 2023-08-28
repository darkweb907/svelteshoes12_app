<script>
	// You can customize the content of each grid item
	import welcome from '$lib/images/shoe3.jpg';
	import sand from '$lib/images/belt.jpg';
	import logo from '$lib/images/bag2.jpg';
	import lag from '$lib/images/bag.jpg';

	const gridItems = [
		{
			title: 'SHOES',
			content: 'Content for Item 1',
			imageUrl: welcome
		},
		{
			title: 'BELT',
			content: 'Content for Item 2',
			imageUrl: sand
		},
		{
			title: 'WALLET',
			content: 'Content for Item 3',
			imageUrl: logo
		},
		{
			title: 'BAGS',
			content: 'Content for Item 4',
			imageUrl: lag
		}
	];
</script>

<section
	id="shoes"
	class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto my-10 container md:px-6 px-4"
>
	{#each gridItems as item (item.title)}
		<div class="grid-item max-w-md mx-auto">
			<h3 class="font-medium leading-relaxed text-xl pl-3">{item.title}</h3>
			<p class="my-2 leading-relaxed text-xl font-light pl-3">{item.content}</p>
			<img src={item.imageUrl} alt={item.title} />

			<div class="overlay">
				<button>Shop Now</button>
			</div>
		</div>
	{/each}
</section>

<style>
	.grid-item {
		position: relative;
		overflow: hidden;
		background-color: #f0f0f0;

		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s;
	}

	.grid-item:hover {
		transform: scale(1.05);
	}

	.overlay {
		width: 100%;
		position: absolute;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity 0.3s;
		height: 49px;
		bottom: 0;
	}

	.grid-item:hover .overlay {
		opacity: 1;
	}

	.overlay h3 {
		font-size: 1.25rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
		text-decoration: underline;
		color: white;
	}

	.overlay p {
		margin-bottom: 1rem;
		color: white;
	}

	.overlay button {
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 9999px;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	.overlay button:hover {
		background-color: #2779bd;
	}
	img {
		aspect-ratio: 1/1;
		object-fit: cover;
	}
</style>
