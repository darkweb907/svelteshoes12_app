<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	// import Welcome from '$lib/images/s.png';
	import welcome from '$lib/images/sax.avif';
	import sand from '$lib/images/sax1.avif';
	import logo from '$lib/images/sax2.avif';

	const images = [{ src: welcome }, { src: sand }, { src: logo }];

	let currentIndex = 0;

	function animateCarousel() {
		const tl = gsap.timeline();
		tl.to('.carousel-content', {
			opacity: 0,
			duration: 0.5,
			onComplete: () => {
				currentIndex = (currentIndex + 1) % images.length;
				tl.set('.carousel-content', { opacity: 0 });
				tl.to('.carousel-content', { opacity: 1, duration: 0.5 });
			}
		});
	}

	onMount(() => {
		animateCarousel();
		setInterval(animateCarousel, 3000); // Change content every 3 seconds
	});
</script>

<div class="carousel container mx-auto">
	{#each images as { src }, i}
		{#if currentIndex === i}
			<img {src} alt={`Image ${i + 1}`} class="carousel-image" />
		{/if}
	{/each}
</div>

<style>
	.carousel {
		width: 100%;
		height: 300px;
		overflow: hidden;
		position: relative;
	}

	.carousel-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
