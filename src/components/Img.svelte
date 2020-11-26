<script lang="ts">
  import { onMount } from "svelte";

  export let src: string;
  export let alt: string;
  export let opacity: number = 1;
  export let onload = () => {};

  let img: HTMLImageElement;

  onMount(function () {
    if (img.complete) {
      onload();
    }
  });
</script>

<style>
  picture {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.5s ease-in-out;
  }
</style>

<picture>
  <source srcset={src + '.webp'} type="image/webp" />
  <source srcset={src + '.png'} type="image/png" />
  <img
    src={src + '.png'}
    {alt}
    style="opacity: {opacity}"
    on:load={onload}
    bind:this={img} />
</picture>
