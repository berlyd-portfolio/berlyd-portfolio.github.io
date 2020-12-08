<script lang="ts">
  import { onMount } from "svelte";
  import { cubicInOut } from "svelte/easing";

  import Img from "../components/Img.svelte";
  import Loader from "../components/Loader.svelte";
  import { get_webp_support } from "../utils/store";

  let right_hovered = false;
  let left_hovered = false;

  let exiting = false;

  let loaded_count = 0;
  const loaded_target = 2;
  let loader_display = false;

  onMount(function () {
    const webp_support = get_webp_support();
    let left_img = new Image();
    left_img.addEventListener("load", function () {
      loaded_count += 1;
    });
    if (webp_support) {
      left_img.src = "artwork/hidden_season_scaled.webp";
    } else {
      left_img.src = "artwork/hidden_season_scaled.png";
    }

    let right_img = new Image();
    right_img.addEventListener("load", function () {
      loaded_count += 1;
    });
    if (webp_support) {
      right_img.src = "artwork/pelton_gaming_scaled.webp";
    } else {
      right_img.src = "artwork/pelton_gaming_scaled.png";
    }

    setTimeout(function () {
      if (loaded_count != loaded_target) {
        console.log("starting loader");
        loader_display = true;
      }
    }, 500);
  });

  function slideRight(node, { delay = 0, duration = 500 }) {
    return {
      delay,
      duration,
      easing: cubicInOut,
      css: (t: number) => `transform: translateX(${(1 - t) * 100}%)`,
    };
  }

  function slideLeft(node, { delay = 0, duration = 500 }) {
    return {
      delay,
      duration,
      easing: cubicInOut,
      css: (t: number) => `transform: translateX(-${(1 - t) * 100}%)`,
    };
  }

  function enter(id: string) {
    if (!exiting) {
      if (id === "right") {
        right_hovered = true;
      } else if (id === "left") {
        left_hovered = true;
      }
    }
  }

  function leave(id: string) {
    if (!exiting) {
      if (id === "right") {
        right_hovered = false;
      } else if (id === "left") {
        left_hovered = false;
      }
    }
  }
</script>

<style>
  .inner-card {
    @apply overflow-hidden relative h-full transition-all duration-500 ease-in-out;
  }

  .active {
    width: calc(65vw - 10px);
    box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2),
      0px 15px 22px 2px rgba(0, 0, 0, 0.14),
      0px 6px 28px 5px rgba(0, 0, 0, 0.12);
  }

  .normal {
    width: calc(50vw - 10px);
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  .inactive {
    width: calc(35vw - 10px);
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  .btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
  }
</style>

<svelte:head>
  <title>Berly Dai Portfolio</title>
</svelte:head>

<main class="w-full overflow-hidden" style="height: calc(100vh - 5.5rem)">
  {#if loader_display}
    <Loader />
  {/if}
  <div class="flex h-full w-full pb-4">
    <div
      id="left"
      class="pr-2"
      on:mouseenter={function () {
        enter('left');
      }}
      on:mouseleave={function () {
        leave('left');
      }}>
      {#if loaded_target === loaded_count}
        <div
          class="inner-card rounded-r-2xl"
          class:active={left_hovered}
          class:normal={!right_hovered && !left_hovered}
          class:inactive={right_hovered}
          transition:slideLeft>
          <Img
            src="artwork/hidden_season_scaled"
            alt="Hidden Season"
            opacity={left_hovered ? 0.6 : 1} />
          <a
            type="button"
            class="btn btn-outline-primary"
            hidden={!left_hovered}
            href="left">Primary</a>
        </div>
      {/if}
    </div>
    <div
      id="right"
      class="pl-2"
      on:mouseenter={function () {
        enter('right');
      }}
      on:mouseleave={function () {
        leave('right');
      }}>
      {#if loaded_target === loaded_count}
        <div
          class="inner-card rounded-l-2xl"
          class:active={right_hovered}
          class:normal={!right_hovered && !left_hovered}
          class:inactive={left_hovered}
          transition:slideRight>
          <Img
            src="artwork/pelton_gaming_scaled"
            alt="Pelton Gaming"
            opacity={right_hovered ? 0.6 : 1} />
          <a
            type="button"
            class="btn btn-outline-primary"
            hidden={!right_hovered}
            href="right">Primary</a>
        </div>
      {/if}
    </div>
  </div>
</main>
