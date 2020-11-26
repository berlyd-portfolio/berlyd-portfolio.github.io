<script lang="ts">
  import { onMount } from "svelte";
  import { check_webp_feature } from "../utils/check_webp";

  import Nav from "../components/Nav.svelte";

  export let segment: string;

  enum PageError {
    null = "",
    webp = "webp",
  }

  let error: PageError = PageError.null;

  onMount(function () {
    check_webp_feature(function (result: boolean) {
      if (!result) {
        error = PageError.webp;
      }
    });
  });
</script>

<style global>
  body {
    overflow-y: scroll;
  }
</style>

{#if error === PageError.null}
  <Nav {segment} />

  <main>
    <slot />
  </main>
{:else if error === PageError.webp}
  <p>WebP support is required to view this page.</p>
  <p>
    For more information, visit
    <a
      href="https://developers.google.com/speed/webp/faq">developers.google.com/speed/webp/faq</a>.
  </p>
{/if}
