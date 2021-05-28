import { writable } from "svelte/store";

export const storeToken = writable(localStorage.getItem("token"));

export const storeUser = writable(null);
