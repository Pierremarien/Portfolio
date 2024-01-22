<script lang="ts">
	import { ProjectCard } from '$lib';
	import cogip from '$lib/assets/cogip-preview.jpg';
	import pokedex from '$lib/assets/pokedex-preview.jpg';
	import azStore from '$lib/assets/az-store-preview.jpg';

	let projects = [
		{
			project: 'Cogip',
			description:
				"This is our latest group project using React and tailwind. It's a project using an api made by our backend team. We worked in a team of 4 to realise this project.",
			img: cogip
		},
		{
			project: 'Pokedex',
			description:
				"This project was made using php mysql and scss. It's a pokedex where you can see all the pokemons and their stats. You can also add pokemons to your favorites and see them in a separate page.",
			img: pokedex
		},
		{
			project: 'AZ-Store',
			description:
				"This project was the last project before learning React. It was made using php and scss. It's a webshop for a fictional shoe store containing a basket a fictional login...",
			img: azStore
		}
	];
</script>

<div class="scroller snap">
	{#each projects as project (project.project)}
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
		padding-bottom: 0.3rem;

		&::-webkit-scrollbar {
			width: 10px;
			
			&-track {
				opacity: 0;
			}

			&-thumb {
				background-color: $primary;
				border-radius: 10px;
				opacity: 0;
				transition: all 0.3s ease-in-out;
				&:hover {
					opacity: 1;
				}
			}
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
