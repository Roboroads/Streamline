<script lang="ts">
  let { volume = 0 }: { volume: number } = $props();

  let negativeVolume = $derived(100 - volume);
</script>

<div class="volume-meter w-2 h-full relative">
  <div
    class="absolute bg-black opacity-75 w-full h-full top-0 left-0"
    style="height: {negativeVolume}%"
  ></div>
</div>

<style lang="postcss">
  .volume-meter {
    background: rgb(0, 255, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 255, 0, 1) 0%,
      rgba(0, 255, 0, 1) 77%,
      rgba(255, 102, 0, 1) 80%,
      rgba(255, 102, 0, 1) 87%,
      rgba(255, 0, 0, 1) 90%,
      rgba(255, 0, 0, 1) 100%
    );
  }
</style>
