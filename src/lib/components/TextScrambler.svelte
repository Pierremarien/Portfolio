<script lang="ts">
    import { onMount } from 'svelte';

    export let text: string = '';
    let scrambledText: string = ' '.repeat(text.length);
    let alphabet: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let scrambleIntervals: number[] = [];

    onMount(() => {
        scrambleText();
    });

    function scrambleText(): void {
        for (let i = 0; i < text.length; i++) {
            scrambleIntervals[i] = setInterval(() => {
                if (alphabet.includes(text[i])) {
                    const randomLetter: string = alphabet[Math.floor(Math.random() * alphabet.length)];
                    scrambledText = scrambledText.substring(0, i) + randomLetter + scrambledText.substring(i + 1);
                }
            },80);
        }

        for (let j = 0; j < text.length; j++) {
            setTimeout(() => unscrambleText(j), j * (1500 / text.length));
        }
    }

    function unscrambleText(i: number): void {
        clearInterval(scrambleIntervals[i]);
        scrambledText = scrambledText.substring(0, i) + text[i] + scrambledText.substring(i + 1);
    }

    $: scrambledText;
</script>

<span>{scrambledText}</span>