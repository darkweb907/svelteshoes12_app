<!-- src/components/TestimonySection.svelte -->
<script>
	import weldone from '$lib/images/sax.avif';
	// Import any necessary modules

	const testimonies = [
		// Add your testimony objects here
		{
			id: 1,
			imageUrl: weldone,
			name: 'John Doe',
			position: 'CEO, Company A',
			quote:
				'” Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt. “'
		},
		{
			id: 1,
			imageUrl: weldone,
			name: 'John Doe',
			position: 'CEO, Company A',
			quote:
				'” Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt. “'
		},
		{
			id: 1,
			imageUrl: weldone,
			name: 'John Doe',
			position: 'CEO, Company A',
			quote:
				'” Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt. “'
		}
	];
</script>

<section class="bg-gray-100 py-24">
	<div class="max-w-7xl mx-auto px-4 text-center">
		<h2 class="text-3xl font-semibold mb-4 my-4">testimonies</h2>
		<p class="text-gray-600 leading-relaxed px-6 max-w-4xl mx-auto my-10">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit,
			necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.
		</p>
		<!-- Display the current 3 testimonies -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
			{#each testimonies as testimony}
				<div class="bg-white p-4 rounded-lg shadow-md">
					<!-- ... content ... -->
					<div class="flex items-center">
						<img
							src={testimony.imageUrl}
							alt={testimony.name}
							class="w-10 h-10 rounded-full mr-3"
						/>
						<div>
							<p class="text-gray-800 font-semibold">{testimony.name}</p>
							<p class="text-gray-600">{testimony.position}</p>
						</div>
					</div>
					<p class="mt-4 text-gray-600">{testimony.quote}</p>
				</div>
			{/each}
		</div>
		<!-- Navigation buttons -->
	</div>
</section>

<style>
	/* Apply styles using Tailwind CSS classes */
</style>
