<script lang="ts">
	import { ProjectCard } from '$lib';
	import cogip from '$lib/assets/cogip-preview.jpg';
	import darkKitchen from '$lib/assets/dark-kitchen-preview.jpg';
	import azStore from '$lib/assets/az-store-preview.jpg';

	let projects = [
		{
			project: 'Cogip',
			description:
				"This is our latest group project using React and tailwind. It's a project using an api made by our backend team. We worked in a team of 4 to realise this project.",
			link: 'https://cogip.netlify.app/',
			img: cogip
		},
		{
			project: 'Dark Kitchen',
			description:
				"This is one of our earliest projects using vanilla js and sass. It's a web application for a fictional restaurant to manage their menu and a basket to manage takeouts.",
			link: 'https://dark-kitchen.netlify.app/',
			img: darkKitchen
		},
		{
			project: 'AZ-Store',
			description:
				"This project was the last project before learning React. It was made using php and scss. It's a webshop for a fictional shoe store containing a basket a fictional login...",
			link: 'https://az-store.netlify.app/',
			img: azStore
		}
	];
</script>

<div class="scroller snap">
	{#each projects as project (project.link)}
		<ProjectCard {project} />
	{/each}
</div>

<style lang="scss">
	.scroller {
		display: grid;
		gap: 2rem;
		grid-auto-flow: column;
		grid-template-columns: repeat(auto-fill, 300px);
		overflow-x: auto;
		overflow-y: hidden;
		overscroll-behavior-inline: contain;
		&::-webkit-scrollbar {
			display: none;
		}
	}
	.snap {
		scroll-snap-type: inline mandatory;
	}
	@media (max-width: 1020px) {
		.scroller {
			width: 95%;
		}
	}
</style>
