<script>
	import Footer from '../../component/footer.svelte';
	import Model from '../../component/model.svelte';
	import Brand from '../../component/musicApp/brand.svelte';
	import Head from '../../component/musicApp/head.svelte';
	import Song from '../../component/musicApp/song.svelte';
	import Navbar from '../../component/navbar.svelte';

	let isVideoOpen = true;

	const navLinks = [
		{ text: 'Segun Odumosu Band', url: '/music' },
		{ text: 'Jazzon Interior', url: '/interior' },
		{ text: 'Leather Work', url: '/shoes' }
	];
</script>

<nav class="bg-black py-2">
	<Navbar links={navLinks} />
</nav>
<main>
	<Head />
	<Song />
	<Brand />
</main>

<Model bind:isOpen={isVideoOpen} />

<Footer />

<style>
</style>
