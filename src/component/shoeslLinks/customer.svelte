<script>
	import chair from '$lib/images/black6.jpg';
	import fork from '$lib/images/black1.jpg';
	import sand from '$lib/images/black2.webp';
</script>

<section class="p-8 bg-gray-100 text-center grid gap-4 grid-cols-1 md:grid-cols-3">
	<div
		class="bg-white rounded-lg shadow-md p-6 transform transition-transform hover:-translate-y-1 hover:shadow-lg"
	>
		<img src={sand} alt="Customer 1" class="w-20 h-20 object-cover rounded-full mb-2 mx-auto" />
		<blockquote class="text-lg font-medium mb-4">
			"I'm amazed by the quality of their products. The leather shoes I bought from them are
			incredibly comfortable and stylish."
		</blockquote>
		<p class="text-gray-600">John Smith</p>
	</div>
	<div
		class="bg-white rounded-lg shadow-md p-6 transform transition-transform hover:-translate-y-1 hover:shadow-lg"
	>
		<img src={chair} alt="Customer 2" class="w-20 h-20 rounded-full mb-2 mx-auto" />
		<blockquote class="text-lg font-medium mb-4">
			"The craftsmanship of their leather goods is outstanding. I've been a customer for years and
			I'm never disappointed."
		</blockquote>
		<p class="text-gray-600">Sarah Johnson</p>
	</div>
	<div
		class="bg-white rounded-lg shadow-md p-6 transform transition-transform hover:-translate-y-1 hover:shadow-lg"
	>
		<img src={fork} alt="Customer 3" class="w-20 h-20 rounded-full mb-2 mx-auto" />
		<blockquote class="text-lg font-medium mb-4">
			"Exceptional service and attention to detail. I received my order promptly and it exceeded my
			expectations."
		</blockquote>
		<p class="text-gray-600">Michael Davis</p>
	</div>
</section>
