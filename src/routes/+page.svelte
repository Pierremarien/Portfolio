<script lang="ts">
	import { HomeCard } from '$lib';
	import { Scroller } from '$lib';
    import { AboutCard } from '$lib';
</script>

<section id="home">
	<HomeCard />
</section>
<section id="projects">
	<h2>Projects</h2>
	<Scroller />
</section>
<section id="About">
    <h2>About Me</h2>
    <AboutCard />
</section>
<section id="contact">
    <h2>Contact</h2>
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
    #About {
        width: 100%;
        height: 50vh;
        box-sizing: border-box;
        display: grid;
        grid-template-rows: auto;
        justify-items: center;
        align-items: center;
        h2 {
            justify-self: end;
            padding-right: 4rem;
        }
    }
    #contact {
        width: 100%;
        height: 50vh;
        box-sizing: border-box;
    }
    @media (max-width: 768px) {
        #About {
            height: 100vh;
        }
    }
</style>
