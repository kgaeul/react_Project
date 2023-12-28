import React,{useState} from "react";
import image1 from '../img/에몽가3.jpg';
import image2 from '../img/에몽가5.jpg';
import image3 from '../img/에몽가2.jpg';

function ImageChange () {
const [imageSrc,setImageSrc]=useState(image1);
const [isClick,setIsClick]=useState(false);

//이미지를 클릭할 때마다 이미지가 변경될 수 있도록 클릭함수 만들기
//==동등연산자 자동으로 형변환을 수행하기 때문에 데이터 타입이 다를 경우에도 변환을 일부 시도하기도 함
//=== 일치 연산자로 값과 데이터 타입이 모두 같아야지 true를 변환함

const handleClick=()=>{
    if(imageSrc===image1){
        setImageSrc(image2);
    
    }else if(imageSrc===image2){//거짓일때
        setImageSrc(image3);

    }else{
        setImageSrc(image1);
    
    }
    
    
}
    return(
        <div>
            <img src={imageSrc} onClick={handleClick} style={{width:"300px"}}></img>
        </div>
    )
}

export default ImageChange;