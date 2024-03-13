<template>
  <div class="min-h-screen flex flex-col">
    <header class="grid-rows-subgrid flex border-b">
      <div class="container mx-auto py-2 px-5">
        <NuxtLink to="/" class="flex items-center gap-x-3">
          <img
            src="/assets/img/profile.jpg"
            class="w-10 h-10 rounded-full"
            alt="Tasuku Watanabe"
          />
          <h1 class="text-l font-semibold">Tasuku Watanabe</h1>
        </NuxtLink>
      </div>
    </header>
    <main class="bg-slate-100 grow pt-16">
      <div class="container mx-auto px-5 grid grid-cols-4">
        <sidebar>
          <ul class="grid gap-7">
            <li><NuxtLink to="/about">自己紹介</NuxtLink></li>
            <li>
              <p class="mb-5">カテゴリー</p>
              <ul class="grid gap-3 pl-3">
                <li><NuxtLink to="#">技術記事</NuxtLink></li>
                <li><NuxtLink to="#">オンライン留学</NuxtLink></li>
              </ul>
            </li>
          </ul>
        </sidebar>
        <div class="">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>
