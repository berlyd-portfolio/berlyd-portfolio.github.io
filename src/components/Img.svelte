<script lang="typescript">
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

<picture class="w-full h-full">
  <source srcset={src + '.webp'} type="image/webp" />
  <source srcset={src + '.png'} type="image/png" />
  <img
    class="object-cover w-full h-full transition-opacity duration-500 ease-in-out"
    src={src + '.png'}
    {alt}
    style="opacity: {opacity}"
    on:load={onload}
    bind:this={img} />
</picture>
