<script lang="ts">
  import Icon, { type IconifyIcon } from "@iconify/svelte";
  import { roundIconButtonClass } from "./style";

  export let icon: IconifyIcon;
</script>

<button class={roundIconButtonClass} on:click
  ><Icon {icon} width="26" height="26" /></button
>
