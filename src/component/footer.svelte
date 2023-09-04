<!-- src/components/Footer.svelte -->
<div class="footer bg-black" id="ring">
	<div class="footer-content">
		<div class="footer-div leading-7">
			<h3 class="text-xl font-semibold mb-2 text-white">About Interior</h3>
			<p class="text-white mb-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo augue vel neque
				malesuada.
			</p>
			<div class="flex space-x-4">
				<a href="https://www.facebook.com/profile.php?id=100074675780177" class="text-white">
					<i class="fab fa-facebook fa-lg" />
				</a>
				<a href="https://www.facebook.com/profile.php?id=100074675780177" class="text-white">
					<i class="fab fa-twitter fa-lg" />
				</a>
				<a
					href="https://www.instagram.com/invites/contact/?i=1g3cmxgu0lp1j&utm_content=hrhdrx0"
					class="text-white"
				>
					<i class="fab fa-instagram fa-lg" />
				</a>
			</div>
		</div>
		<div class="footer-div">
			<h3 class="text-xl font-semibold mb-2 text-white">Contact Us</h3>
			<p class="text-white leading-6">
				<strong>Address:<br /></strong> 123 Main St, City, Country<br />
				<strong>Phone:<br /></strong> +123-456-7890<br />
				<strong>Email:<br /></strong> info@example.com
			</p>
		</div>
		<div class="footer-div">
			<h3 class="text-xl font-semibold mb-2 text-white">Quick Links</h3>
			<ul class="text-white">
				<li class="mb-1"><a href="#">Home</a></li>
				<li class="mb-1"><a href="#">About</a></li>
				<li class="mb-1"><a href="#">Portfolio</a></li>
				<li class="mb-1"><a href="#">Contact</a></li>
			</ul>
		</div>
	</div>
</div>

<!-- src/components/Footer.svelte -->
<style>
	/* Apply styles using Tailwind CSS classes */
	.footer {
		background-color: black;
	}
	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.footer-div {
		width: 100%;
		padding: 1rem;
		margin-bottom: 1rem;
		background-color: black;
		color: white;
	}
	@media (min-width: 640px) {
		.footer-content {
			flex-direction: row;
		}
		.footer-div {
			flex: 1;
			margin: 0 0.5rem;
			margin-bottom: 0;
		}
	}
</style>
