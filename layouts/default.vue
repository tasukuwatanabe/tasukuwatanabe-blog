<template>
  <div class="min-h-screen flex flex-col">
    <header class="grid-rows-subgrid border-b fixed left-0 right-0 bg-white">
      <div
        class="container max-w-5xl mx-auto py-2 px-5 flex justify-between items-center h-16"
      >
        <NuxtLink to="/" class="flex items-center gap-x-3">
          <img
            src="/assets/img/profile.jpg"
            class="w-10 h-10 rounded-full"
            alt="Tasuku Watanabe"
          />
          <h1 class="text-l font-semibold">Tasuku Watanabe</h1>
        </NuxtLink>
        <div class="block md:hidden">
          <Icon name="solar:hamburger-menu-linear" size="2em" />
        </div>
      </div>
    </header>
    <main class="bg-slate-100 grow py-12 mt-16">
      <div class="container max-w-5xl mx-auto px-5 grid md:grid-cols-4">
        <div class="hidden md:block">
          <sidebar class="fixed">
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
        </div>
        <div class="col-span-3">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>
