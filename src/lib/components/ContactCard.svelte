<script lang="ts">
	import contact from '$lib/assets/contact.svg';
	export let links: [
		{
			link: string;
			icon: string | undefined;
			alt: string;
		},
		{
			link: string;
			icon: string | undefined;
			alt: string;
		}
	] = [
		{
			link: 'https://www.linkedin.com/in/pierre-marien',
			icon: undefined,
			alt: 'Linkedin'
		},
		{
			link: 'mailto:contact@pierremarien.be',
			icon: undefined,
			alt: 'Contact me'
		}
	];
</script>

<div class="contact-card">
	{#each links as link (link.link)}
		<div class={link.alt === 'Linkedin' ? 'contact-card__link reversed' : 'contact-card__link'}>
			<a href={link.link} target="_blank">
				{#if link.icon !== undefined}
					<div class="contact-card__link__img">
						<img src={link.icon} alt={link.alt} />
					</div>
				{/if}
			</a>
			<a href={link.link} target="_blank">{link.alt}</a>
		</div>
	{/each}
</div>

<style lang="scss">
	.contact-card {
		@include flex-column;
		gap: 3rem;

		&__link {
			@include flex-center;
			gap: 1rem;

			a {
				color: $primary;
				text-decoration: none;
				font-family: $tertiary-font;
				font-size: 2rem;
				cursor: pointer;
				text-align: left;


				&:hover,
				&:focus,
				&:active {
					color: $tertiary;
				}

				&:visited {
					color: $quaternary;
				}
			}
		}
	}

	.reversed {
		flex-direction: row-reverse;
	}
</style>
