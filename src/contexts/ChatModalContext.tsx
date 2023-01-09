import React, {useState, useEffect, createContext, useContext, ReactNode} from 'react';



interface ContextProps{
    modalOpen:boolean,
    setModalOpen:()=>{}
}

const chatModalContext = createContext<{modalOpen:boolean}>({modalOpen:false});


interface ChatModalProps{
    children:ReactNode;
}

const ChatModalContext =({children}:ChatModalProps) =>{

    return(<></>)

}


export {ChatModalContext};