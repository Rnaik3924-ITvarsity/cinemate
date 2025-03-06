import { useTitle } from "../hooks/useTitle";

export const useTitle = (title) => {
    
      useEffect(() => {
        document.title = `${title} / Cinemate`;
       });

  return null;

}
