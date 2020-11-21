<script lang="ts">
  import Nav from "../components/Nav.svelte";
  import CoverPoster from "../components/CoverPoster.svelte";

  export let segment: string;
</script>

<style>
  * {
    box-sizing: border-box;
  }

  main {
    width: 100%;
    height: calc(100vh - 4em);
  }

  #card-container {
    display: flex;
    width: 100%;
    height: 100%;
    flex-flow: row wrap;
    align-items: stretch;
    padding: 10px;
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<Nav {segment} />

<main>
  <div id="card-container">
    <CoverPoster img="../artwork/hidden_season.png" />
    <CoverPoster img="./artwork/pelton_gaming.png" />
  </div>
</main>
