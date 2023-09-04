<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	// import Welcome from '$lib/images/s.png';
	import welcome from '$lib/images/flute.jpg';
	import sand from '$lib/images/flute1.jpg';
	import logo from '$lib/images/flute2.jpg';

	let images = [
		welcome,
		sand,
		logo
		// Add more image URLs as needed
	];

	// text animation

	let isTextVisible = false;
	let typewriterHeading = '';

	function showText() {
		isTextVisible = true;
	}

	function typewriterAnimation() {
		let characters = "Segun Odumosu And The Afrocano's Band";
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

		tl.to('.carousel-team', { duration: 2, autoAlpha: 1, onComplete: showText });
		typewriterAnimation();

		function updateImage() {
			currentIndex = (currentIndex + 1) % images.length;
			gsap.to('.carousel-team', { duration: 2, autoAlpha: 0, onComplete: fadeInImage });
		}

		function fadeInImage() {
			gsap.set('.carousel-team', {
				backgroundImage: () => `url('${images[currentIndex]}')`
			});
			gsap.to('.carousel-team', { duration: 2, autoAlpha: 1, onComplete: updateImage, delay: 2 });
		}

		gsap.set('.carousel-team', {
			backgroundImage: () => `url('${images[currentIndex]}')`
		});

		gsap.to('.carousel-team', { duration: 2, autoAlpha: 1, onComplete: updateImage, delay: 2 });
	});
</script>

<div
	class="carousel-team bg-center flex flex-col items-center justify-center text-white px-5 md:h-4/6"
>
	<h1 class="md:text-4xl text-lg text-center font-semibold mb-4 {isTextVisible ? 'fade-in' : ''}">
		{#if isTextVisible}
			{#each Array.from(typewriterHeading) as char, i}
				<span class="opacity-0 animate-typewriter" style="animation-delay: {i * 0.1}s;">{char}</span
				>
			{/each}
		{/if}
	</h1>
	<p class="md:text-lg mb-8 {isTextVisible ? 'fade-in' : ''} text-base text-center">
		Experience the soulful rhythm and energy of our music.
	</p>
</div>
<div class="flex flex-col md:flex-row gap-3 sep">
	<a
		href="#brand"
		class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded cursor-pointer whitespace-nowrap"
		>Learn More about us</a
	>
	<a href="/playlist" class="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded"
		>Listen to my Music</a
	>
</div>

<style>
	.sep {
		position: absolute;
		bottom: 19%;
		left: 50%;
		transform: translate(-50%, 0);
	}
	.carousel-team {
		position: relative;
		top: -6px;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		z-index: -1;
		/* Add an overlay to the background image */
	}
	.carousel-team::before {
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
		.sep {
			bottom: 22%;
		}
		.carousel-team {
			height: 80vh;
		}
	}
</style>
