import React, {useState, useEffect} from 'react'
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const TeachersImages = () => {

    const [imageList, setimageList] = useState<string[]>([]);
    const imageListRef = ref(storage, 'avatars/')
    useEffect(() => {
        const getImages = async () => {
            const response = await listAll(imageListRef);
            console.log(response);
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setimageList((prev) => [...prev, url])
                })
            })
        }
        getImages();
    }, [])

    {imageList.map(image => {
        return <img src={image}></img>
    })}
  
}

export default TeachersImages
