<script lang="ts">
  export let src: string;
  export let alt: string;
  export let opacity: number = 1;
  export let onload: () => void;
</script>

<style>
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: opacity 0.5s ease-in-out;
  }
</style>

<img {src} {alt} style="opacity: {opacity}" on:load={onload} />
