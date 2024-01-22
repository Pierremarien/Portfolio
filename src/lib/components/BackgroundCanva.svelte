<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { scrollPosition } from '$lib/stores/scrollStore';

	let canvas: HTMLCanvasElement;
	let context: CanvasRenderingContext2D | null;
	let animationFrameId: number;
	let triangleAnimationProgress: number = 0;
	let scrollAnimationState: number = 0;

	const raf =
		typeof window !== 'undefined'
			? window.requestAnimationFrame
			: (callback: FrameRequestCallback) => setTimeout(callback, 1000 / 60);
	const caf = typeof window !== 'undefined' ? window.cancelAnimationFrame : clearTimeout;

	interface Line {
		startX: number;
		startY: number;
		endX: number;
		endY: number;
	}

	const drawDiagonal = (baseAtTop: boolean, translation: number, progress: number): Line => {
		const line: Line = {
			startX: 0,
			startY: 0,
			endX: 0,
			endY: 0
		};

		if (baseAtTop) {
			line.startX = translation;
			line.startY = 0;
			line.endX = translation + (progress * canvas.width) / 2;
			line.endY = progress * canvas.height;
		} else {
			line.startX = translation;
			line.startY = canvas.height;
			line.endX = translation + (progress * canvas.width) / 2;
			line.endY = canvas.height - progress * canvas.height;
		}

		context!.beginPath();
		context!.moveTo(line.startX, line.startY);
		context!.lineTo(line.endX, line.endY);
		context!.stroke();

		return line;
	};

	const drawDiagonals = (progress: number): Line[] => {
		const lines: Line[] = [];

		lines.push(drawDiagonal(false, 0, progress));
		lines.push(drawDiagonal(false, 0.25 * canvas.width, progress));
		lines.push(drawDiagonal(false, 0.75 * canvas.width, progress));
		lines.push(drawDiagonal(false, 0.5 * canvas.width, progress));
		lines.push(drawDiagonal(false, -0.25 * canvas.width, progress));

		lines.push(drawDiagonal(true, 0, progress));
		lines.push(drawDiagonal(true, 0.5 * canvas.width, progress));
		lines.push(drawDiagonal(true, 0.75 * canvas.width, progress));
		lines.push(drawDiagonal(true, 0.25 * canvas.width, progress));
		lines.push(drawDiagonal(true, -0.25 * canvas.width, progress));

		return lines;
	};

	const drawHorizontalLine = (progress: number, y: number, reversed: boolean) => {
		context!.beginPath();
		if (reversed) {
			context!.moveTo(canvas.width, canvas.height * y);
			context!.lineTo(canvas.width - progress * canvas.width, canvas.height * y);
		} else {
			context!.moveTo(0, canvas.height * y);
			context!.lineTo(progress * canvas.width, canvas.height * y);
		}
		context!.stroke();
	};

	const drawHorizontalLines = (progress: number) => {
		drawHorizontalLine(progress, 0.25, true);
		drawHorizontalLine(progress, 0.5, false);
		drawHorizontalLine(progress, 0.75, true);
	};

	const drawVerticalLine = (progress: number, x: number, reversed: boolean) => {
		context!.beginPath();
		if (reversed) {
			context!.moveTo(canvas.width * x, canvas.height);
			context!.lineTo(canvas.width * x, canvas.height - progress * canvas.height);
		} else {
			context!.moveTo(canvas.width * x, 0);
			context!.lineTo(canvas.width * x, progress * canvas.height);
		}
		context!.stroke();
	};

	const drawVerticalLines = (progress: number) => {
		drawVerticalLine(progress, 0.125, false);
		drawVerticalLine(progress, 0.25, true);
		drawVerticalLine(progress, 0.375, false);
		drawVerticalLine(progress, 0.5, true);
		drawVerticalLine(progress, 0.625, false);
		drawVerticalLine(progress, 0.75, true);
		7;
		drawVerticalLine(progress, 0.875, false);
	};

	let maxScrollProgress = 0;
	let previousScrollAnimationState = 0;

	let draw = function () {
		context!.clearRect(0, 0, canvas.width, canvas.height);

		if (triangleAnimationProgress < 1) {
			triangleAnimationProgress += 0.01;
			drawDiagonals(triangleAnimationProgress);
			raf(draw);
		} else {
			drawDiagonals(1);

			const scrollProgress = Math.min(1, scrollAnimationState / canvas.height);
			if (
				scrollAnimationState < previousScrollAnimationState &&
				scrollProgress < maxScrollProgress
			) {
				maxScrollProgress = scrollProgress;
			} else {
				maxScrollProgress = Math.max(maxScrollProgress, scrollProgress);
			}
			if (maxScrollProgress > 0) {
				drawHorizontalLines(maxScrollProgress);
			}

			const verticalScrollProgress = Math.max(
				0,
				Math.min(1, (scrollAnimationState - canvas.height) / canvas.height)
			);
			if (verticalScrollProgress > 0) {
				drawVerticalLines(verticalScrollProgress);
			}

			previousScrollAnimationState = scrollAnimationState;
			raf(draw);
		}
	};

	const handleResize = () => {
		if (typeof window !== 'undefined') {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			context!.strokeStyle = '#5d5d81';
			context!.globalAlpha = 0.6;
		}
	};

	const unsubscribe = scrollPosition.subscribe((value) => {
		scrollAnimationState = value;
	});

	onMount(() => {
		if (typeof window !== 'undefined') {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}

		context = canvas.getContext('2d');
		context!.strokeStyle = '#5d5d81';
		context!.globalAlpha = 0.6;

		animationFrameId = raf(draw);

		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleResize);
		}
	});

	onDestroy(() => {
		unsubscribe();
		caf(animationFrameId);

		if (typeof window !== 'undefined') {
			window.removeEventListener('resize', handleResize);
		}
	});
</script>

<div class="container">
	<canvas bind:this={canvas}></canvas>
</div>

<style lang="scss">
	.container {
		width: 100%;
		height: 100vh;
		box-sizing: border-box;
		display: grid;
		justify-items: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		pointer-events: none;
		z-index: -1;
	}
</style>
