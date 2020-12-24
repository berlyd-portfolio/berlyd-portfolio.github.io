<script lang="typescript">
  import { onMount } from "svelte";
  import { quintInOut } from "svelte/easing";

  let cover: HTMLElement;
  let container: HTMLElement;
  let hi: HTMLElement;
  let content: HTMLElement;
  let iam: HTMLElement;
  let content_child: HTMLElement;

  onMount(function () {
    requestAnimationFrame(fade_in);
  });

  let fade_in_start: number;
  function fade_in(timestamp: number) {
    if (fade_in_start === undefined) {
      fade_in_start = timestamp;
    }
    const duration = 1000;
    const elapsed = timestamp - fade_in_start;

    const progress = quintInOut(elapsed / duration);
    hi.style.opacity = `${progress}`;
    iam.style.opacity = `${progress}`;
    content.style.opacity = `${progress}`;

    if (elapsed < duration) {
      requestAnimationFrame(fade_in);
    } else {
      // Start fade out after 500
      setTimeout(function () {
        requestAnimationFrame(fade_out);
      }, 300);
    }
  }

  let fade_out_start: number;
  let text_expand_started = false;
  function fade_out(timestamp: number) {
    if (fade_out_start === undefined) {
      fade_out_start = timestamp;
    }
    const duration = 1000;
    const elapsed = timestamp - fade_out_start;

    const progress = quintInOut(elapsed / duration);
    hi.style.opacity = `${1 - progress}`;
    content.style.opacity = `${1 - progress}`;

    if (elapsed > duration * 0.7 && !text_expand_started) {
      // Start text transition
      text_expand_started = true;
      content.style.width = content.scrollWidth + "px";
      content_original_width = content.scrollWidth;
      hi_original_width = hi.scrollWidth;
      content_child.innerText = "a designer, creator, and life lover.";
      requestAnimationFrame(text_exapnd);
    }
    if (elapsed < duration) {
      requestAnimationFrame(fade_out);
    }
  }

  let text_expand_start: number;
  let content_original_width: number;
  let hi_original_width: number;
  function text_exapnd(timestamp: number) {
    if (text_expand_start === undefined) {
      text_expand_start = timestamp;
    }
    const duration = 1000;
    const elapsed = timestamp - text_expand_start;

    const progress = quintInOut(elapsed / duration);
    content.style.opacity = `${progress}`;
    content.style.width = `${
      content_original_width +
      progress * (content.scrollWidth - content_original_width)
    }px`;
    hi.style.width = `${(1 - progress) * hi_original_width}px`;

    if (elapsed < duration) {
      requestAnimationFrame(text_exapnd);
    } else {
      requestAnimationFrame(transition_to_main);
    }
  }

  let transition_to_main_start: number;
  let container_original_height: number;
  function transition_to_main(timestamp: number) {
    if (transition_to_main_start === undefined) {
      transition_to_main_start = timestamp;
      container_original_height = container.offsetHeight;
    }
    const duration = 1500;
    const elapsed = timestamp - transition_to_main_start;
    const target_height = 7;
    const target_fontsize = 1.5;

    console.log(container.style.height);

    const progress = quintInOut(elapsed / duration);
    cover.style.opacity = `${1 - progress}`;
    container.style.transform = `translateY(${(progress - 1) * 5.5}rem)`;
    
    container.style.height = `calc(${
      (1 - progress) * container_original_height
    }px + ${progress * target_height}rem)`;
    container.style.fontSize = `${(1 - progress) * 3 + progress * target_fontsize}rem`;

    if (elapsed < duration) {
      requestAnimationFrame(transition_to_main);
    }
  }
</script>

<div class="absolute top-0 left-0 w-full h-24 bg-white" bind:this={cover} />
<div
  class="flex flex-row items-center justify-center w-full h-screen text-5xl"
  style="transform: translateY(-5.5rem)"
  bind:this={container}>
  <div class="opacity-0" bind:this={hi}>Hi,&nbsp;</div>
  <div class="opacity-0" bind:this={iam}>I'm&nbsp;</div>
  <div class="opacity-0 whitespace-nowrap" bind:this={content}>
    <div bind:this={content_child}>Berly.</div>
  </div>
</div>
<div class="w-full h-screen bg-black" />
