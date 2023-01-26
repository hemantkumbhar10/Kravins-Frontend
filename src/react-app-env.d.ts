/// <reference types="react-scripts" />


declare module '@emoji-mart/react';

declare module 'blueimp-canvas-to-blob';

interface UserType {
    username?:string,
    email:string,
    password:string,
    verificationquestion?:{question:string,answer:string},
    profilepic?:string,
  }
  
  declare global {
    interface Window {
      UserType: UserType
    }
  
  }