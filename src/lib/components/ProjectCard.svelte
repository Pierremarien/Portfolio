<script lang="ts">
	export let project = {
		project: '',
		description: '',
		img: ''
	};

	let clicked: boolean = false;
	function handleClick(): void {
		clicked = !clicked;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="project-card" on:click={handleClick} class:clicked role="button" tabindex="0">
	<img src={project.img} alt={project.project} />
	<div class="project-card__description">
		<h3>{project.project}</h3>
		<p>
			{project.description}
		</p>
		<a class="project-card_description__link" href={project.project}>Read more ...</a>
	</div>
</div>

<style lang="scss">
	.project-card {
		width: 300px;
		height: 530px;
		position: relative;
		scroll-snap-align: center;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			z-index: 1;
		}

		&__description {
			opacity: 0;
			visibility: hidden;
			position: absolute;
			top: 8px;
			left: 16px;
			z-index: 2;
			transition: opacity 0.3s ease;

			h3 {
				color: $quinary;
			}
		}

		&:hover {
			cursor: pointer;
			.project-card__description {
				opacity: 1;
				visibility: visible;

				h3 {
					color: $quinary;
				}
				p,
				a {
					visibility: hidden;
				}
			}
		}
		&.clicked {
			.project-card__description {
				opacity: 1;
				visibility: visible;
				top: 0;
				left: 0;
				background-color: $quinary;
				width: inherit;
				height: inherit;
				border: 1px solid $primary;
				color: $primary;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding: 2rem;

				h3 {
					color: $primary;
				}

				&:hover p,
				a {
					visibility: visible;
				}

				a {
					color: $primary;
					text-decoration: none;
					text-align: right;
					cursor: pointer;

					&:hover {
						color: $secondary;
					}

					&:visited {
						color: $quaternary;
					}
				}
			}
		}
	}
</style>
