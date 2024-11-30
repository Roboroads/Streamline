<script lang="ts">
  import Pane from './Pane.svelte';
  import logo from '$assets/logo.svg';
  import RangeSlider from 'svelte-range-slider-pips';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import {
    faArrowUpRightDots,
    faEject,
    faForwardStep,
    faPause,
    faPlay,
    faStop
  } from '@fortawesome/free-solid-svg-icons';
  import DeckButton from './DeckPane/DeckButton.svelte';
  import VolumeMeter from './DeckPane/VolumeMeter.svelte';

  let { index: deckIndex = 0 }: { index: number } = $props();
  let deckLetter = $derived(String.fromCharCode(65 + deckIndex));

  let image: string = null;

  let volume = $state(100);
  let songLenght = $state(0);
  let songProgress = $state(0);
  let volumeLeft = $state(0);
  let volumeRight = $state(0);
  let playing = $state(false);
</script>

<Pane title={`Deck ${deckLetter}`}>
  <div class="grid gap-1 deck-grid">
    <div class="col-span-4 p-1">
      <div class="w-full">
        <i>Idle..</i>
      </div>
    </div>

    <div class="row-span-3 col-start-5 flex-col p-1">
      <div class="text-xs">Vol.</div>
      <div class="h-full volume-slider w-full flex">
        <RangeSlider
          vertical
          bind:value={volume}
          pips
          float
          min={0}
          max={100}
          suffix="%"
          range="min"
        />
      </div>
    </div>

    <div class="row-span-3 col-start-6 p-1 flex justify-between gap-1">
      <VolumeMeter volume={volumeLeft} />
      <VolumeMeter volume={volumeRight} />
    </div>

    <div class="row-span-1 row-start-2 relative">
      <img
        src={image ?? logo}
        alt="Deck {deckLetter} cover image"
        class="object-cover h-full w-full"
      />
    </div>

    <div class="col-span-3 row-span-1 row-start-2 flex items-end flex-end w-full h-full p-1">
      <div class="grid auto-rows-auto grid-cols-5 gap-1 w-full h-full items-end">
        <DeckButton>
          <FontAwesomeIcon icon={playing ? faPause : faPlay} class="h-1/2" />
        </DeckButton>
        <DeckButton>
          <FontAwesomeIcon icon={faStop} class="h-1/2" />
        </DeckButton>
        <DeckButton>
          <FontAwesomeIcon icon={faEject} class="h-1/2" />
        </DeckButton>
        <DeckButton>
          <FontAwesomeIcon icon={faForwardStep} class="h-1/2" />
        </DeckButton>
        <DeckButton>
          <FontAwesomeIcon icon={faArrowUpRightDots} rotation={90} class="h-1/2" />
        </DeckButton>
      </div>
    </div>

    <div class="col-span-4 row-start-3 p-1 w-full flex h-full">
      <RangeSlider
        bind:value={songProgress}
        pips
        float
        min={0}
        max={songLenght}
        range="min"
        first="label"
        last="label"
        formatter={(v) => Math.floor(v / 60) + ':' + (v % 60).toString().padStart(2, '0')}
      />
    </div>
  </div>
</Pane>

<style lang="postcss">
  .deck-grid {
    grid-template-rows: fit-content(25px) max-content max-content;
    grid-template-columns: 1fr 1fr 1fr 1fr max-content max-content;

    > * {
      @apply flex items-center justify-center bg-aqua-600 rounded;
    }
  }

  :global(.rangeSlider) {
    @apply h-full w-full text-xs;
    height: calc(100% - 1.5em);
  }
</style>
