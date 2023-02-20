import "./root.css";

import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Route,
  Routes,
  Scripts,
  Title
} from "solid-start";
// @refresh reload
import { createSignal, Suspense } from "solid-js";

import { AuthContext } from "./auth/auth";
import NavBar from "./components/NavBar";
import Protected from "./components/Protected";

export default function Root() {
  const [isAuthed, setIsAuthed] = createSignal(false);

  // This is where we set our functions for the auth context
  // isAuthed is a signal that we can use to check if the user is logged in
  // login and logout are functions that we can use to set the isAuthed signal
  // we pass our auth context to the AuthContext provider so that we can use it in our components
  const authContext = {
    isAuthed,
    login: () => setIsAuthed(true),
    logout: () => setIsAuthed(false)
  };

  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <AuthContext.Provider value={authContext}>
              <NavBar />
              <Routes>
                <Route path="" component={Protected}>
                  <FileRoutes />
                </Route>
              </Routes>
            </AuthContext.Provider>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
