import { createEffect, createSignal } from "solid-js";

const useSession = () => {
  const [authenticate, setAuthenticate] = createSignal<boolean>(false);

  createEffect(() => {
    // this is where we check if our session value is present
    isTokenPresent();
  });

  // this is where we set our session value
  const setSessionValue = (key: string, value: any) => {
    const sessionValue = JSON.stringify(value);
    sessionStorage.setItem(key, sessionValue);
  };

  // this is where we get our session value
  const getSessionValue = (key: string) => {
    const sessionValue = sessionStorage.getItem(key);
    if (sessionValue) {
      return JSON.parse(sessionValue);
    } else {
      return "";
    }
  };
  // this is where we remove our session value
  const removeSessionValue = (key: string) => {
    sessionStorage.removeItem(key);
  };

  // this is where we check if our session value is present
  const isTokenPresent = () => {
    const token = getSessionValue("token");
    if (token) {
      setAuthenticate(true);
    } else {
      setAuthenticate(false);
    }
  };

  // this is where we set our functions for the auth context
  const authenticateUser = () => {
    setAuthenticate(true);
    setSessionValue("token", true);
  };

  const deAuthenticateUser = () => {
    setAuthenticate(false);
    removeSessionValue("token");
  };
  return { isAuthed: authenticate, authenticateUser, deAuthenticateUser };
};

export default useSession;
