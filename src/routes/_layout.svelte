<script lang="typescript">
  import { onMount } from "svelte";

  import Nav from "../components/Nav.svelte";
  import { support_format_webp } from "../utils/check_webp";
  import { set_webp_support } from "../utils/store";

  export let segment: string;

  onMount(function () {
    set_webp_support(support_format_webp());
  });
</script>

<Nav {segment} />

<main>
  <slot />
</main>
