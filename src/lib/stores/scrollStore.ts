import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

export const scrollPosition: Writable<number> = writable(0);

