<script>
	import Footer from '../../component/footer.svelte';
	import Model from '../../component/model.svelte';
	import Music from '../../component/music.svelte';
	import Brand from '../../component/musicApp/brand.svelte';
	import Head from '../../component/musicApp/head.svelte';
	import Song from '../../component/musicApp/song.svelte';
	import Navbar from '../../component/navbar.svelte';

	// Replace with the actual year of your album

	const navLinks = [
		{ text: 'Segun Odumosu Band', url: '#main' },
		{ text: 'Jazzon Interior', url: './interior' },
		{ text: 'Leather Work', url: '/shoes' }
	];

	//model
	let isOpen = true;
	//end
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<nav class="bg-black py-2">
	<Navbar links={navLinks} />
</nav>
<!-- <div class="music">
	<Music />
</div> -->
<main>
	<Head />
	<Song />
	<Brand />
</main>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<Model
	{isOpen}
	on:click={() => {
		isOpen = !isOpen;
	}}
/>

<Footer />

<style>
</style>
