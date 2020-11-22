<script lang="ts">
  let right_hovered = false;
  let left_hovered = false;
  let exiting = false;

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

  function navigate(section: string) {
    exiting = true;
    if (section === "right") {
      document.getElementById("left").style.transform = "translateX(-35vw)";
      document.getElementById("right").style.transform = "translateX(65vw)";
      setInterval(() => {
        redirect("something");
      }, 500);
    } else {
      document.getElementById("left").style.transform = "translateX(-65vw)";
      document.getElementById("right").style.transform = "translateX(35vw)";
      setInterval(() => {
        redirect("something");
      }, 500);
    }
  }

  function redirect(url: string) {
    document.location.href = url;
  }
</script>

<style>
  main {
    width: 100%;
    height: calc(100vh - 48px - 2em);
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
    transition: width 0.5s ease-in-out, box-shadow 0.5s ease-in-out,
      transform 0.5s ease-in;
    margin-top: 10px;
    margin-bottom: 10px;
    height: calc(100% - 20px);
    overflow: hidden;
    position: relative;
  }

  .poster-card::before {
    transition: opacity 0.5s ease-in-out;
    content: "";
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .active {
    width: calc(65vw - 10px);
    box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2),
      0px 15px 22px 2px rgba(0, 0, 0, 0.14),
      0px 6px 28px 5px rgba(0, 0, 0, 0.12);
  }

  .active::before {
    opacity: 0.6;
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

  #left {
    margin-left: 0;
    margin-right: 10px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  #left::before {
    background-image: url(../artwork/hidden_season.png);
  }

  #right {
    margin-right: 0;
    margin-left: 10px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  #right::before {
    background-image: url(../artwork/pelton_gaming.png);
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
      on:mouseenter={() => {
        enter('left');
      }}
      on:mouseleave={() => {
        leave('left');
      }}
      class:active={left_hovered}
      class:normal={!right_hovered && !left_hovered}
      class:inactive={right_hovered}>
      <button
        type="button"
        class="btn btn-outline-primary"
        hidden={!left_hovered}
        on:click={() => {
          navigate('left');
        }}>Primary</button>
    </div>
    <div
      id="right"
      class="poster-card"
      on:mouseenter={() => {
        enter('right');
      }}
      on:mouseleave={() => {
        leave('right');
      }}
      class:active={right_hovered}
      class:normal={!right_hovered && !left_hovered}
      class:inactive={left_hovered}>
      <div class="card-content">
        <button
          type="button"
          class="btn btn-outline-primary"
          hidden={!right_hovered}
          on:click={() => {
            navigate('right');
          }}>Primary</button>
      </div>
    </div>
  </div>
</main>
