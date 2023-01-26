 


const dataUrlToFile = (url:string,filename:string)=>{
    const [mediaType,data] = url.split(",");

    // console.log('this is data..', data)

    const mime = mediaType.match(/:(.*?);/)?.[1];

    console.log('This is mime...', mime);

    var n = data.length;

    const arr = new Uint8Array(n);

    while(n--){
        arr[n]=data.charCodeAt(n);
    }

    return new File([arr], filename, {type:mime});

};


export {dataUrlToFile};