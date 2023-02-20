import { For, Match, Switch } from "solid-js";
import { createPost, getPosts } from "~/services";

export default function QueryExample() {
  const queryPosts = getPosts();
  const post = createPost();

  const onPostCreate = () => {
    post.mutate({ title: "test", id: 1000, body: "test", userId: 1234 });
    queryPosts.refetch();
  };

  return (
    <div class="container mx-auto">
      <div class="flex flex-row items-center justify-between p-4">
        <h3 class="text-lg">Posts:</h3>
        <button class="rounded-md bg-blue-500 p-2 text-white" onClick={() => queryPosts.refetch()}>
          Refetch
        </button>
      </div>
      <div>
        <button class="m-4 rounded-md bg-blue-800 p-2 text-white" onClick={() => onPostCreate()}>
          Create Post
        </button>
      </div>
      <Switch>
        <Match when={post.isLoading}>
          <div class="m-4">
            <p>post is loading</p>
          </div>
        </Match>
        <Match when={post.isError}>Error!</Match>
        <Match when={post.isSuccess}>
          <div class="m-4">
            <p class="text-green-700">Successfully created post for ID: {post.data?.id}</p>
          </div>
        </Match>
      </Switch>
      <Switch>
        <Match when={queryPosts.isLoading}>Loading...</Match>
        <Match when={queryPosts.isSuccess}>
          <For each={queryPosts.data}>
            {item => (
              <div class="m-4 rounded-md border border-gray-500 p-4">
                <p>
                  <span class="font-bold">Title:</span> {item.title}
                </p>
                <p>
                  <span class="font-bold">Content:</span> {item.body}
                </p>
              </div>
            )}
          </For>
        </Match>
      </Switch>
    </div>
  );
}
