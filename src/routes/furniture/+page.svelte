<!-- FurnitureGallery.svelte -->
<script>
	import { furnitureData } from '../../data/furniture';
	import Navbar from '../../component/navbar.svelte';
	let selectedItem = null;

	const navLinks = [
		{ text: 'Segun Odumosu Band', url: '/music' },
		{ text: 'Jazzon Interior', url: '/interior' },
		{ text: 'Leather Work', url: '/shoes' }
	];

	function handleMouseOver(item) {
		selectedItem = item;
	}

	function handleMouseLeave() {
		selectedItem = null;
	}
</script>

<section>
	<nav class="container mx-auto bg-black">
		<Navbar links={navLinks} />
	</nav>
	<div
		class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto mt-5 max-md:px-4"
	>
		{#each furnitureData as item (item.id)}
			<div
				class="relative bg-white rounded-lg shadow-lg overflow-hidden"
				on:mouseover={() => handleMouseOver(item)}
				on:mouseleave={handleMouseLeave}
			>
				<img
					class="w-full h-auto transform scale-100 transition-transform duration-300 hover:scale-110 aspect-[4/3]"
					src={`${item.imageUrl}`}
					alt={item.name}
				/>
				<div
					class="absolute inset-0 flex items-center justify-center opacity-0 bg-black text-white hover:opacity-90 transition-opacity duration-300"
					class:selected={selectedItem === item}
				>
					<h2 class="text-xl font-semibold">{item.name}</h2>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.selected {
		opacity: 0.9;
	}
</style>
