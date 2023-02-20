import { A, useLocation } from "@solidjs/router";
import { Component, createSignal, Show } from "solid-js";

import { useAuth } from "~/auth/auth";

// This is our navbar component. It will render the available routes based on the user authentication status. it also gives the user the ability to authenticate and deauthenticate.
const NavBar: Component = () => {
  const [isMenuOpen, setIsMenuOpen] = createSignal<boolean>(false);
  const { isAuthed, login, logout } = useAuth();

  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav class="bg-gray-800">
      <div class="container mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(isOpen => !isOpen)}
            >
              <span class="sr-only">Open main menu</span>

              <Show
                when={isMenuOpen()}
                fallback={
                  <svg
                    class="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                }
              >
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Show>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <img
                class="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              <img
                class="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <A
                  href="/"
                  class={`${
                    isActive("/home") && "bg-gray-900"
                  } rounded-md px-3 py-2 text-sm font-medium text-white`}
                  aria-current="page"
                >
                  Home
                </A>

                <Show when={isAuthed()}>
                  <>
                    <A
                      href="foo"
                      class={`${
                        isActive("/foo") && "bg-gray-900"
                      } rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                    >
                      Foo
                    </A>

                    <A
                      href="bar"
                      class={`${
                        isActive("/bar") && "bg-gray-900"
                      } rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                    >
                      Bar
                    </A>
                    <A
                      href="counter"
                      class={`${
                        isActive("/counter") && "bg-gray-900"
                      } rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                    >
                      Counter example
                    </A>
                  </>
                </Show>

                <div class="flex items-center">
                  <input
                    id="authorized"
                    name="authorized"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    onChange={evt => (evt.currentTarget.checked ? login() : logout())}
                    checked={isAuthed()}
                  />
                  <label for="authorized" class="ml-2 block text-sm text-gray-300">
                    Authorized
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div class="relative">
              <div>
                <button
                  type="button"
                  class={`${
                    isAuthed() ? "bg-green-700" : "bg-red-700"
                  } rounded-md py-2 px-4  text-sm text-white focus:ring-offset-gray-800`}
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open user menu</span>
                  <Show when={isAuthed()} fallback={<p>Logged out</p>}>
                    <p>Logged in</p>
                  </Show>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Show when={isMenuOpen()}>
        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pt-2 pb-3">
            <A
              href="/"
              class={`${
                isActive("/home") && "bg-gray-900"
              }  block rounded-md  px-3 py-2 text-base font-medium text-white`}
              aria-current="page"
            >
              Home
            </A>

            <Show when={isAuthed()}>
              <>
                <A
                  href="foo"
                  class={`${
                    isActive("/foo") && "bg-gray-900"
                  } block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                >
                  Foo
                </A>

                <A
                  href="bar"
                  class={`${
                    isActive("/bar") && "bg-gray-900"
                  } block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                >
                  Bar
                </A>
                <A
                  href="counter"
                  class={`${
                    isActive("/counter") && "bg-gray-900"
                  } rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                >
                  counter example
                </A>
              </>
            </Show>

            <div class="flex items-center px-3 py-2">
              <input
                id="authorized"
                name="authorized"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                onChange={evt => (evt.currentTarget.checked ? login() : logout())}
                checked={isAuthed()}
              />
              <label for="authorized" class="ml-2 block text-sm text-gray-300">
                Authorized
              </label>
            </div>
          </div>
        </div>
      </Show>
    </nav>
  );
};

export default NavBar;
