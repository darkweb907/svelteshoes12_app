<!-- src/components/Navbar.svelte -->
<script>
	import { scale } from 'svelte/transition';
	import logo from '$lib/images/logo1.png';

	export let links = [];
	export let bag;

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav class="bg-transparent py-3">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16 px-4">
			<div transition:scale class="flex-shrink-0 mage">
				<a href="/"><img class=" my-5 w-1/3 md:w-1/3" src={logo} alt="Logo" /></a>
			</div>
			<div class="hidden md:block link">
				<div class=" flex items-baseline space-x-2 justify-end">
					{#each links as link (link)}
						<a
							href={link.url}
							class="px-2 py-2 rounded-md text-lg font-medium text-white hover:text-gray-300"
						>
							{link.text}
						</a>
					{/each}
				</div>
			</div>
			<div class="-mr-2 flex md:hidden">
				<button
					type="button"
					class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
					on:click={toggleMenu}
				>
					<span class="sr-only">Open main menu</span>
					<!-- Icon when menu is closed. -->
					<svg
						class="block h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
					<!-- Icon when menu is open. -->
					<svg
						class="hidden h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<div class={isMenuOpen ? 'block' : 'hidden md:hidden'} id="hi">
		<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
			{#each links as link (link)}
				<a
					href={link.url}
					class="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
				>
					{link.text}
				</a>
			{/each}
		</div>
	</div>
</nav>

<style>
	.mage {
		flex: 1;
	}
	.link {
		flex: 3;
	}
	#hi {
		background-color: black;
	}
</style>
