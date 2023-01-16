import React from "react";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";

import {Dialog} from '@mui/material';

interface AvatarUploadProps{
    close:()=>void,
    open:boolean
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const AvatarUpload =({close, open}:AvatarUploadProps)=>{

    return(
        <Dialog TransitionComponent={Transition} onClose={close} open={open} aria-label='Profile picture upload' sx={{zIndex:999999}}>
            <a href="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quaerat iusto eius explicabo eaque dolorum totam, cumque, provident natus, in quas sunt reprehenderit? Excepturi minus expedita laborum? Id, exercitationem doloribus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quaerat saepe quis accusamus, qui, ex minima cumque ullam reiciendis iste officia possimus enim a corrupti quas magnam fuga unde magni!
            </a>
        </Dialog>
    )
}


export default AvatarUpload;