<!-- src/components/BrandSection.svelte -->
<script>
	import lag from '$lib/images/flute1.jpg';

	const brandText = 'About Our Brand';
	const brandDescription =
		'Segun Odumosu is a highly talented musician and enterprising entrepreneur. With a passion for music and an innate ability to create catchy tunes, Segun has made significant strides in the music industry.Starting his musical journey at a young age, Segun quickly realized his love for music and dedicated himself to honing his skills.';
	const brandImage = lag; // Update with the actual image path
</script>

<section class="bg-gray-100 p-8" id="brand">
	<div class="max-w-5xl mx-auto">
		<div class="grid md:grid-cols-2 gap-8 items-center">
			<div class="md:order-2">
				<img src={brandImage} alt="Brand Image" class="rounded-lg shadow-md sm:w-9/12" />
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
