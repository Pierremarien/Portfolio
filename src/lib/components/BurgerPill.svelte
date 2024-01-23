<script lang="ts">
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let canvas: HTMLCanvasElement;
	let context: CanvasRenderingContext2D | null;
	let animationFrameId: number;
	let draw: () => void;
	let isPaused: boolean = false;

	onMount(() => {
		context = canvas.getContext('2d');

		if (!context) {
			throw new Error('Failed to get 2D context');
		} else {
			draw = function () {
				if (isPaused) {
					return;
				}
				context!.clearRect(0, 0, canvas.width, canvas.height);

				context!.lineWidth = 4;

				let amplitude: number = 40;
				let frequency: number = 30;
				let oneWaveLength: number = 2 * Math.PI * frequency;
				let time = Date.now() * 0.1;
				let startX: number = (canvas.width - oneWaveLength) / 2;
				let endX: number = startX + oneWaveLength;
                let points: {x: number, y: number}[] = [];

                for (let x = startX; x < endX; x++) {
                    let y: number = canvas.height / 2 + amplitude * Math.sin((x + time) / frequency);
                    points.push({x, y});
                }

				context!.beginPath();
				context!.moveTo(points[0].x, points[0].y);
                for (let point of points) {
                    context!.lineTo(point.x, point.y);
                }
                context!.stroke();

				animationFrameId = requestAnimationFrame(draw);
			};
			draw();
		}
	});

	onDestroy(() => {
		if (typeof cancelAnimationFrame === 'function') {
			cancelAnimationFrame(animationFrameId);
		}
	});

	const handleClick = () => { 
		dispatch('click');
        isPaused = true;
        setTimeout(() => {
            isPaused = false;
            draw();
        }, 300);
    };
</script>

<button class="container" on:click={handleClick}>
	<canvas bind:this={canvas}></canvas>
</button>

<style lang="scss">
	.container {
		border: none;
		cursor: pointer;
		width: 40px;
		height: 40px;
		border-radius: 100%;
		background-color: $primary;
		@include flex-center;
		transition: scale 0.2s ease-in-out;
		z-index: 20;

		canvas {
		width: 85%;
		height: 85%;
	}

	&:hover {
		scale: 1.1;
	}
	}

	
</style>
