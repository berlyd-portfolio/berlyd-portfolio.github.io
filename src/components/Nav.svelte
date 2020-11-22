<script lang="ts">
  export let segment: string;
</script>

<style>
  nav {
    font-weight: 300;
    padding: 0 1em;
    padding-top: 1em;
    flex: 0 1 auto;
  }

  .table {
    display: table;
    margin: 0 auto;
  }

  ul {
    text-align: center;
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: 0.5em;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  #logo {
    margin-left: 2em;
  }

  #logo a {
    padding: 0.5em;
  }
</style>

<nav>
  <ul>
    <li id="logo">
      <a href="."><img
          src="logo.png"
          alt="logo"
          height="42px"
          width="42px" /></a>
    </li>
    <div class="table">
      <li>
        <a
          aria-current={segment === undefined ? 'page' : undefined}
          href=".">home</a>
      </li>
      <li>
        <a
          aria-current={segment === 'gallery' ? 'page' : undefined}
          href="gallery">gallery</a>
      </li>

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <li>
        <a
          rel="prefetch"
          aria-current={segment === 'resume' ? 'page' : undefined}
          href="resume">resume</a>
      </li>
    </div>
  </ul>
</nav>
