<script lang="ts">
	import { Buttons } from '$lib';
	import { TextScrambler } from '$lib';
	import github from '$lib/assets/github.svg';
	import linkedin from '$lib/assets/linkedin.png';
</script>

<div class="container">
	<div class="home-card">
		<div class="home-card__title">
			<h1><TextScrambler text="Hi there, I'm" /> <span class="name">Pierre Marien</span>!</h1>
		</div>
		<div class="home-card__subtitle">
			<h2>Frontend Developer</h2>
		</div>
	</div>

	<div class="home-card__links">
		<Buttons
			links={['https://github.com/Pierremarien', 'https://www.linkedin.com/in/pierre-marien']}
			icons={[github, linkedin]}
			altIcons={['github', 'linkedin']}
			isExternal={true}
		/>
	</div>
</div>

<style lang="scss">
	.container {
		@include flex-center;
		justify-content: flex-end;
		width: 100%;
		height: 100vh;
		gap: 20%;
	}
	.home-card {
		@include flex-column;
		align-items: flex-end;
		width: calc(100% - 2rem); 
		height: calc(100% - 2rem);

		&__title {
			padding-bottom: 1rem;
			text-align: right;
			.name {
				font-family: $tertiary-font;
				font-style: normal;
			}
		}

		&__links {
			@include flex-column;
			padding: 1rem;
			gap: 1rem;
		}
	}
</style>
