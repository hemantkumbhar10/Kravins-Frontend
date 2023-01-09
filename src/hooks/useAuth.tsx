// /src/hooks/useAuth.tsx
import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  ReactNode,
} from "react";


export interface contextProps{
    authed: boolean | null,
    setAuthed: (arg0:boolean)=>void,
    login:()=>void,
    logout:()=>void
}


// Create the context
const AuthContext = createContext<contextProps>({
    authed:null,
    setAuthed:()=>{},
    login:()=>{},
    logout:()=>{}
});

interface CPCprops {
  children: ReactNode;
}

export const AuthProvider = (props: CPCprops) => {
  const { children } = props;

  // Using the useState hook to keep track of the value authed (if a
  // user is logged in)

  const [authed, setAuthed] = useState<boolean>(true); //set to false after done frontend editing with bottomNav

  const login = async (): Promise<void> => {
    const result = await fakeAsyncLogin();

    if (result) {
      console.log("user has logged in");

      setAuthed(true);
    }
  };

  const logout = async (): Promise<void> => {
    const result = await fakeAsyncLogout();

    if (result) {
      console.log("The User has logged out");
      setAuthed(false);
    }
  };

  /// Mock Async Login API call.
  // TODO: Replace with your actual login API Call code
  const fakeAsyncLogin = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Logged In");
      }, 300);
    });
  };

  // Mock Async Logout API call.
  // TODO: Replace with your actual logout API Call code
  const fakeAsyncLogout = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("The user has successfully logged on the server");
      }, 300);
    });
  };

  return (
    // Using the provider so that ANY component in our application can
    // use the values that we are sending.
    <AuthContext.Provider value={{ authed, setAuthed, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Finally creating the custom hook
export const useAuth = () => useContext(AuthContext);
