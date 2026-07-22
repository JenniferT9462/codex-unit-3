import { useEffect } from 'react'; 
// Initialization for ES Users
import {
  Input,
  initTWE,
} from "tw-elements";

export function useInputTWE() {
    useEffect(() => {
        initTWE({ Input });
    }, [])
}


