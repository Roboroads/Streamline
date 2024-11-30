<script lang="ts">
  import Background from './components/util/Background.svelte';
  import { Pane, PaneGroup } from 'paneforge';
  import DeckPane from './components/Panes/DeckPane.svelte';

  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');
</script>

<svelte:head>
  <title>Streamline</title>
</svelte:head>

<Background />

<div class="w-screen h-screen z-10">
  <PaneGroup direction="vertical">
    <Pane defaultSize={25}>
      <PaneGroup direction="horizontal">
        <Pane defaultSize={50}>
          <DeckPane index={0} />
        </Pane>
        <Pane defaultSize={50}>
          <DeckPane index={1} />
        </Pane>
      </PaneGroup>
    </Pane>
  </PaneGroup>
</div>
