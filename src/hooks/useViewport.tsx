import React from 'react';

import {viewportContext} from '../contexts/ViewportProvider';

const useViewport = () => {
    const { width, height } = React.useContext(viewportContext);
    return { width, height };
  };

export default useViewport;
  
  // const MobileComponent = () => <h1 >"Hmmm... Why is your screen so small?"</h1>;
  // const DesktopComponent = () => <p>"Wow, your screen is big!"</p>;
  
  // const MyComponent:any = () => {
  //   const { width } = useViewport();
  //   const breakpoint = 620;
  //   if(!width){
  //     return
  //   }
  //   return(
  //     <>
  //      {(width < breakpoint) && <MobileComponent />}
  //      {(width >= breakpoint) && <DesktopComponent />}
  //     </>
  //   );
  // };


  // export default MyComponent;


  // width < breakpoint? <MobileComponent /> : <DesktopComponent />