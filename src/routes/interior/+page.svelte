<script>
	import Card from '../../component/card.svelte';
	import Navbar from '../../component/navbar.svelte';

	const navLinks = [
		{ text: 'Furniture', url: '/furniture' },
		{ text: 'Pop Wall', url: '#draught' },
		{ text: 'painting', url: '#paint' },
		{ text: 'Flush Door', url: '#flush' }
	];
</script>

<Navbar links={navLinks} />

<Card />
