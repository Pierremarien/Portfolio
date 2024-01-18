<script lang="ts">
	import { BackgroundCanva, HomeCard } from '$lib';
	import { Scroller } from '$lib';
	import { AboutCard } from '$lib';
	import { ContactCard } from '$lib';
</script>

<div class="container">
	<BackgroundCanva />
	<section id="home">
		<HomeCard />
	</section>
	<section id="projects">
		<h2>Projects</h2>
		<Scroller />
	</section>
	<section id="about">
		<h2>About Me</h2>
		<AboutCard />
	</section>
	<section id="contact">
		<h2>Contact</h2>
		<ContactCard />
	</section>
</div>

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
			padding-left: 3rem;
			padding-top: 4rem;
		}
	}
	#about {
		width: 100%;
		height: 50vh;
		box-sizing: border-box;
		display: grid;
		grid-template-rows: auto;
		justify-items: center;
		align-items: center;
		h2 {
			justify-self: end;
			padding-right: 3rem;
		}
	}
	#contact {
		width: 100%;
		height: 50vh;
		box-sizing: border-box;
		display: grid;
		grid-template-rows: auto;
		justify-items: center;
		align-items: center;

		h2 {
			justify-self: start;
			padding-left: 3rem;
			padding-top: 4rem;
		}
	}

	.container {
		width: 100%;
		height: 100vh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
		overscroll-behavior-y: contain;
		scroll-behavior: smooth;
	}
	section {
		scroll-snap-align: start;
	}
	@media (max-width: 768px) {
		#about {
			height: 100vh;
		}
	}
</style>
