import { ParentComponent, Show } from "solid-js";

import { Outlet } from "@solidjs/router";
import { useAuth } from "../auth/auth";
import UnAuthorized from "./Unauthorized";

// This is our protected route component. It will check if the user is authenticated by calling the isAuthed function from our auth context
// If the user is authenticated, it will render the route if not it will render the unauthorized component. We use the Outlet component to render the route content.
const Protected: ParentComponent = () => {
  const { isAuthed } = useAuth();
  return (
    <Show when={isAuthed()} fallback={<UnAuthorized />}>
      <Outlet />
    </Show>
  );
};

export default Protected;
