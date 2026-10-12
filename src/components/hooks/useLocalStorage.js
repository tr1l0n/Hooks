import {useState,useEffect} from "react";
export const useLocalStorage = (key,initialValue = '') => {
    const [state, setState] = useState(() => JSON.parse(localStorage.getItem(key)) ?? initialValue);
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state,key])
    return [state,setState]
}