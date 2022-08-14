import { writable } from "svelte/store";

let indexPage = writable(0);

let isOpenMenu = writable(false);

function selectIndex(page) {
    indexPage.update(n => n = page);
}

function isOpen() {
    let opening;
    isOpenMenu.subscribe(v => {
        opening = v;
    })
    isOpenMenu.update(open => open = !opening);
}

function exposeNab() {
    return {
        selectIndex,
        isOpen,
        indexPage,
        isOpenMenu
    }
}

export let nav = exposeNab();
