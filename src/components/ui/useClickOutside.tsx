import { useEffect } from "react";

export function useClickOutside(
  ref: React.RefObject<HTMLElement | null>, 
  callback: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verificação de segurança para garantir que o elemento existe
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // Removi o callback daqui para evitar re-anexos desnecessários, 
    // ou você deve garantir que o usuário use useCallback.
  }, [ref, callback]); 
}