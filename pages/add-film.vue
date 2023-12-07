<template>
  <div
    class="col-span-6 rounded-md bg-slate-950 bg-opacity-80 border border-gray-800 p-6 my-4 sm:my-12"
  >
    <div class="flex flex-col gap-6">
      <h2 class="text-xl font-bold">Add Movie</h2>
      <div class="w-full grid md:grid-cols-2 gap-6">
        <div class="text-sm w-full">
          <label class="text-border font-semibold">Movie Title</label>
          <input
            required
            type="text"
            placeholder="Game of Thrones"
            class="w-full text-sm mt-2 p-5 border border-border rounded text-black bg-gray-300 outline-none"
          />
        </div>
        <div class="text-sm w-full">
          <label class="text-border font-semibold">Hours</label>
          <input
            required
            type="text"
            placeholder="2hr"
            class="w-full text-sm mt-2 p-5 border border-border rounded text-black outline-none bg-gray-300"
          />
        </div>
      </div>
      <div class="w-full grid md:grid-cols-2 gap-6">
        <div class="text-sm w-full">
          <label class="text-border font-semibold">Language Used</label>
          <input
            required
            type="text"
            placeholder="English"
            class="w-full text-sm mt-2 p-5 border border-border rounded text-black outline-none bg-gray-300"
          />
        </div>
        <div class="text-sm w-full">
          <label class="text-border font-semibold">Year of Release</label>
          <input
            required
            type="number"
            placeholder="2022"
            class="w-full text-sm mt-2 p-5 border border-border rounded text-black outline-none bg-gray-300"
          />
        </div>
      </div>
      <div class="w-full grid md:grid-cols-2 gap-6">
        <div class="flex flex-col gap-2">
          <p class="text-border font-semibold text-sm">Image without Title</p>
          <div class="w-full text-center">
            <div
              tabindex="0"
              class="px-6 py-8 border-2 border-border border-dashed rounded-md cursor-pointer"
            >
              <input type="file" tabindex="-1" style="display: none" />
              <span class="mx-auto flex-colo text-subMain text-3xl">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="16 16 12 12 8 16"></polyline>
                  <line x1="12" y1="12" x2="12" y2="21"></line>
                  <path
                    d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
                  />
                  <polyline points="16 16 12 12 8 16"></polyline>
                </svg>
              </span>
              <p class="text-sm mt-2">Drag your image here</p>
              <em class="text-xs text-border">
                (only .jpg and .png files will be accepted)
              </em>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-border font-semibold text-sm">Image with Title</p>
          <div class="w-full text-center">
            <div
              tabindex="0"
              class="px-6 py-8 border-2 border-border border-dashed rounded-md cursor-pointer"
            >
              <input type="file" tabindex="-1" style="display: none" />
              <span class="mx-auto flex-colo text-subMain text-3xl">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="16 16 12 12 8 16"></polyline>
                  <line x1="12" y1="12" x2="12" y2="21"></line>
                  <path
                    d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
                  />
                  <polyline points="16 16 12 12 8 16"></polyline>
                </svg>
              </span>
              <p class="text-sm mt-2">Drag your image here</p>
              <em class="text-xs text-border">
                (only .jpg and .png files will be accepted)
              </em>
            </div>
          </div>
        </div>
      </div>
      <button
        class="bg-red-600 w-full flex flex-row items-center justify-center gap-6 font-medium text-white py-4 rounded"
      >
        <svg
          stroke="#fff"
          fill="#fff"
          stroke-width="0"
          version="1.1"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 9h2v-4h3l-4-4-4 4h3zM10 6.75v1.542l4.579 1.708-6.579 2.453-6.579-2.453 4.579-1.708v-1.542l-6 2.25v4l8 3 8-3v-4z"
          />
        </svg>
        Publish Movie
      </button>
    </div>
  </div>
</template>
