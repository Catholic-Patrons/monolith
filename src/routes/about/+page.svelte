<script lang="ts">
	import NavBar from '../NavBar.svelte';
	import Footer from '../Footer.svelte';
	import splash from '$lib/images/james-coleman-HozneSuPplM-unsplash.jpg';

</script>

<div style="display: flex; flex-flow: column; min-height: 100vh;">
	<NavBar/>

	<div class="page-contents">
		<div class="left-contents">
			<h2>Who We Are</h2>
			<p><strong>
				CatholicPatrons envisions a world where every Catholic parish, 
				religious community, and school can flourish and fulfill its
				mission without being burdened by debt.
			</strong></p>
			<p>
				CatholicPatrons will be a crowdfunding platform that connects 
				donors with Catholic parishes, religious communities, and 
				schools to provide financial assistance to pay off their debts 
				or restore their buildings.
			</p>
			<p>
				By using a model similar to DonorsChoose, Kickstarter, GiveSendGo, 
				and GoFundMe, CatholicPatrons will enable donors to contribute to 
				the growth of the Catholic Church and its diverse and vibrant 
				expressions of faith. CatholicPatrons aims to supplement the 
				support that parishioners give to their own parishes and to 
				foster a sense of co-responsibility and communion among Catholics 
				across the world.
			</p>
		</div>
		<div class="image-container">
			<img src="{splash}" alt="">
		</div>
	</div>

	<Footer/>
</div>

<style>
	:root {
		--h2-font-size-value: 3;
		--p-font-size-value: 1.4;
	}

	/* Fix CSS on mobile devices */
	@media (max-width: 700px) {
		.page-contents {
			flex-direction: column;
		}
		.left-contents {
			width: auto !important;
		}
		.image-container {
			width: 100% !important;
		}
		.image-container img {
			display: block;
			margin: auto !important;
		}
	}

	.page-contents {
		display: flex;
		padding-top: 6.6vmax;
    	padding-bottom: 6.6vmax;
		font-family: "Cormorant Garamond", serif;
		flex: 1;
	}

	.left-contents {
		width: 100%;
		padding: 3%;
	}

	.left-contents h2 {
		color: rgb(117, 119, 120);
		font-size: calc((var(--h2-font-size-value) - 1) * 1.2vw + 1rem);
	}

	.left-contents p {
		font-size: calc((var(--p-font-size-value) - 1) * 1.2vw + 1rem);
	}

	.image-container {
		width: 90%; /* Start with 50% width */
		height: 100vh; /* Start with 50% of viewport height */
		max-width: 635px;
		max-height: 80vh; /* Set a maximum height */
		margin-right: 20px; /* Space between content and image */
		overflow: hidden; /* Hide overflowing image content */
	}
	.image-container img {
		width: 100%;
		height: 100%;
		object-fit: cover; /* Cover the entire container */
		/* object-position: center;  */
		object-position: 30.494321977287907% 47.20295018438653%;
		display: block; /* Prevents a small space at the bottom of the image */
		opacity: 70%;
	}
</style>
