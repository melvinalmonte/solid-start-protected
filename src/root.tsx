import "./root.css";

import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
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
import { createEffect, Suspense } from "solid-js";

import { AuthContext } from "./auth/auth";
import NavBar from "./components/NavBar";
import Protected from "./components/Protected";
import useSession from "./utils/session";

const queryClient = new QueryClient();

export default function Root() {
  const { isAuthed, isTokenPresent, authenticateUser, deAuthenticateUser } = useSession();
  createEffect(() => {
    // this is where we check if our session value is present
    isTokenPresent();
  });
  // This is where we set our functions for the auth context
  // isAuthed is a signal that we can use to check if the user is logged in
  // login and logout are functions that we can use to set the isAuthed signal
  // we pass our auth context to the AuthContext provider so that we can use it in our components
  const authContext = {
    isAuthed,
    login: () => authenticateUser(),
    logout: () => deAuthenticateUser()
  };

  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
              <AuthContext.Provider value={authContext}>
                <NavBar />
                <Routes>
                  <Route path="" component={Protected}>
                    <FileRoutes />
                  </Route>
                </Routes>
              </AuthContext.Provider>
            </QueryClientProvider>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
