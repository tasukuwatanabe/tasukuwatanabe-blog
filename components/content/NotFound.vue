<template>
  <div>
    <p class="text-xl">お探しのページは見つかりませんでした</p>
    <BackToTop />
  </div>
</template>

<script setup>
const event = useRequestEvent()

if (event) {
  setResponseStatus(event, 404, 'Page Not Found');
}
</script>