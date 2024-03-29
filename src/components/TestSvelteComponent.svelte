<script lang="ts">
  import homeIcon from "@iconify/icons-lucide/home";
  import libraryIcon from "@iconify/icons-lucide/library";
  import wholeWord from "@iconify/icons-lucide/whole-word";
  import { AppRail, AppRailAnchor, Avatar } from "@skeletonlabs/skeleton";
  import RoundIconButton from "./RoundIconButton.svelte";
</script>

<h1 class="text-3xl font-bold underline">Hahaha</h1>

<AppRail>
  <AppRailAnchor
    title="Home"
    on:click={() => {
      console.log("Home Click");
    }}
  >
    <RoundIconButton icon={homeIcon} />
  </AppRailAnchor>
  <AppRailAnchor
    title="Library"
    on:click={() => {
      console.log("Library Click");
    }}
  >
    <RoundIconButton icon={libraryIcon} />
  </AppRailAnchor>
  <AppRailAnchor
    title="Vocabulary"
    on:click={() => {
      console.log("Vocabulary Click");
    }}
  >
    <RoundIconButton icon={wholeWord} />
  </AppRailAnchor>
</AppRail>
<Avatar
  src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop"
  width="w-32"
  rounded="rounded-full"
/>
