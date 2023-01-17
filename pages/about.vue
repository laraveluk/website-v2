<template>
  <div
      class="leading-5 text-black border-0 border-gray-200 border-solid"
  >
    <section
        class="flex flex-col hero text-black bg-no-repeat bg-cover border-0 border-gray-200 border-solid"
    >
      <hero-banner title="About LaravelUK" subtext='"Everybody Teaches, Everybody Learns"'></hero-banner>
    </section>

    <article
        class="block p-12 mx-auto w-full leading-5 text-black bg-white border-0 border-solid border-zinc-200"
    >
      <div
          class="flex flex-col justify-center items-center leading-5 text-center text-black bg-white border-0 border-solid border-zinc-200"
      >
      <div
          class="font-light leading-normal text-left text-gray-700 border-0 border-solid md:w-2/3 md:px-12 md:text-xl border-zinc-200"
      >
        <h2
            class="mx-0 mt-0 mb-2 text-2xl font-bold border-0 border-solid md:text-left md:text-3xl border-zinc-200 text-slate-800"
            style="line-height: 45px;"
        >
          Our Story
        </h2>
        <h3
            class="mx-0 mt-0 mb-8 text-lg font-bold text-left text-gray-500 border-0 border-solid md:text-xl border-zinc-200"
        >
          LaravelUK is the brainchild of community owner and founder member Barry,
          better known in the LaravelUK community as
          <a
              class="text-xl leading-7 bg-transparent border-0 border-solid border-zinc-200 text-slate-800"
              style="text-decoration: none;"
          >@symfonycoda</a
          >.
        </h3>
        <p
            class="mx-0 mt-0 mb-6 text-xl leading-7 text-gray-700 border-0 border-solid border-zinc-200"
        >
          Started in Feb 2017, LaravelUK soon began to grow and gain momentum, with an
          excellent reputation by word-of-mouth. Inside the Slack, there are several
          popular channels that the community has become known for.
        </p>
        <p
            class="mx-0 mt-0 mb-6 text-xl leading-7 text-gray-700 border-0 border-solid border-zinc-200"
        >
          The #helpneeded channel is like a realtime StackOverflow, but members also
          help each other with #freelance and #finance questions about taxes, running
          and expanding their business and how to deal with clients. As a celebration
          for our 1st Birthday one of the members even created an online
          <a
              href="https://larahack.com"
              target="_blank"
              class="font-bold bg-transparent border-0 border-solid cursor-pointer border-zinc-200 text-slate-800"
              style="text-decoration: none;"
          >Larahack</a
          >
          event, with competitors from several countries. Click to find out about the
          next
          <a
              href="https://larahack.com"
              target="_blank"
              class="font-bold bg-transparent border-0 border-solid cursor-pointer border-zinc-200 text-slate-800"
              style="text-decoration: none;"
          >Larahack</a
          >.
        </p>
        <p
            class="mx-0 mt-0 mb-6 text-xl leading-7 text-gray-700 border-0 border-solid border-zinc-200"
        >
          The newest venture has been the
          <a
              href="https://laravelphp.uk"
              target="_blank"
              class="font-bold bg-transparent border-0 border-solid cursor-pointer border-zinc-200 text-slate-800"
              style="text-decoration: none;"
          >LaravelUK website</a
          >, a community-driven project to further bring members together. This is a
          place for members to write blog posts, and promote their own businesses or
          side projects. There will also be regular interviews with members as well as
          special guests on the site, and more features to be built, it is a fantastic
          extension to the original Slack platform that brought everybody together.
          The fact that the site is being built by the members of the LaravelUK
          community, and with Guest Commits from
          <a
              href="https://laravelphp.uk/laravel-people"
              target="_blank"
              class="font-bold bg-transparent border-0 border-solid cursor-pointer border-zinc-200 text-slate-800"
              style="text-decoration: none;"
          >top Laravellers</a
          >, just makes it even more special.
        </p>
        <p
            class="mx-0 mt-0 mb-6 text-xl leading-7 text-gray-700 border-0 border-solid border-zinc-200"
        >
          Although LaravelUK was started with UK devs in mind, we have already
          welcomed many overseas members, which adds to the huge diversity in talent.
          Our skill levels range from learner to decades of experience in PHP and many
          other languages, and from junior Dev to business owners, entrepreneurs,
          conference speakers and book authors.
        </p>
      </div>
      </div>
    </article>
  </div>
</template>
<script setup lang="ts">
import HeroBanner from "~/components/HeroBanner.vue";

definePageMeta({
  title: 'About Us',
  name: 'About Us',
  path: '/about-us'
})
</script>
