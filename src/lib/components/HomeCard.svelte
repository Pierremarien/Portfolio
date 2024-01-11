<script lang="ts">
	import { Buttons } from '$lib';
	import github from '$lib/assets/github.svg';
	import linkedin from '$lib/assets/linkedin.png';
</script>

<div class="home-card">
	<div class="wrapper">
		<div class="home-card__title">
			<h1>Hi There, I'm <span class="name">Pierre Marien</span>!</h1>
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

<style lang="scss"></style>
