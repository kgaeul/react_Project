import React, { useEffect, useState } from "react";
import axios from "axios";

const DogImage=()=>{
    const[imgUrl,setImgUrl]=useState('');

    useEffect(()=>{
        axios.get('https://api.thedogapi.com/v1/images/search')
        .then(response=>{
            setImgUrl(response.data[0].url);
        })
        .catch(error=>{
            console.log('not search 404',error);
        });
    },[]);
    return(
        <div>
            <h2>귀여운 댕댕이!!</h2>
                {imgUrl && <img src={imgUrl} />}

        </div>
    )
}
export default DogImage;
