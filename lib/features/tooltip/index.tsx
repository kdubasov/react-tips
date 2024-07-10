import styles from './Tooltip.module.css';import { TipDataItemWithNode } from '@/shared/types';import Spinner from '@/shared/ui/spinner';import { CSSProperties } from 'react';type Props = {  item: TipDataItemWithNode;  itemRect: DOMRect;  onNext: () => void;  onPrev: () => void;  onClose: () => void;  prevItem: undefined | TipDataItemWithNode;  nextItem: undefined | TipDataItemWithNode;  countItems: number;  itemIdx: number;  isLoading: boolean;};const Tooltip = (props: Props) => {  const {    item,    prevItem,    nextItem,    onPrev,    onNext,    onClose,    itemRect,    countItems,    itemIdx,    isLoading,  } = props;  const margin = 10;  const style: CSSProperties = {};  style.maxWidth = itemRect.right;  if (itemRect.top + itemRect.height / 2 > window.innerHeight / 2) {    style.bottom = itemRect.height + margin;  } else {    style.top = itemRect.height + margin;  }  if (itemRect.left + itemRect.width / 2 > window.innerWidth / 2) {    style.right = 0;  } else {    style.left = 0;  }  return (    <div style={style} className={styles.wrapper}>      <header className={styles.header}>        {item?.title && <h4>{item.title}</h4>}        <p>{item.text}</p>      </header>      <footer className={styles.footer}>        <div className={styles.left}>          <span className={styles.count}>            <b>{itemIdx + 1}</b> / {countItems}          </span>          {isLoading && <Spinner />}        </div>        <div className={styles.buttons}>          <button onClick={onClose}>            <svg width="8" height="8" viewBox="0 0 8 8">              <path                d="M7.8228 0.183264C7.76667 0.127012 7.69999 0.0823841 7.62658 0.0519343C7.55318 0.0214845 7.47448 0.00581086 7.39501 0.00581086C7.31554 0.00581086 7.23685 0.0214845 7.16345 0.0519343C7.09004 0.0823841 7.02336 0.127012 6.96722 0.183264L4 3.14442L1.03278 0.177196C0.976598 0.121018 0.909905 0.0764551 0.836505 0.0460517C0.763104 0.0156483 0.684434 5.91933e-10 0.604986 0C0.525539 -5.91934e-10 0.446868 0.0156483 0.373468 0.0460517C0.300068 0.0764551 0.233374 0.121018 0.177196 0.177196C0.121018 0.233374 0.0764551 0.300068 0.0460517 0.373468C0.0156483 0.446868 -5.91933e-10 0.525539 0 0.604986C5.91934e-10 0.684434 0.0156483 0.763104 0.0460517 0.836505C0.0764551 0.909905 0.121018 0.976598 0.177196 1.03278L3.14442 4L0.177196 6.96722C0.121018 7.0234 0.0764551 7.0901 0.0460517 7.1635C0.0156483 7.2369 0 7.31557 0 7.39501C0 7.47446 0.0156483 7.55313 0.0460517 7.62653C0.0764551 7.69993 0.121018 7.76663 0.177196 7.8228C0.233374 7.87898 0.300068 7.92355 0.373468 7.95395C0.446868 7.98435 0.525539 8 0.604986 8C0.684434 8 0.763104 7.98435 0.836505 7.95395C0.909905 7.92355 0.976598 7.87898 1.03278 7.8228L4 4.85558L6.96722 7.8228C7.0234 7.87898 7.0901 7.92355 7.1635 7.95395C7.2369 7.98435 7.31557 8 7.39501 8C7.47446 8 7.55313 7.98435 7.62653 7.95395C7.69993 7.92355 7.76663 7.87898 7.8228 7.8228C7.87898 7.76663 7.92355 7.69993 7.95395 7.62653C7.98435 7.55313 8 7.47446 8 7.39501C8 7.31557 7.98435 7.2369 7.95395 7.1635C7.92355 7.0901 7.87898 7.0234 7.8228 6.96722L4.85558 4L7.8228 1.03278C8.05339 0.802195 8.05339 0.413846 7.8228 0.183264Z"                fill="var(--gray)"              />            </svg>            Close          </button>          <div className={styles.line} />          <button disabled={!prevItem || isLoading} onClick={onPrev}>            <svg              width="5"              height="8"              viewBox="0 0 5 8"              style={{ rotate: '180deg' }}            >              <path                d="M4.3282 3.5678C4.4382 3.68048 4.5 3.83329 4.5 3.99262C4.5 4.15195 4.4382 4.30475 4.3282 4.41743L1.00883 7.81656C0.954703 7.87395 0.889956 7.91973 0.818367 7.95122C0.746779 7.98271 0.669782 7.99928 0.591871 7.99998C0.51396 8.00067 0.436694 7.98547 0.364582 7.95526C0.29247 7.92504 0.226955 7.88043 0.171861 7.82401C0.116768 7.76759 0.0731982 7.7005 0.0436948 7.62666C0.0141913 7.55281 -0.000654873 7.47369 2.21548e-05 7.39391C0.000699182 7.31412 0.016886 7.23528 0.0476382 7.16197C0.0783903 7.08866 0.123092 7.02236 0.179134 6.96693L3.08366 3.99262L0.179134 1.0183C0.0722492 0.904978 0.0131059 0.753196 0.0144428 0.59565C0.0157797 0.438103 0.0774898 0.287397 0.186282 0.175991C0.295074 0.0645846 0.442244 0.00139175 0.596094 2.27145e-05C0.749944 -0.00134632 0.898164 0.0592181 1.00883 0.168672L4.3282 3.5678Z"                fill="var(--primary)"              />            </svg>            Prev          </button>          <div className={styles.line} />          <button disabled={!nextItem || isLoading} onClick={onNext}>            Next            <svg width="5" height="8" viewBox="0 0 5 8">              <path                d="M4.3282 3.5678C4.4382 3.68048 4.5 3.83329 4.5 3.99262C4.5 4.15195 4.4382 4.30475 4.3282 4.41743L1.00883 7.81656C0.954703 7.87395 0.889956 7.91973 0.818367 7.95122C0.746779 7.98271 0.669782 7.99928 0.591871 7.99998C0.51396 8.00067 0.436694 7.98547 0.364582 7.95526C0.29247 7.92504 0.226955 7.88043 0.171861 7.82401C0.116768 7.76759 0.0731982 7.7005 0.0436948 7.62666C0.0141913 7.55281 -0.000654873 7.47369 2.21548e-05 7.39391C0.000699182 7.31412 0.016886 7.23528 0.0476382 7.16197C0.0783903 7.08866 0.123092 7.02236 0.179134 6.96693L3.08366 3.99262L0.179134 1.0183C0.0722492 0.904978 0.0131059 0.753196 0.0144428 0.59565C0.0157797 0.438103 0.0774898 0.287397 0.186282 0.175991C0.295074 0.0645846 0.442244 0.00139175 0.596094 2.27145e-05C0.749944 -0.00134632 0.898164 0.0592181 1.00883 0.168672L4.3282 3.5678Z"                fill="var(--primary)"              />            </svg>          </button>        </div>      </footer>    </div>  );};export default Tooltip;