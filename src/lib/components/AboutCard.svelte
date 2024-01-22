<script lang="ts">
	import scsslogo from '$lib/assets/sass-svgrepo-com.svg';
	import tslogo from '$lib/assets/typescript-16-svgrepo-com.svg';
	import jslogo from '$lib/assets/javascript-16-svgrepo-com.svg';
	import htmllogo from '$lib/assets/html-124-svgrepo-com.svg';
	import reactlogo from '$lib/assets/react-svgrepo-com.svg';
	import sveltelogo from '$lib/assets/svelte-16-svgrepo-com.svg';
	export let about = {
		about:
			"I am a Frontend Developer with a passion for creating beautiful and functional websites. I still have a long path ahead of me to master development and design but i'm confident in my adaptability and my capacity to learn and understand things pretty fast. I am currently learning React and having some fun with Svelte but I'm pretty open to learn new things. I love gaming, coding and loads of artsy things japanese art, loads of different music styles, ...",
		quote: 'You know nothing, Jon Snow.',
		imgs: [
			{
				img: tslogo,
				alt: 'Typescript'
			},
			{
				img: htmllogo,
				alt: 'Html 5'
			},
			{
				img: reactlogo,
				alt: 'React'
			},
			{
				img: jslogo,
				alt: 'Javascript'
			},
			{
				img: scsslogo,
				alt: 'Scss'
			},
			{
				img: sveltelogo,
				alt: 'Svelte'
			}
		]
	};
</script>

<div class="about-card">
	<div class="about-card__description">
		<q>{about.quote}</q>
		<p>{about.about}</p>
	</div>
	<div class="about-card__imgs">
		{#each about.imgs as img (img.img)}
			<div class="about-card__imgs__img">
				<img src={img.img} alt={img.alt} />
				<p>{img.alt}</p>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.about-card {
		@include flex-row;
		justify-content: space-around;

		&__description {
			@include flex-column;
			gap: 2rem;
			width: 50%;

			q {
				opacity: 0.5;
				align-self: end;
                font-style: italic;
                margin-right: 2rem;
			}
		}
		&__imgs {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(2, 1fr);
			gap: 1rem;

			&__img {
				@include flex-column;
				gap: 0.5rem;

				img {
					width: 42px;
					height: 42px;
					object-fit: cover;
					filter: invert(92%);
                    opacity: 0.88;
				}
			}
		}
	}

    @media screen and (max-width: 768px) {
        .about-card {
            @include flex-column;
            gap: 3rem;

			&__description {
				width: 80%;
        }
    }
}
</style>
