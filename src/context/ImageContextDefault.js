import { createContext } from "react";

export default createContext({
    url:'',
    imageIsFull: false,
    setImage: (url) => {},
    setImageIsFull: () => {}
})