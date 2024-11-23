<script lang="js">
  import "../app.css";
  import logo from "$lib/assets/logo.svg";
</script>

<div class="flex items-center justify-center w-screen h-screen pointer-events-none fixed">
  <img src={logo} alt="logo" class="aspect-square w-[50vw] opacity-25" />
</div>

<slot />


<style lang="postcss">
    :global(body) {
      @apply w-screen h-screen fixed;
      background-color: theme(colors.gray.900);
    }
</style>