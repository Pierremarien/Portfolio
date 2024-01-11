<script lang="ts">
    export let links:string [] = [];
    export let icons:string [] = [];
    export let altIcons:string [] = [];
    export let x:string = "_self" || "_blank";
</script>

{#each links as link, i}
<a href={link} class="icobtn" target={x}>
<img src={icons[i]} alt={altIcons[i]} />
</a>
{/each}
<style lang="scss">
	.icobtn {
		width: 38px;
		height: 38px;
		background-color: $secondary;
		border-radius: 2px;
		cursor: pointer;
		-moz-box-shadow:
			rgba(0, 0, 0, 0.57) 0px -23px 25px 0px inset,
			rgba(0, 0, 0, 0.07) 0px -36px 30px 0px inset,
			rgba(0, 0, 0, 0.13) 0px -79px 40px 0px inset;
		-webkit-box-shadow:
			rgba(0, 0, 0, 0.57) 0px -23px 25px 0px inset,
			rgba(0, 0, 0, 0.07) 0px -36px 30px 0px inset,
			rgba(0, 0, 0, 0.13) 0px -79px 40px 0px inset;
		box-shadow:
			rgba(0, 0, 0, 0.57) 0px -23px 25px 0px inset,
			rgba(0, 0, 0, 0.07) 0px -36px 30px 0px inset,
			rgba(0, 0, 0, 0.13) 0px -79px 40px 0px inset;

		img {
			width: 100%;
			height: 100%;
			filter: invert(80%);
		}

		&:hover {
			-moz-box-shadow:
				rgba(0, 0, 0, 0.5) 0px -23px 25px 0px inset,
				rgba(0, 0, 0, 0.04) 0px -36px 30px 0px inset,
				rgba(0, 0, 0, 0.13) 0px -79px 40px 0px inset;
			-webkit-box-shadow:
				rgba(0, 0, 0, 0.5) 0px -23px 25px 0px inset,
				rgba(0, 0, 0, 0.04) 0px -36px 30px 0px inset,
				rgba(0, 0, 0, 0.13) 0px -79px 40px 0px inset;
			box-shadow:
				rgba(0, 0, 0, 0.5) 0px -23px 25px 0px inset,
				rgba(0, 0, 0, 0.04) 0px -36px 30px 0px inset,
				rgba(0, 0, 0, 0.13) 0px -79px 40px 0px inset;
			scale: 1.03;
			img {
				filter: invert(75%);
			}
		}
	}
</style>
