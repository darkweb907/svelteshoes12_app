<script>
	import Footer from './footer.svelte';
	import Bags from './shoeslLinks/bags.svelte';
	import Cardshoe from './shoeslLinks/cardshoe.svelte';
	import Customer from './shoeslLinks/customer.svelte';
	import Slide from './shoeslLinks/slide.svelte';
	import Tabs from './shoeslLinks/tabs.svelte';
</script>

<main>
	<section>
		<Slide />
	</section>

	<Cardshoe />
	<Tabs />
	<Bags />
	<Customer />
	<Footer />
</main>
