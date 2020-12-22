<script lang="typescript">
  export let segment: string;
</script>

<style lang="postcss">
  @layer components {
    .text-link {
      @apply px-2 py-4 block float-left;
    }
    .text-link a {
      @apply text-black no-underline block;
    }
  }
</style>

<nav class="m-4">
  <ul class="relative flex flex-row items-center justify-center">
    <li
      class="absolute top-0 left-0 inline-flex flex-row items-center h-full ml-4">
      <a href="."><img src="logo.png" alt="logo" class="w-12 h-12" /></a>
    </li>
    <div>
      <li class="text-link">
        <a class:font-bold={segment === undefined} href=".">home</a>
      </li>
      <li class="text-link">
        <a class:font-bold={segment === 'gallery'} href="gallery">gallery</a>
      </li>
      <li class="text-link">
        <a class:font-bold={segment === 'resume'} href="resume">resume</a>
      </li>
    </div>
  </ul>
</nav>
