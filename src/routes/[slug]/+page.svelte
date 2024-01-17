<script lang="ts">
	import { TextScrambler } from '$lib';
	import { Gallery } from '$lib';
	import type { Project } from '$lib/types/types';
    import projects from '$lib/data/projects.json';

    export let slug: string;
    let project: Project = projects.find(p => p.slug === slug);
    let isLoading: boolean = project ? false : true;
</script>

<section class="project">
	{#if isLoading}
		<p>Loading...</p>
	{:else if project}
		<section class="project">
			<h2><TextScrambler text={project.title} /></h2>
			<div class="container">
				<Gallery images={project.imgs} />
			</div>
			<div class="content">
				<p>{project.description}</p>
				{#if project.website}
					<p>
						You can find the website{' '}
						<a href={project.website} target="_blank" rel="noopener noreferrer"> here </a>
					</p>
				{:else}
					<p>There is no deployment for this project.</p>
				{/if}
				<p>
					You can find the code{' '}
					<a href={project.code} target="_blank" rel="noopener noreferrer"> here </a>
					.
				</p>
			</div>
		</section>
	{:else}
		<p>Project not found</p>
	{/if}
</section>

<style lang="scss">
	.project {
		height: 100%;
	}

	h2 {
		font-family: $tertiary-font;
		font-size: 3rem;
		text-align: left;
		padding-top: 4rem;
		padding-left: 3rem;
	}

	.container {
		@include flex-center;
		width: 100%;
		height: 50%;
		padding-top: 2rem;
	}

	.content {
		@include flex-column;
		gap: 1.5rem;
		align-items: start;
		padding: 2rem;
		p {
			font-size: 1.2rem;
		}

		a {
			color: $tertiary;
			text-decoration: none;
			cursor: pointer;

			&:hover,
			&:focus,
			&:active {
				color: $primary;
			}

			&:visited {
				color: $secondary;
			}
		}
	}

	@media (max-width: 1225px) {
		.container {
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}
</style>
