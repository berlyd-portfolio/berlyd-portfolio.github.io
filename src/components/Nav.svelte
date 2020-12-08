<script lang="ts">
  export let segment: string;
</script>

<style>
  a {
    @apply text-black no-underline block;
  }

  .text-link {
    @apply px-2 py-4 block float-left;
  }
</style>

<nav class="m-4">
  <ul class="flex flex-row justify-center items-center relative">
    <li
      class="absolute left-0 top-0 h-full ml-4 inline-flex flex-row items-center">
      <a href="."><img src="logo.png" alt="logo" class="h-12 w-12" /></a>
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
