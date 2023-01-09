import React, { ReactNode } from "react";

const viewportContext = React.createContext<{width?:number, height?:number}>({});

interface Cprops {
  children: ReactNode;
}

const ViewportProvider = ({ children }: Cprops) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};


export {viewportContext,ViewportProvider};