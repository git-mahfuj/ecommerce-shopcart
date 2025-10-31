import { useEffect , useRef } from "react";

export function useOutsideClick<T extends HTMLElement>(callback: () => void) {
    const ref = useRef<T>(null);
   useEffect(() => {
    const handleClickoutside = (e:MouseEvent) => {
        if(ref.current && !ref.current.contains(e.target as Node)) {
            callback()
        }
    };
    document.addEventListener("mousedown" , handleClickoutside);
    return () => {
        document.removeEventListener("mousedown" , handleClickoutside)
    };
   } ,[callback])
   return ref
}