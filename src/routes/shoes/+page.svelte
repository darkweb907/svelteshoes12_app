<script>
	import Navbar from '../../component/navbar.svelte';
	import Shoes from '../../component/shoes.svelte';

	const navLinks = [
		{ text: 'Shoes', url: '#shoes' },
		{ text: 'Belt', url: './shoes' },
		{ text: 'Wallet', url: '#bags' },
		{ text: 'Bag', url: '#bags' },
		{ text: 'Contact', url: '#ring' }
	];
</script>

<nav class="container mx-auto bg-black">
	<Navbar links={navLinks} />
</nav>
<main>
	<Shoes />
</main>
