<script lang="ts">
	import { HomeCard } from '$lib';
	import { Scroller } from '$lib';
</script>

<section id="home">
	<HomeCard />
</section>
<section id="projects">
	<h2>Projects</h2>
	<Scroller />
</section>

<style lang="scss">
	#home,
	#projects {
		width: 100%;
		height: 100vh;
		box-sizing: border-box;
	}
	#projects {
		display: grid;
		grid-template-rows: auto;
		justify-items: center;
		align-items: center;
		gap: 1rem;

		h2 {
			justify-self: start;
			padding-left: 2rem;
			padding-top: 4rem;
		}
	}
</style>
