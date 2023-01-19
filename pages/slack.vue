<template>
  <div
      class="leading-5 text-black border-0 border-gray-200 border-solid"
  >
    <section
        class="flex flex-col hero text-black bg-no-repeat bg-cover border-0 border-gray-200 border-solid"
    >
      <hero-banner title="LaravelUK Slack" subtext="Join the UK's Premier Laravel Slack Community"></hero-banner>
    </section>

    <article
        class="block p-12 mx-auto w-full leading-5 text-black bg-white border-0 border-solid border-zinc-200"
    >
      <div
          class="flex flex-col justify-center items-center leading-5 text-center text-black bg-white border-0 border-solid border-zinc-200"
      >
        <div
            class="mx-auto mt-4 mb-8 w-full leading-5 text-black border-0 border-solid md:max-w-screen-md border-zinc-200"
        >
          <div
              class="p-8 my-8 mx-auto text-black bg-white rounded border border-solid sm:w-full md:w-full md:pt-0 lg:w-1/2 border-slate-300"
          >
            <div class="text-center border-0 border-solid border-zinc-200">
              <div
                  class="inline-block p-0 mb-8 bg-white rounded border border-solid md:-mt-7 border-slate-300"
              >
                <img
                    src="~/assets/images/Slack-mark-RGB.png"
                    alt="Slack"
                    class="w-24 p-3 max-w-full h-24 border-0 border-solid border-zinc-200"
                />
              </div>
            </div>
            <p
                class="mx-0 mt-0 mb-6 font-light leading-normal text-left text-gray-700 border-0 border-solid md:text-xl border-zinc-200"
            >
              To join the LaravelUK Slack community you can request an invite by
              submitting your email address below.
            </p>
          </div>
        </div>

      </div>
    </article>
  </div>
</template>

<script>
definePageMeta({
  title: 'Slack',
  name: 'Slack',
  path: '/slack'
})
</script>