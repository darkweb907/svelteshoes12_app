<script>
	import Card from '../../component/card.svelte';
	import Navbar from '../../component/navbar.svelte';

	const navLinks = [
		{ text: 'Furniture', url: '#draught' },
		{ text: 'Pop Wall', url: '#draught' },
		{ text: 'painting', url: '#paint' },
		{ text: 'Flush Door', url: '#flush' }
	];
</script>

<nav class="container mx-auto">
	<Navbar links={navLinks} />
</nav>
<main>
	<div class="interior px-5 md:px-0">
		<Card />
	</div>
</main>
