import TipsLayout from '@/features/tips-layout';
import { TipDataItem, TipDataItemWithNode } from '@/shared/types';
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useMemo, useState } from 'react';

type AuthContext = {
  data: null | TipDataItemWithNode[];
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
  theme?: 'dark' | 'light';
  escapeToClose?: boolean;
  parentNode?: HTMLElement;
};

type Props = {
  children: ReactNode;
  tips: TipDataItem[];
  parentNode?: HTMLElement;
  theme?: 'dark' | 'light';
  primaryColor?: string;
  tooltipBorderColor?: string;
  escapeToClose?: boolean;
};

export const TipsContext = createContext<AuthContext>({} as AuthContext);

export const TipsProvider = (props: Props) => {
  const { children, tips, theme, primaryColor, tooltipBorderColor, escapeToClose, parentNode } = props;
  const [data, setData] = useState<null | TipDataItemWithNode[]>(null);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (!isShow) return;
    setData(
      tips.map((elem) => ({
        ...elem,
        node: document.getElementById(elem.nodeId),
      })),
    );
  }, [tips, isShow]);

  useEffect(() => {
    if ((!primaryColor && !tooltipBorderColor) || !isShow) return;
    const wrapper = document.getElementById('tips-active-wrapper');
    if (primaryColor) {
      wrapper?.style.setProperty('--primary', primaryColor);
    }
    if (tooltipBorderColor) {
      wrapper?.style.setProperty('--tooltip-border', tooltipBorderColor);
    }
  }, [isShow, primaryColor, tooltipBorderColor]);

  const memoValue = useMemo(
    () => ({
      data,
      isShow,
      theme,
      escapeToClose,
      parentNode,
      setIsShow,
    }),
    [data, isShow, theme, escapeToClose, setIsShow, parentNode],
  );

  return (
    <TipsContext.Provider value={memoValue}>
      <TipsLayout>{children}</TipsLayout>
    </TipsContext.Provider>
  );
};
