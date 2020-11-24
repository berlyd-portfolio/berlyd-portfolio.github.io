<script lang="ts">
  import { onMount } from "svelte";
  import Image from "../components/Image.svelte";

  onMount(function () {
    load_animation();
  });

  let right_hovered = false;
  let left_hovered = false;
  let exiting = false;
  let entering = true;

  function enter(id: string) {
    if (!exiting && !entering) {
      if (id === "right") {
        right_hovered = true;
      } else if (id === "left") {
        left_hovered = true;
      }
    }
  }

  function leave(id: string) {
    if (!exiting && !entering) {
      if (id === "right") {
        right_hovered = false;
      } else if (id === "left") {
        left_hovered = false;
      }
    }
  }

  function navigate(url: string) {
    exiting = true;
    document.getElementById("left-inner").style.transform = "translateX(-100%)";
    document.getElementById("right-inner").style.transform = "translateX(100%)";
    setInterval(function () {
      document.location.href = url;
    }, 500);
  }

  function load_animation() {
    document.getElementById("left-inner").style.animation =
      "slideInFromLeft 0.5s ease-out";
    document.getElementById("right-inner").style.animation =
      "slideInFromRight 0.5s ease-out";
    setInterval(function () {
      entering = false;
    }, 500);
  }
</script>

<style>
  main {
    width: 100%;
    height: calc(100vh - 48px - 2em);
    overflow: hidden;
  }

  #card-container {
    display: flex;
    width: 100%;
    height: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 0px;
    padding-right: 0px;
  }

  .poster-card {
    height: calc(100% - 20px);
  }

  .inner-card {
    transition: width 0.5s ease-in-out, box-shadow 0.5s ease-in-out,
      transform 0.5s ease-in;
    height: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 0;
    margin-right: 0;
    overflow: hidden;
    position: relative;
    left: 0;
  }

  #left-inner.card-enter {
    transform: translateX(-100%);
  }

  #right-inner.card-enter {
    transform: translateX(100%);
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

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  #left {
    padding-right: 10px;
  }

  #left-inner {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  #right {
    padding-left: 10px;
  }

  #right-inner {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
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

<main>
  <div id="card-container">
    <div
      id="left"
      class="poster-card"
      on:mouseenter={function () {
        enter('left');
      }}
      on:mouseleave={function () {
        leave('left');
      }}>
      <div
        class="inner-card"
        id="left-inner"
        class:active={left_hovered}
        class:normal={!right_hovered && !left_hovered}
        class:inactive={right_hovered}
        class:card-enter={entering}>
        <Image
          src="artwork/hidden_season.png"
          alt="Hidden Season"
          opacity={left_hovered ? 0.6 : 1} />
        <button
          type="button"
          class="btn btn-outline-primary"
          hidden={!left_hovered}
          on:click={function () {
            navigate('left');
          }}>Primary</button>
      </div>
    </div>
    <div
      id="right"
      class="poster-card"
      on:mouseenter={function () {
        enter('right');
      }}
      on:mouseleave={function () {
        leave('right');
      }}>
      <div
        class="inner-card"
        id="right-inner"
        class:active={right_hovered}
        class:normal={!right_hovered && !left_hovered}
        class:inactive={left_hovered}
        class:card-enter={entering}>
        <Image
          src="artwork/pelton_gaming.png"
          alt="Pelton Gaming"
          opacity={right_hovered ? 0.6 : 1} />
        <button
          type="button"
          class="btn btn-outline-primary"
          hidden={!right_hovered}
          on:click={function () {
            navigate('right');
          }}>Primary</button>
      </div>
    </div>
  </div>
</main>
