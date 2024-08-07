import { useTips } from '@/shared/hooks/useTips';
import { useEffect } from 'react';

export const useEscapeListener = (isListen: boolean) => {
  const { setIsShow } = useTips();

  useEffect(() => {
    if (!isListen) return;
    const onClose = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setIsShow(false);
      }
    };
    window.addEventListener('keydown', onClose);
    return () => window.removeEventListener('keydown', onClose);
  }, [isListen]);
};
