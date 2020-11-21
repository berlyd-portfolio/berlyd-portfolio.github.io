<script lang="ts">
  export let img: string;
  let hovering: boolean;

  function enter() {
    hovering = true;
  }

  function leave() {
    hovering = false;
  }
</script>

<style>
  #card {
    transition: flex-grow 0.5s ease-in-out, box-shadow 0.5s ease-in-out,
      opacity 0.5s ease-in-out;
    margin: 10px;
    border-radius: 15px;
    height: calc(100% - 20px);
    overflow: hidden;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .active {
    flex-grow: 2;
    box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2),
      0px 15px 22px 2px rgba(0, 0, 0, 0.14),
      0px 6px 28px 5px rgba(0, 0, 0, 0.12);
    opacity: 0.6;
  }

  .inactive {
    flex-grow: 1;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
</style>

<div
  id="card"
  on:mouseenter={enter}
  on:mouseleave={leave}
  class:active={hovering}
  class:inactive={!hovering}
  style="background-image: url({img})" />
