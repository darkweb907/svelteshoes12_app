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
	import seg from '$lib/images/seg-1.png';
	import Left from '../component/left.svelte';
	import Footer from '../component/footer.svelte';

	//modal
	//end here

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

<div class="carousel-y bg-center flex flex-col items-center bac justify-center text-white px-5">
	<nav>
		<Navbar links={navLinks} />
	</nav>
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
<main>
	<section class="first">
		<div
			class="detail max-sm:ml-0 ml-14 grid grid-cols-2 gap-10 max-sm:p-5 max-sm:grid-cols-1 items-center"
		>
			<div class="words max-sm:text-center max-md:mt-5">
				<h5 class="font-medium tracking-wide mb-1 text-xs uppercase">
					Music, the universal language that transcends boundaries
				</h5>
				<h2
					class="font-bold max-lg:text-lg text-5xl capitalize leading-[3.5rem] mb-4 tracking-wider text-[#1a1a1a]"
				>
					I'm Segun Odumosu, Artisan-Creator.
				</h2>
				<p class="text-sm leading-6 text-gray-400">
					Hi there! I'm Segun Odumosu, and I'm passionate about various creative pursuits. I have a
					deep love for crafting beautiful shoes, expressing my soul through singing, and enhancing
					spaces with my interior design skills.
				</p>
				<div class="button flex max-sm:justify-center mt-5">
					<a
						href="/contact"
						class="p-3 flex gap-3 items-center rounded-full bg-red-500 hover:bg-white hover:border-2 hover:border-red-500 transition-all"
						type="submit"><i class="fas fa-phone phone-icon" /> Contact Me!</a
					>
				</div>
			</div>
			<div class="img flex-1 flex justify-end">
				<img class="max-lg:aspect-[1/1] object-cover" src={seg} alt="" />
			</div>
		</div>
	</section>
	<section class="sec py-24 bg-slate-100">
		<div class="container mx-auto p-4">
			<h2 class="text-4xl text-center font-extrabold tracking-widest">Our Services</h2>
			<ul class="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-7 pr-6 mt-16">
				<li>
					<a
						href="/playlist"
						class="inline-block mb-6 text-3xl max-md:text-2xl my-3 tracking-widest font-semibold"
						>Music</a
					>
					<p class="text-sm leading-6 text-gray-400">
						Segun Odumosu is a highly talented musician and enterprising entrepreneur.
					</p>
				</li>
				<li>
					<a
						href="/interior"
						class="font-semibold inline-block mb-6 max-lg:text-2xl whitespace-nowrap ease-out text-3xl max-sm:text-3xl my-3 tracking-widest"
						>Interior Design</a
					>
					<p class="text-sm leading-6 text-gray-400">
						This is a short description elaborating the service you have mentioned above
					</p>
				</li>
				<li>
					<a
						href="/shoes"
						class="font-semibold inline-block mb-6 text-3xl max-sm:text-3xl max-lg:text-2xl whitespace-nowrap my-3 tracking-widest transition-all duration-400"
						>Leather Design</a
					>
					<p class="text-sm leading-6 text-gray-400">
						Explore our collection of high-quality leather shoes for men,woman and chidren in
						different design.
					</p>
				</li>
			</ul>
		</div>
	</section>
	<section class="product">
		<Left />
	</section>
	<footer class="mt-20">
		<Footer />
	</footer>
</main>

<style>
	nav {
		position: absolute;
		top: 0;
	}
	.sec ul h3 {
		font-family: Poppins, sans-serif;
		font-weight: bolder;
	}
	.carousel-y {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-size: cover;
		background-position-y: -130px;
		z-index: 0;
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
