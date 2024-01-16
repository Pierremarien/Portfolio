<script lang="ts">
	import linkedin from '$lib/assets/linkedin.png';
	import contact from '$lib/assets/contact.svg';
	export let links: [
		{
			link: string;
			icon: string;
			alt: string;
		},
		{
			link: string;
			icon: string;
			alt: string;
		}
	] = [
		{
			link: 'https://www.linkedin.com/in/pierre-marien',
			icon: linkedin,
			alt: 'Linkedin'
		},
		{
			link: 'mailto:pierremarien29@gmail.com',
			icon: contact,
			alt: 'Send Mail'
		}
	];
</script>

<div class="contact-card">
	{#each links as link (link.link)}
		<div class={link.alt === 'Linkedin' ? 'contact-card__link reversed' : 'contact-card__link'}>
			<div class="contact-card__link__img">
				<img src={link.icon} alt={link.alt} />
			</div>
			<a href={link.link}>{link.alt}</a>
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

                    &:hover, &:focus, &:active {
                        color: $tertiary;
                    }

                    &:visited {
                        color: $quaternary;
                    }
                }

			&__img {
                @include flex-center;
                width: 60px;
                height: 60px;

                

				img {
					width: 100%;
					height: 100%;
					filter: invert(89%);
				}
			}
		}
	}

    .reversed {
        flex-direction: row-reverse;
    }
</style>
