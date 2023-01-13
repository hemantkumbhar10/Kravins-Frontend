/// <reference types="react-scripts" />


declare module '@emoji-mart/react';



interface UserType {
    username?:string,
    email:string,
    password:string,
    verificationquestion?:{question:string,answer:string},
  }
  
  declare global {
    interface Window {
      UserType: UserType
    }
  
  }