<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	// import Welcome from '$lib/images/s.png';
	import weldone from '$lib/images/pop1.jpg';
	import sand from '$lib/images/furniture1.jpg';
	import chair from '$lib/images/chair.jpg';
	import fork from '$lib/images/furniture.jpg';
	import pop from '$lib/images/pop.jpg';
	import paint from '$lib/images/paint.jpg';
	import draw from '$lib/images/draw.jpg';
	import bed from '$lib/images/bed.jpg';
	import Test from './test.svelte';
	import Footer from './footer.svelte';

	let images = [
		bed,
		sand,
		pop
		// Add more image URLs as needed
	];

	// text animation

	let isTextVisible = false;
	let typewriterHeading = '';

	function showText() {
		isTextVisible = true;
	}

	function typewriterAnimation() {
		let characters = 'Immerse yourself in the rich tapestry of interior design';
		let index = 0;

		function type() {
			if (index < characters.length) {
				typewriterHeading += characters[index];
				index++;
				setTimeout(type, 100); // Adjust the delay between characters
			}
		}

		type();
	}

	// swiper begins here
	let currentIndex = 0;

	onMount(() => {
		const tl = gsap.timeline({ repeat: -1 });

		tl.to('.carousel-s', { duration: 2, autoAlpha: 1, onComplete: showText });
		typewriterAnimation();

		function updateImage() {
			currentIndex = (currentIndex + 1) % images.length;
			gsap.to('.carousel-s', { duration: 2, autoAlpha: 0, onComplete: fadeInImage });
		}

		// function fadeInImage() {
		// 	gsap.set('.carousel-s', {
		// 		backgroundImage: () => `url('${images[currentIndex]}')`
		// 	});
		// 	gsap.to('.carousel-s', { duration: 1, autoAlpha: 1, onComplete: updateImage, delay: 1 });
		// }

		gsap.set('.carousel-s', {
			backgroundImage: () => `url('${images[currentIndex]}')`
		});

		gsap.to('.carousel-s', { duration: 2, autoAlpha: 1, onComplete: updateImage, delay: 2 });
	});
</script>

