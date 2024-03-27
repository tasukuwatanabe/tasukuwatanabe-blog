<template>
  <div class="min-h-screen">
    <Header />
    <main class="mt-16 max-w-5xl mx-auto py-12 px-5 grid md:grid-cols-baseLayout gap-4">
      <div class="hidden md:block">
        <div class="fixed">
          <NavMenu />
        </div>
      </div>
      <slot />
    </main>
  </div>
</template>
