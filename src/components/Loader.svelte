<!-- Code adapted from https://codepen.io/rafaelavlucas/pen/gOOGLgz as of 11/24/2020 -->
<script>
  import { fade } from "svelte/transition";
</script>

<style>
  .loading {
    @apply w-16 h-12 fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
  }

  .loading p {
    @apply top-0 p-0 m-0 text-xs tracking-wide;
    color: #5389a6;
    animation: text 3.5s ease both infinite;
  }

  @keyframes text {
    0% {
      letter-spacing: 1px;
      transform: translateX(0px);
    }

    40% {
      letter-spacing: 2px;
      transform: translateX(26px);
    }

    80% {
      letter-spacing: 1px;
      transform: translateX(32px);
    }

    90% {
      letter-spacing: 2px;
      transform: translateX(0px);
    }

    100% {
      letter-spacing: 1px;
      transform: translateX(0px);
    }
  }

  .loading span {
    @apply rounded-full block h-4 w-4 bottom-0 absolute;
    background-color: #5389a6;
    transform: translateX(64px);
    animation: loading 3.5s ease both infinite;
  }

  .loading span:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: #a6dcee;
    border-radius: inherit;
    animation: loading2 3.5s ease both infinite;
  }

  @keyframes loading {
    0% {
      width: 16px;
      transform: translateX(0px);
    }

    40% {
      width: 100%;
      transform: translateX(0px);
    }

    80% {
      width: 16px;
      transform: translateX(64px);
    }

    90% {
      width: 100%;
      transform: translateX(0px);
    }

    100% {
      width: 16px;
      transform: translateX(0px);
    }
  }

  @keyframes loading2 {
    0% {
      transform: translateX(0px);
      width: 16px;
    }

    40% {
      transform: translateX(0%);
      width: 80%;
    }

    80% {
      width: 100%;
      transform: translateX(0px);
    }

    90% {
      width: 80%;
      transform: translateX(15px);
    }

    100% {
      transform: translateX(0px);
      width: 16px;
    }
  }
</style>

<div class="loading" transition:fade>
  <p>loading</p>
  <span />
</div>
