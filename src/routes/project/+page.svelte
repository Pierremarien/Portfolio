<script lang="ts">
	import { Gallery } from '$lib';
</script>

<div class="container">
	<Gallery />
</div>

<style lang="scss">
	.container {
		@include flex-center;
		width: 100%;
		height: 100vh;
		gap: 20%;
	}
</style>
