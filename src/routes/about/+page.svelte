<!-- src/routes/About.svelte -->
<script>
	// Import your image and define your skills here
	import sand from '$lib/images/segun5.jpg';

	let skills = [
		{
			name: 'Shoe Making',
			description:
				'Shoe making is a creative and intricate craft that involves designing, crafting, and assembling footwear. It encompasses various stages, including pattern-making, cutting, stitching, and finishing. A skilled shoe maker can create unique and custom footwear, ranging from casual shoes to high-end leather boots.'
		},
		{
			name: 'Singing',
			description:
				'Singing is the art of producing musical sounds with the voice. It is a form of self-expression and communication through music. Singers use their vocal abilities to convey emotions, tell stories, and entertain audiences. Singing can take many forms, from solo performances to ensemble singing in choirs or bands.'
		},
		{
			name: 'Interior Design',
			description:
				'Interior design is the art and science of enhancing the interior spaces of homes, offices, or commercial establishments to create functional, aesthetically pleasing, and comfortable environments. Interior designers work with color palettes, furniture, decor, lighting, and spatial arrangements to transform spaces. They consider the needs and preferences of clients while adhering to design principles to create visually appealing and functional interiors.'
		}
	];
</script>

<section class="bg-gray-100 py-12">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="bg-white shadow-lg rounded-lg overflow-hidden">
			<div class="sm:flex sm:items-center px-6 py-4">
				<div class="sm:flex-shrink-0">
					<img src={sand} alt="Segun Odumosu" class="w-40 h-40 rounded-full mx-auto" />
				</div>
				<div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
					<h2 class="text-3xl font-semibold text-gray-800 mb-2">About Segun Odumosu</h2>
					<p class="text-gray-600 mb-4">
						Hi there! I'm Segun Odumosu, and I'm passionate about various creative pursuits. I have
						a deep love for crafting beautiful shoes, expressing my soul through singing, and
						enhancing spaces with my interior design skills.
					</p>
					{#each skills as skill}
						<div class="mb-6">
							<h3 class="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h3>
							<p class="text-gray-600">{skill.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
