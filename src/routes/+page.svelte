<script>
	import Navbar from '../component/navbar.svelte';

	const navLinks = [
		{ text: 'Segun Odumosu Band', url: '/music' },
		{ text: 'Jazzon Interior', url: '/interior' },
		{ text: 'Leather Work', url: '/shoes' }
	];
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	// import Welcome from '$lib/images/s.png';
	import welcome from '$lib/images/segun1.jpg';
	import sand from '$lib/images/segun5.jpg';
	import logo from '$lib/images/song.jpg';

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

		tl.to('.carousel-y', { duration: 2, autoAlpha: 1, onComplete: showText });
		typewriterAnimation();

		function updateImage() {
			currentIndex = (currentIndex + 1) % images.length;
			gsap.to('.carousel-y', { duration: 1, autoAlpha: 0, delay: 4 });
		}

		// function fadeInImage() {
		// 	gsap.set('.carousel-y', {
		// 		backgroundImage: () => `url('${images[currentIndex]}')`
		// 	});
		// 	gsap.to('.carousel-y', { duration: 1, autoAlpha: 1, onComplete: updateImage, delay: 1 });
		// }

		gsap.set('.carousel-y', {
			backgroundImage: () => `url('${images[currentIndex]}')`
		});

		gsap.to('.carousel-y', { duration: 2, autoAlpha: 1, onComplete: updateImage, delay: 2 });
	});
</script>

<nav>
	<Navbar links={navLinks} />
</nav>
<div class="carousel-y bg-center flex flex-col items-center bac justify-center text-white px-5">
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
	<div class="  {isTextVisible ? 'fade-in' : ''} flex flex-col md:flex-row gap-3">
		<a href="/about" class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded"
			>Learn More about us</a
		>
		<a href="/music" class="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded"
			>Listen to my Music</a
		>
	</div>
</div>

<style>
	.carousel-y {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-size: cover;
		background-position-y: -130px;
		z-index: -1;
		/* Add an overlay to the background image */
	}
	.carousel-y::before {
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
		.carousel-y {
			background-position-y: center;
		}
	}
</style>
