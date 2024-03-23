<!-- FurnitureGallery.svelte -->
<script>
	import { furnitureData } from '$lib/furniture';

	let selectedItem = null;

	function handleMouseOver(item) {
		selectedItem = item;
	}

	function handleMouseLeave() {
		selectedItem = null;
	}
</script>

<section class="container mx-auto text-center my-16">
	<h1 class="font-bold text-2xl tracking-wider mt-5">Check Out Our Projects....</h1>
	<div class="grid grid-cols-1 lg:grid-cols-4 gap-4 container mx-auto mt-5 max-md:px-4">
		{#each furnitureData as item}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
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
