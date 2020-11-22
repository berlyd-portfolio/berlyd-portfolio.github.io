<script lang="ts">
  import CoverPoster from "../components/CoverPoster.svelte";
</script>

<style>
  * {
    box-sizing: border-box;
  }

  main {
    width: 100%;
    height: calc(100vh - 48px - 2em);
  }

  #card-container {
    display: flex;
    width: 100%;
    height: 100%;
    flex-flow: row wrap;
    align-items: stretch;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 0px;
    padding-right: 0px;
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<main>
  <div id="card-container">
    <CoverPoster img="../artwork/hidden_season.png" direction="left" />
    <CoverPoster img="./artwork/pelton_gaming.png" direction="right" />
  </div>
</main>
