import { createContext, useContext } from "solid-js";
// This is our auth interface. It defines the functions we will use to check if the user is authenticated, login and logout.
type Auth = {
  isAuthed: () => boolean;
  login: () => void;
  logout: () => void;
};

// This is where we define our auth context
export const AuthContext = createContext<Auth>();

// This is where we define our auth hook
export const useAuth = () => useContext(AuthContext)!;
