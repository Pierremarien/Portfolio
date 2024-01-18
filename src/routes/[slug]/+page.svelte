<script lang="ts">
	import { TextScrambler } from '$lib';
	import { Gallery } from '$lib';
	import type { Project } from '$lib/types/types';
	export let data: Project;
	let isLoading: boolean = !data;
</script>

<section class="project">
	{#if isLoading}
		<p>Loading...</p>
	{:else if data}
		<h2><TextScrambler text={data.title} /></h2>
		<div class="container">
			<Gallery images={data.imgs} />
		</div>
		<div class="content">
			<p>{data.description}</p>
			{#if data.website}
				<p>
					You can find the website{' '}
					<a href={data.website} target="_blank" rel="noopener noreferrer"> here </a>
				</p>
			{:else}
				<p>There is no deployment for this project.</p>
			{/if}
			<p>
				You can find the code{' '}
				<a href={data.code} target="_blank" rel="noopener noreferrer"> here </a>
				.
			</p>
		</div>
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
