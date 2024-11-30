<script lang="ts">
  let { title = 'Unnamed Pane', children } = $props();
</script>

<section class="flex flex-col rounded overflow-auto m-1 bg-aqua">
  <div class="w-full bg-casal bold text-xs p-1 text-center">{title}</div>
  <div class="w-full p-1 text-black">
    {@render children?.()}
  </div>
</section>
