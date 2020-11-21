<script lang="ts">
  export let segment: string;
</script>

<style>
  nav {
    font-weight: 300;
    padding: 0 1em;
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
</style>

<nav>
  <div class="table">
    <ul>
      <li>
        <a
          aria-current={segment === undefined ? 'page' : undefined}
          href=".">home</a>
      </li>
      <li>
        <a
          aria-current={segment === 'about' ? 'page' : undefined}
          href="about">gallery</a>
      </li>

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <li>
        <a
          rel="prefetch"
          aria-current={segment === 'blog' ? 'page' : undefined}
          href="blog">blog</a>
      </li>
    </ul>
  </div>
</nav>
