import { A } from "solid-start";

export default function Home() {
  return (
    <main class="mx-auto p-4 text-center text-gray-700">
      <div
        class="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
        style="
    background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp');
    height: 400px;
  "
      >
        <div
          class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
          style="background-color: rgba(0, 0, 0, 0.6)"
        >
          <div class="flex h-full items-center justify-center">
            <div class="text-white">
              <h2 class="mb-4 text-4xl font-semibold">Private routes tester</h2>
              <h4 class="mb-6 text-xl font-semibold">
                A small reference on how private routes work with SolidJS
              </h4>
              <A
                class="mb-1 inline-block rounded border-2 border-gray-200 px-7 py-3 text-sm font-medium uppercase leading-snug text-gray-200 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                href="/foo"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Go to private route foo
              </A>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
