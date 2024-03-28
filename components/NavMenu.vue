<template>
  <ul class="grid gap-10 not-prose">
    <li>
      <NuxtLink to="/about" class="font-semibold">自己紹介</NuxtLink>
    </li>
    <li>
      <p class="mb-4 font-semibold">カテゴリー</p>
      <ul class="grid gap-3 pl-4 border-l-2">
        <li><NuxtLink to="/category/technology">技術記事</NuxtLink></li>
      </ul>
    </li>
    <li>
      <p class="mb-4 font-semibold">情報発信</p>
      <ul class="grid gap-3 pl-4 border-l-2">
        <li><NuxtLink to="https://twitter.com/tasuku_web" target="_blank">Twitter</NuxtLink></li>
        <li><NuxtLink to="https://zenn.dev/tasukuwatanabe" target="_blank">Zenn</NuxtLink></li>
        <li>
          <NuxtLink to="https://github.com/tasukuwatanabe" target="_blank"
            >Github</NuxtLink
          >
        </li>
      </ul>
    </li>
  </ul>
</template>
