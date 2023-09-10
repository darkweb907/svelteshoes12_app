<!-- src/routes/ContactForm.svelte -->
<script>
	export let form;
</script>

<main class="mx-auto max-w-screen-md p-4">
	<div class="bg-white shadow-md rounded-lg p-8">
		<h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
		<form method="POST">
			<div class="mb-4">
				<label for="name" class="block text-gray-700">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
					required
				/>
			</div>
			<div class="mb-4">
				<label for="email" class="block text-gray-700">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
					required
				/>
			</div>
			<div class="mb-4">
				<label for="number" class="block text-gray-700">Number:</label>
				<input
					type="number"
					id="number"
					name="number"
					class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
					required
				/>
			</div>
			<div class="mb-4">
				<label for="message" class="block text-gray-700">Message:</label>
				<textarea
					id="message"
					name="message"
					class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
					required
				/>
			</div>

			<div class="mb-4">
				<button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
					>Submit</button
				>
			</div>
			<p class="success">{form?.success || ''}</p>
		</form>
	</div>
</main>

<style>
	/* Add your custom styles here or import Tailwind CSS classes */
</style>
