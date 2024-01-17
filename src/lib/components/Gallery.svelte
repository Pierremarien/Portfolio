<script lang="ts">
	import cogip from '$lib/assets/cogip.png';
	import cogip2 from '$lib/assets/cogip2.png';
	import cogip3 from '$lib/assets/cogip3.png';
	import cogip4 from '$lib/assets/cogip4.png';
	import cogip6 from '$lib/assets/cogip6.png';
	import { writable, type Writable } from 'svelte/store';

	export let imgs: {
		img: string;
		alt: string;
	}[] = [
		{
			img: cogip,
			alt: 'Cogip'
		},
		{
			img: cogip2,
			alt: 'Cogip'
		},
		{
			img: cogip3,
			alt: 'Cogip'
		},
		{
			img: cogip4,
			alt: 'Cogip'
		},
		{
			img: cogip6,
			alt: 'Cogip'
		}
	];

let currentImage: Writable<typeof Image | null> = writable(null);
</script>

<div class="gallery">
	{#each imgs as img, i (img.img)}
		<div class="gallery__img" role="dialog" on:click={() => currentImage.set(img)}>
			<img src={img.img} alt={img.alt} />
		</div>
	{/each}

	{#if $currentImage}
		<div class="modal" role="dialog" on:click={() => currentImage.set(null)}>
			<img src={$currentImage.img} alt={$currentImage.alt} />
		</div>
	{/if}
</div>

<style lang="scss">
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		grid-auto-rows: min-content;
		gap: 1rem;
		justify-items: center;
		align-items: center;
		width: 100%;
		height: 100%;
		max-width: 1200px;

		&__img {
			width: 100%;
			height: 100%;
			transition: all 0.2s ease-in-out;
			cursor: pointer;

			img {
				width: 100%;
				aspect-ratio: 1/1;
				object-fit: cover;
				object-position: left;
			}

			&:hover {
				transform: scale(1.03);
			}

			@media (min-width: 40rem) {
				&:first-child {
					grid-row: span 2;
					grid-column: span 2;
				}
			}
		}
	}

	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
        z-index: 1000;

		img {
			max-width: 90%;
			max-height: 90%;
		}
	}
</style>
