import { createContext } from "react";
// import { User } from "../hooks/useUser";

interface UserType {
  username?:string,
  email:string,
  password:string,
  verificationquestion?:{question:string,answer:string},
}


interface AuthContextt {
  user: UserType | null;
  // setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextt>({



  user:null,



  // setUser: () => {},



}); 


