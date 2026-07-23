import { useEffect } from 'react'; 
// Initialization for ES Users
import {
  Ripple,
  initTWE,
} from "tw-elements";

export function useInputTWE() {
    useEffect(() => {
        initTWE({ Ripple });
    }, [])
}


