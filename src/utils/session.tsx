import { createSignal } from "solid-js";

const useSession = () => {
  const [authenticate, setAuthenticate] = createSignal<boolean>(false);

  const setSessionValue = (key: string, value: any) => {
    const sessionValue = JSON.stringify(value);
    sessionStorage.setItem(key, sessionValue);
  };

  const getSessionValue = (key: string) => {
    const sessionValue = sessionStorage.getItem(key);
    if (sessionValue) {
      return JSON.parse(sessionValue);
    } else {
      return "";
    }
  };
  const removeSessionValue = (key: string) => {
    sessionStorage.removeItem(key);
  };

  const isTokenPresent = () => {
    const token = getSessionValue("token");
    if (token) {
      setAuthenticate(true);
    } else {
      setAuthenticate(false);
    }
  };

  const authenticateUser = () => {
    setAuthenticate(true);
    setSessionValue("token", true);
  };
  const deAuthenticateUser = () => {
    setAuthenticate(false);
    removeSessionValue("token");
  };
  return { isAuthed: authenticate, isTokenPresent, authenticateUser, deAuthenticateUser };
};

export default useSession;
