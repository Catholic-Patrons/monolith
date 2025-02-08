<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const path = window.location.pathname.slice(1);
		const curNavItem = Array.from(document.getElementsByClassName("nav-item"))
			.find(e => (e as HTMLElement).innerText.toLowerCase() === path);
		if (curNavItem) {
			(curNavItem as HTMLElement).style.textDecoration = "underline";
		}
	});

</script>

<div class="navbar">
	<a href="/" style="padding: 0.1em 0.5em; padding-left: 0px; text-decoration: none; color: white;">catholicpatrons.org</a>
	<div class="navbar-right-seg">
		<a class="nav-item" href="/about">About</a>
		<a class="nav-item" href="/contact">Contact</a>
	</div>
</div>

<style>
	:root {
		--site-title-font-size-value: 2.1;
		--normal-font-size-value: 1.2;
	}

	.navbar {
		background-color: rgb(144, 208, 244);
		display: flex;
		
		color: white;
		font-family: "Cormorant Garamond", serif;
		font-size: calc((var(--site-title-font-size-value) - 1) * 1.2vw + 1rem);

		padding-top: 1.1vw;
		padding-bottom: 1.1vw;
		padding-left: 2vw;
		padding-right: 2vw;
	}

	.navbar-right-seg {
		display: flex;
		margin-left: auto;
		font-size: calc((var(--normal-font-size-value) - 1) * 1.2vw + 1rem);
	}

	.navbar-right-seg a {
		color: black;
		padding: 0.4em 0.5em;
		cursor: pointer;
		text-decoration: none;
		text-underline-offset: 0.5rem;
		transform: translate(0, 0.2em);
	}
</style>