<div class="carousel-s bg-center flex flex-col items-center bac justify-center text-white px-5">
	<h1
		class="md:text-4xl text-sm text-center font-semibold mb-4 {isTextVisible
			? 'fade-in'
			: ''} font-[montserrat]"
	>
		{#if isTextVisible}
			{#each Array.from(typewriterHeading) as char, i}
				<span class="opacity-0 animate-typewriter" style="animation-delay: {i * 0.1}s;">{char}</span
				>
			{/each}
		{/if}
	</h1>
	<p
		class="md:text-lg mb-8 {isTextVisible ? 'fade-in' : ''} text-base text-center font-[montserrat]"
	>
		Where creativity meets functionality, and spaces come to life
	</p>
</div>

<section class="container mx-auto text-center px-5">
	<div
		class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4 md:space-y-0"
	>
		<!-- First div -->
		<div class="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
			<i class="fas fa-camera text-2xl mb-2" />
			<h3 class="text-lg font-semibold mb-1">Photography</h3>
			<p class="text-gray-600">Capture beautiful moments with our interior photography services.</p>
		</div>

		<!-- Second div -->
		<div class="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
			<i class="fas fa-heart text-2xl mb-2" />
			<h3 class="text-lg font-semibold mb-1">Decorat</h3>
			<p class="text-gray-600">Discover exquisite decor pieces that transform your space.</p>
		</div>

		<!-- Third div -->
		<div class="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
			<i class="fas fa-star text-2xl mb-2" />
			<h3 class="text-lg font-semibold mb-1">Design</h3>
			<p class="text-gray-600">Elevate your interiors with our innovative design solutions.</p>
		</div>
	</div>

	<!-- Interior design description -->
</section>

<!-- End new section-->

<section class="mt-7 py-16" id="flush">
	<div class="max-w-7xl mx-auto px-4">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
			<!-- Left column: heading and text -->
			<div>
				<h2 class="text-4xl text-center md:text-left font-bold mb-4">About Us</h2>
				<p class="text-gray-600 text-xl text-justify w-auto md:w-4/5">
					jazzon Interior Services is a registered interior design company based in Nigeria. With a
					reputation for excellence and a commitment to providing exceptional interior design
					solutions, Jazzon Interior Services serves clients across the country.
				</p>
				<p class="text-gray-600 text-xl text-justify w-auto md:w-4/5">
					Led by a team of skilled and experienced professionals, Jazzon Interior Services offers a
					wide range of services to cater to various design needs. Whether it's residential,
					commercial, or hospitality spaces, the company specializes in creating functional and
					aesthetic interior designs that align with clients' preferences and requirements.
				</p>
			</div>

			<!-- Right column: image -->
			<div class="md:order-last">
				<img alt="design" src={sand} class="w-full shadow-md" />
			</div>
		</div>
	</div>
</section>

<section class="mt-7 py-16 bg-slate-50" id="paint">
	<div class="max-w-7xl mx-auto px-4">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
			<!-- Left column: heading and text -->
			<div>
				<h2 class="text-3xl text-center md:text-left font-semibold mb-4">Our Services</h2>
				<p class="text-gray-600 text-xl text-center md:text-left">
					Painting,draughtsmanship,3D Epoxy wall/ceiling/floor,POP wall/ceiling
					,Furniture/Cabinetmakng,Flush door and general merchandize
				</p>
			</div>

			<!-- Right column: image -->
			<div class="md:order-first">
				<img src={weldone} alt="Interior Design" class="w-full shadow-md" />
			</div>
		</div>
	</div>
</section>

<!-- project -->

<section class="py-16" id="draught">
	<div class="max-w-4xl mx-auto px-4 container">
		<div class="text-center">
			<h2 class="text-3xl font-semibold mb-4">Our Projects</h2>
			<p class="text-gray-600 leading-relaxed">
				Our Project are carried out by groups of competent artisans to give our clients the
				best they desire
			</p>
		</div>

		<!-- grid with image -->

		<div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
			<!-- Repeat for each image -->
			<div
				class="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
			>
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img src={pop} alt="Image 8" class="w-full h-full object-cover" />
				<div
					class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity"
				/>
				<div
					class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
				>
					<p class="text-white text-center font-semibold">POP</p>
				</div>
			</div>
			<!-- Repeat for each image -->
			<div
				class="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
			>
				<img src={chair} alt="Image 1" class="w-full h-full object-cover" />
				<div
					class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity"
				/>
				<div
					class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
				>
					<p class="text-white text-center font-semibold">Chair</p>
				</div>
			</div>
			<!-- Repeat for each image -->
			<div
				class="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
			>
				<img src={fork} alt="Image 1" class="w-full h-full object-cover" />
				<div
					class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity"
				/>
				<div
					class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
				>
					<p class="text-white text-center font-semibold">Furniture</p>
				</div>
			</div>
			<!-- Repeat for each image -->
			<div
				class="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
			>
				<img src={draw} alt="Image 1" class="w-full h-full object-cover" />
				<div
					class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity"
				/>
				<div
					class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
				>
					<p class="text-white text-center font-semibold">DRAW</p>
				</div>
			</div>
			<!-- Repeat for each image -->
			<div
				class="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
			>
				<img src={paint} alt="Image 1" class="w-full h-full object-cover" />
				<div
					class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity"
				/>
				<div
					class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
				>
					<p class="text-white text-center font-semibold">PAINT</p>
				</div>
			</div>
			<!-- Repeat for each image -->
			<div
				class="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
			>
				<img src={bed} alt="Image 1" class="w-full h-full object-cover" />
				<div
					class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity"
				/>
				<div
					class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
				>
					<p class="text-white text-center font-semibold">BED</p>
				</div>
			</div>
			<!-- Repeat for other images -->
		</div>
	</div>
</section>

<section>
	<Test />
</section>

<footer>
	<Footer />
</footer>

<style>
	.both {
		position: absolute;
		bottom: 36%;
		left: 50%;
		transform: translate(-50%, 0);
	}
	p {
		font-size: 16px;
	}
	section {
		font-family: 'Open Sans', sans-serif;
	}

	.carousel-s {
		background-image: url($lib/images/interiors.jpg);
		position: relative;
		top: -92px;
		left: 0;
		width: 100%;
		height: 100vh;
		background-size: cover;
		background-position: center;
		z-index: -1;
		/* Add an overlay to the background image */
	}
	.carousel-s::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5); /* Adjust the color and opacity here */
		z-index: -1;
	}

	@keyframes typewriter {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-typewriter {
		animation: typewriter 0.3s ease forwards;
	}
	@media (max-width: 800px) {
		.carousel-s {
			height: 80vh;
		}
	}
</style>
