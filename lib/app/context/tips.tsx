import TipsLayout from '@/features/tips-layout';
import { TipDataItem, TipDataItemWithNode } from '@/shared/types';
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useMemo, useState } from 'react';

type AuthContext = {
  data: null | TipDataItemWithNode[];
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
};

type Props = {
  children: ReactNode;
  tips: TipDataItem[];
};

export const TipsContext = createContext<AuthContext>({} as AuthContext);

export const TipsProvider = ({ children, tips }: Props) => {
  const [data, setData] = useState<null | TipDataItemWithNode[]>(null);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setData(
      tips.map((elem) => ({
        ...elem,
        node: document.getElementById(elem.nodeId),
      })),
    );
  }, [tips]);

  const memoValue = useMemo(
    () => ({
      data,
      isShow,
      setIsShow,
    }),
    [data, isShow],
  );

  return (
    <TipsContext.Provider value={memoValue}>
      <TipsLayout>{children}</TipsLayout>
    </TipsContext.Provider>
  );
};
