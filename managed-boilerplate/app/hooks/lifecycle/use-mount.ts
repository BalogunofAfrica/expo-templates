import { useEffect, useRef } from "react";

export function useMount(callback: () => void) {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (mountedRef.current) {
      return;
    }

    mountedRef.current = true;
    callback();

    // eslint-disable-next-line consistent-return
    return () => {
      mountedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
