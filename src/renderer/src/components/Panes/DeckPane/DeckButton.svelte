<script lang="ts">
  import type { Snippet } from 'svelte';

  let { onclick, children }: { onclick?: () => void; children: Snippet } = $props();
</script>

<button
  {onclick}
  class="bg-aqua-700 active:bg-aqua-900 aspect-square flex-center rounded cursor-pointer"
>
  {@render children?.()}
</button>
