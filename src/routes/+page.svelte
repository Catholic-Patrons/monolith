<script lang="ts">
	import NavBar from './NavBar.svelte';
	import Footer from './Footer.svelte';
	import splash from '$lib/images/james-coleman-HozneSuPplM-unsplash.jpg';
	import webhomeimg from '$lib/images/CathP-WebHomeBG1.png';
	import logo1img from '$lib/images/logo1.png';

	const blobs = [
		["Who we are.", "A Roman Catholic lay apostolate committed to restoring vibrancy in the Catholic Church by empowering the faithful to practice solidarity, stewardship, and charity."],
		["What we’ll do.", "We’ll raise money for smaller Catholic parishes, religious communities, and Catholic schools to pay off or pay down their debt and to restore their buildings."],
		["Why we do it.", "We believe we Catholics have a responsibility to lift up one another and the Church as a whole to restore vibrancy throughout the Catholic Church."],
		["How we’ll do it.", "Crowdfunding. This is just a modern word for the age old, tried-and-true method of Catholics coming together to meet the needs of the parish."]
	];
</script>

<div style="display: flex; flex-flow: column; min-height: 100vh;">
	<NavBar/>
	
	<div class="homepage-img-container">
		<img class="homepage-img" src="{webhomeimg}" alt="">
		<em>Restoring vibrancy in the Catholic Church.</em>
	</div>

	<div class="page-contents">
		<div class="left-contents">
			<h2>Our Vision & Our Mission:</h2>
			<p>
				CatholicPatrons envisions a world where every Catholic parish, 
				religious community, and school can flourish and fulfill its 
				mission without being burdened by debt. CatholicPatrons seeks 
				to create a global network of generous and faithful donors and 
				connect them with those communities who need them most. 
				CatholicPatrons hopes to strengthen the Catholic Church and 
				its witness to the Gospel by empowering its members to practice 
				solidarity, stewardship, and charity.
			</p>
			<p>
				CatholicPatrons will be a crowdfunding platform that connects 
				donors with Catholic parishes, religious communities, and 
				schools to provide financial assistance to pay off their debts 
				or restore their buildings. By using a model similar to 
				DonorsChoose, Kickstarter, GiveSendGo, and GoFundMe, 
				CatholicPatrons will enable donors to contribute to the 
				growth of the Catholic Church and its diverse and vibrant 
				expressions of faith. CatholicPatrons aims to supplement the 
				support that parishioners give to their own parishes and to 
				foster a sense of co-responsibility and communion among 
				Catholics across the world.
			</p>

			<br>
			<a class="btn" href="/about" target="_self">Learn More</a>
		</div>
		<div class="image-container">
			<img src="{splash}" alt="">
		</div>
	</div>

	<div style="background-color: rgb(23, 43, 54);">
		<!-- <div style="display: flex; margin: 1em;">
			<div style="background-color: rgb(174, 219, 245); width: 50%; height: 800px;"></div>
			<div style="background-color: white; width: 50%; height: 800px;"></div>
		</div> -->
		
		<div class="blobs-container">
			{#each blobs as blob}
				<div class="blob">
					<h1>{blob[0]}</h1>
					<div>
						<p>{blob[1]}</p>
					</div>
				</div>
			{/each}

			<!-- padding -->
			<div class="blob pad-blob" style="width: 50%; height: 75px;"></div>
			<div class="blob pad-blob" style="width: 50%; height: 75px;"></div>
		</div>
	</div>

	<Footer/>
</div>

<style>
	:root {
		--h2-font-size-value: 3;
		--p-font-size-value: 1.4;
	}

	.blobs-container {
		/* transform: translateY(-130%); */
		display: flex;
		flex-wrap: wrap;
		margin: 1em;
		justify-content: space-between;
		overflow-x: hidden;
	}

	/* Fix CSS on mobile devices */
	@media (max-width: 700px) {
		.page-contents, .blobs-container {
			flex-direction: column;
		}
		.homepage-img-container em {
			display: block !important;
			position: relative;
			margin-top: -19%;
			z-index: 100;
			color: white;
		}
		.image-container {
			margin-top: 1.8em;
		}
		.blob {
			max-width: 100% !important;
		}
		.pad-blob {
			width: 100% !important;
		}
		.blob:nth-child(6) {
			background-position: 30% 0 !important;
		}
		.blob p {
			max-width: 200px !important;
			margin-left: 1em !important;
			text-align: left !important;
		}
		.left-contents {
			width: auto !important;
		}
	}

	.blob {
		max-width: calc(50% - 3em*2);
		font-size: 1.2em;
		padding: 3em;
		position: relative;
	}
	.blob:nth-child(odd) {
		background-color: rgb(174, 219, 245);
	}
	.blob:nth-child(even) {
		background-color: rgb(245, 245, 245);
	}.left-contents {
		width: 100%;
		padding: 3%;
	}
	.blob:nth-child(6) {
		background-image: url("/src/lib/images/logo1.png");
		background-size: contain;
		background-repeat: no-repeat;
		background-position: right;
	}

	.blob h1 {
		width: 50vw;	
		color: rgb(117, 119, 120);
		font-size: 2.5em;
	}
	.blob p {
		display: block;
		margin: auto;
		text-align: center;
		max-width: 400px;
	}

	.btn {
		padding: 1.336em 2.8em;
		background-color: rgb(144, 208, 244);
		border-radius: 300px;
		color: white;
		text-decoration: none;
	}

	.homepage-img-container {
		background-color: black;
		width: 85%;
		height: 40vw;
		margin: auto;
		margin-top: 2em;
		border-radius: 20px;
		overflow: hidden;
		text-align: center;
	}

	.homepage-img {
		/* width: 100%; */
		display: block;
		height: 125%;
		/* vertical-align: middle; */
		transform: translate(6%, -10%);
		/* object-fit: cover; */
		/* object-position: center;  */
		/* object-position: 0.494321977287907% 27.20295018438653%; */
	}

	@media (min-width: 700px) {
		.homepage-img-container em {
			display: block;
			position: relative;
			left: 26%;
			top: -34%;
			color: white;
			/* transform: translate(0px, -300px); */
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
		color: rgb(23, 43, 54);
		font-size: calc((var(--h2-font-size-value) - 1) * 1.2vw + 1rem);
	}

	.left-contents p {
		font-size: calc((var(--p-font-size-value) - 1) * 1.2vw + 1rem);
	}

	.image-container {
		width: 100%; /* Start with 50% width */
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
		opacity: 50%;
		filter: sepia(20%);
	}
</style>
