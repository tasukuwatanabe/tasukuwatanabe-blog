<template>
  <div class="prose">
    <p class="text-xl mt-0">お探しのページは見つかりませんでした</p>
    <BackToTop />
  </div>
</template>

<script setup>
const event = useRequestEvent()

if (event) {
  setResponseStatus(event, 404, 'Page Not Found');
}
</script>