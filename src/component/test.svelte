<!-- src/components/TestimonySection.svelte -->
<script>
	import weldone from '$lib/images/black2.jpg';
	import jame from '$lib/images/black7.webp';
	import adams from '$lib/images/black5.jpg';
	// Import any necessary modules

	const testimonies = [
		// Add your testimony objects here
		{
			id: 1,
			imageUrl: adams,
			name: 'Adams williams',
			quote:
				'” Our home is now a reflection of our dreams. The interior design work done here is simply magical. Thank you for creating such a beautiful and functional space. “'
		},
		{
			id: 1,
			imageUrl: weldone,
			name: 'Miss audu',
			quote:
				'” "I\'m in awe of the transformation. Every corner of our house feels like a page from a design magazine. The attention to detail is remarkable. “'
		},
		{
			id: 1,
			imageUrl: jame,
			name: 'Mrs james',
			quote:
				'” "Absolutely thrilled with the outcome. Our designer\'s ability to blend elegance with functionality is commendable. The result is a space we truly adore. “'
		}
	];
</script>

<section class="bg-gray-100 py-24">
	<div class="max-w-7xl mx-auto px-4 text-center">
		<h2 class="text-3xl font-semibold mb-4 my-4">Testimonies</h2>
		<p class="text-gray-600 leading-relaxed px-6 max-w-4xl mx-auto my-10">
			Testimonials play a vital role in building trust and credibility for businesses and
			individuals. These brief statements or reviews are shared by satisfied customers, clients, or
			users, and they serve as authentic endorsements of a product, service, or experience.
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
