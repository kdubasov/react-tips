import { useTips } from '@/app/main.ts';
import TipsActiveLayout from '@/features/tips-active-layout';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
};

const TipsLayout = ({ children }: Props) => {
  const { data, isShow } = useTips();
  return createPortal(
    <>
      {isShow && data && <TipsActiveLayout data={data.filter((elem) => elem.node).sort((a, b) => a.idx - b.idx)} />}
      {children}
    </>,
    document.body,
  );
};

export default TipsLayout;
