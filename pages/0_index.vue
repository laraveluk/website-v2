<template>
  <div
      class="leading-5 text-black border-0 border-gray-200 border-solid"
  >
    <section
        class="flex flex-col hero text-black bg-no-repeat bg-cover border-0 border-gray-200 border-solid"
    >
      <hero-banner title="Hello from Laravel UK" subtext="The most exciting developer group in the United Kingdom"></hero-banner>
    </section>
    <section>
    <div
        class="flex flex-col justify-center items-center text-center bg-white border-0 border-gray-200 border-solid md:text-left"
        style="min-height: 50vh;"
    >
      <div
          class="flex flex-col items-center py-12 w-3/4 text-left border-0 border-gray-200 border-solid md:flex-row md:max-w-screen-md md:p-15"
      >
        <div
            class="flex flex-col font-light text-gray-700 border-0 border-gray-200 border-solid md:mr-12 md:w-1/2"
        >
          <h2
              class="mx-0 mt-0 mb-4 text-2xl font-bold leading-9 text-indigo-900 border-0 border-gray-200 border-solid md:text-3xl"
          >
            Hello and welcome to Laravel UK community.
          </h2>
          <p
              class="mx-0 mt-0 mb-4 leading-normal border-0 border-gray-200 border-solid md:text-lg"
          >
            If you are already a member of the LaravelUK Slack community, then you
            will know what an amazing place it is to be. If you haven’t joined us
            yet, then you really should.
          </p>
          <p
              class="mx-0 mt-0 mb-4 leading-normal border-0 border-gray-200 border-solid md:text-lg"
          >
            The skill levels range from learner to decades of experience in PHP
            and many other languages; from junior developers to business owners,
            entrepreneurs, conference speakers and book authors. All you need to
            do is
            <a
                href="https://laravelphp.uk/register"
                class="text-lg leading-7 text-blue-700 no-underline bg-transparent border-0 border-gray-200 border-solid cursor-pointer hover:no-underline"
            >sign up </a
            >on our website and you'll receive a Slack invitation in your email
            inbox.
          </p>
          <p
              class="m-0 leading-normal border-0 border-gray-200 border-solid md:text-lg"
          >
            See you soon 😁
          </p>
        </div>
        <div
            class="hidden justify-end text-black border-0 border-gray-200 border-solid md:flex md:w-1/2"
        >
          <div
              class="flex my-2.5 w-full border-0 border-gray-200 border-solid"
              style="display: flex; max-width: 550px; width: 100%; margin-top: 10px; margin-bottom: 10px;"
          >
            <iframe
                id="twitter-widget-0"
                scrolling="no"
                frameborder="0"
                allowtransparency="true"
                allowfullscreen="true"
                class="block static visible flex-grow w-96 border-0 border-gray-200 border-solid"
                style="position: static; visibility: visible; width: 528px; height: 519px; display: block; flex-grow: 1;"
                title="Twitter Tweet"
                src="https://platform.twitter.com/embed/Tweet.html?creatorScreenName=UKLaravel&amp;dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOlsibGlua3RyLmVlIiwidHIuZWUiLCJ0ZXJyYS5jb20uYnIiLCJ3d3cubGlua3RyLmVlIiwid3d3LnRyLmVlIiwid3d3LnRlcnJhLmNvbS5iciJdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdGltZWxpbmVfMTIwMzQiOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2JhY2tlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3JlZnNyY19zZXNzaW9uIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19zaG93X2J1c2luZXNzX3ZlcmlmaWVkX2JhZGdlIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19jaGluX3BpbGxzXzE0NzQxIjp7ImJ1Y2tldCI6ImNvbG9yX2ljb25zIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9yZXN1bHRfbWlncmF0aW9uXzEzOTc5Ijp7ImJ1Y2tldCI6InR3ZWV0X3Jlc3VsdCIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19zZW5zaXRpdmVfbWVkaWFfaW50ZXJzdGl0aWFsXzEzOTYzIjp7ImJ1Y2tldCI6ImludGVyc3RpdGlhbCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2R1cGxpY2F0ZV9zY3JpYmVzX3RvX3NldHRpbmdzIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd192aWRlb19obHNfZHluYW1pY19tYW5pZmVzdHNfMTUwODIiOnsiYnVja2V0IjoidHJ1ZV9iaXRyYXRlIiwidmVyc2lvbiI6bnVsbH0sInRmd19zaG93X2JsdWVfdmVyaWZpZWRfYmFkZ2UiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfZ292X3ZlcmlmaWVkX2JhZGdlIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19zaG93X2J1c2luZXNzX2FmZmlsaWF0ZV9iYWRnZSI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=837038353287630848&amp;lang=en-gb&amp;origin=https%3A%2F%2Flaravelphp.uk%2F&amp;sessionId=f5e4b26df4c4647a5b49e561281fe142ff0ed38a&amp;siteScreenName=UKLaravel&amp;theme=light&amp;widgetsVersion=a3525f077c700%3A1667415560940&amp;width=550px"
                data-tweet-id="837038353287630848"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </section>

    <section>
    <div class="flex flex-col text-black border-0 border-gray-200 border-solid">
      <div
          class="flex flex-col justify-center items-center py-12 px-4 mx-auto w-full border-0 border-gray-200 border-solid md:p-12"
          style="min-height: 75vh;"
      >
        <div
            class="mx-auto mb-8 w-3/4 text-center border-0 border-gray-200 border-solid"
        >
          <h2
              class="mx-0 mt-0 mb-4 text-2xl font-bold leading-9 text-indigo-900 border-0 border-gray-200 border-solid md:text-3xl"
          >
            Latest News
          </h2>
        </div>
        <div
            class="flex flex-col border-0 border-gray-200 border-solid md:flex-row"
        >
          <div
              class="flex flex-col p-4 mb-8 w-full bg-white rounded border-r-0 border-b-0 border-l-0 border-t-4 border-indigo-900 border-solid md:mb-0 md:mr-4 md:w-1/2"
              style="border-width: 0px; box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;"
          >
            <h3
                class="pb-4 m-0 font-bold leading-6 text-center text-indigo-900 border-t-0 border-r-0 border-l-0 border-b-2 border-gray-100 border-solid md:text-xl"
                style="border-width: 0px;"
            >
              Recent Posts
            </h3>
            <div
                class="flex flex-col flex-grow justify-center p-4 leading-normal border-0 border-gray-200 border-solid"
            >
              <blog-post-link></blog-post-link>
            </div>
            <div
                class="pt-4 text-xs leading-3 text-center text-gray-400 border-r-0 border-b-0 border-l-0 border-t border-gray-200 border-solid"
                style="border-width: 0px;"
            >
              Read more posts from our
              <a
                  href="https://laravelphp.uk/blog"
                  class="mb-2 text-gray-700 no-underline bg-transparent border-0 border-gray-200 border-solid cursor-pointer hover:no-underline"
              >blog</a
              >.
            </div>
          </div>
          <div
              class="flex flex-col p-4 mb-8 w-full bg-white rounded border-r-0 border-b-0 border-l-0 border-t-4 border-indigo-900 border-solid md:mb-0 md:mr-4 md:w-1/4"
              style="border-width: 0px; box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;"
          >
            <h3
                class="pb-4 m-0 font-bold text-center text-indigo-900 border-t-0 border-r-0 border-l-0 border-b-2 border-gray-100 border-solid md:text-lg"
                style="border-width: 0px;"
            >
              Interviews
            </h3>
            <div
                class="flex flex-col flex-grow border-0 border-gray-200 border-solid"
            >
              <div
                  class="p-4 leading-normal border-0 border-gray-200 border-solid"
              >
                <a
                    href="/blog/interviews/laravel-talks-to-simon-bennett-of-snapshooter-io-2"
                    class="text-sm text-gray-700 no-underline bg-transparent border-0 border-gray-200 border-solid cursor-pointer hover:no-underline"
                >Author</a
                >
                <h3
                    class="mx-0 mt-0 mb-2 text-sm font-light text-gray-400 border-0 border-gray-200 border-solid"
                >
                  Date
                </h3>
                <p
                    class="mx-0 mt-0 mb-2 text-sm font-light text-gray-700 border-0 border-gray-200 border-solid"
                >
                  Preview
                </p>
                <a
                    href="#"
                    class="text-sm font-light text-gray-400 no-underline bg-transparent border-0 border-gray-200 border-solid cursor-pointer hover:no-underline"
                >Read more...</a
                >
              </div>
            </div>
            <div
                class="pt-4 text-xs leading-3 text-center text-gray-400 border-r-0 border-b-0 border-l-0 border-t border-gray-200 border-solid"
                style="border-width: 0px;"
            >
              More interviews coming soon.
            </div>
          </div>
          <div
              class="flex flex-col p-4 w-full bg-white rounded border-r-0 border-b-0 border-l-0 border-t-4 border-indigo-900 border-solid md:w-1/4"
              style="border-width: 0px; box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;"
          >
            <h3
                class="pb-4 m-0 font-bold text-center text-indigo-900 border-t-0 border-r-0 border-l-0 border-b-2 border-gray-100 border-solid md:text-lg"
                style="border-width: 0px;"
            >
              Resources
            </h3>
            <div
                class="flex flex-col flex-grow border-0 border-gray-200 border-solid"
            >
              <div
                  class="p-4 leading-normal border-0 border-gray-200 border-solid"
              >
                <p
                    class="m-0 text-sm font-light text-gray-700 border-0 border-gray-200 border-solid"
                >
                  Watch this space for a list of helpful resources and links
                  shared by our members.
                </p>
              </div>
            </div>
            <div
                class="pt-4 text-xs leading-3 text-center text-gray-400 border-r-0 border-b-0 border-l-0 border-t border-gray-200 border-solid"
                style="border-width: 0px;"
            >
              Coming soon.
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Home',
  name: 'Home',
  path: '/'
})
</script>
