<!-- src/components/BrandSection.svelte -->
<script>
	import lag from '$lib/images/band1.avif';

	const brandText = 'About Our Brand';
	const brandDescription =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula quis sapien cursus cursus nec a leo. Nullam et dui eu lorem fermentum faucibus.';
	const brandImage = lag; // Update with the actual image path
</script>

<section class="bg-gray-100 p-8">
	<div class="max-w-5xl mx-auto">
		<div class="grid md:grid-cols-2 gap-8 items-center">
			<div class="md:order-2">
				<img src={brandImage} alt="Brand Image" class="rounded-lg shadow-md" />
			</div>
			<div class="md:order-1">
				<h2 class="text-3xl font-semibold mb-4">{brandText}</h2>
				<p class="text-lg text-gray-700">{brandDescription}</p>
			</div>
		</div>
	</div>
</section>

<style>
	/* Additional styling or overrides */
</style>
