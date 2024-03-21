<template>
  <div @click="toggleColorMode" class="text-slate-700 dark:text-slate-200 hover:cursor-pointer">
    <Icon
      v-if="colorMode.preference === 'dark'"
      name="material-symbols:clear-day-rounded"
      size="2em"
    />
    <Icon v-else name="material-symbols:night-sight-max" size="2em" />
  </div>
</template>

<script setup>
const colorMode = useColorMode();

const toggleColorMode = () => {
  if (colorMode.preference === "light") {
    colorMode.preference = "dark";
    } else {
    colorMode.preference = "light";
  }
}
</script>