<script lang="ts">
	import { Buttons } from '$lib';
	import { BurgerPill } from '$lib';
	import projects from '$lib/assets/projects.svg';
	import about from '$lib/assets/about.png';
	import contact from '$lib/assets/contact.svg';
	import home from '$lib/assets/home.svg';

	let isMenuOpen = true;
</script>

<div class="navbar">
	<BurgerPill
		on:click={() => {
			isMenuOpen = !isMenuOpen;
			console.log('clicked');
		}}
	/>

	<div class={`navbar__links ${isMenuOpen ? 'open' : ''}`}>
		<Buttons
			links={['/#home', '/#projects', '/#about', '/#contact']}
			icons={[home, projects, about, contact]}
			altIcons={['home', 'projects', 'about', 'contact']}
			isExternal={false}
		/>
	</div>
</div>

<style lang="scss">
	.navbar {
		position: fixed;
		z-index: 100;
		@include flex-row;
		padding: 1rem;
		gap: 3rem;

		&__links {
			opacity: 0;
			visibility: hidden;
			transition: all 1s ease-in-out;
			@include flex-row;
			gap: 1rem;
			z-index: 10;
			&.open {
				visibility: visible;
				animation: slideIn 0.6s forwards;
			}
		}
	}

	@keyframes slideIn {
		0% {
			opacity: 0;
			transform: translateX(-100%);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
