import { createContext } from "react";
import { User } from "../hooks/useUser";

interface AuthContextt {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextt>({



  user:null,



  setUser: () => {},



}); 


