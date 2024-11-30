/** @type {import('tailwindcss').Config} */
import { contentPath, skeleton } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        contentPath(import.meta.url, "svelte"),
    ],
    theme: {
        extend: {},
    },
    plugins: [skeleton({
        themes: [themes.modern],
    })],
};
