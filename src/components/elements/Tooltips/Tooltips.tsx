import { FC, ReactNode, useRef, ElementRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
import useOutsideClick from '@/hooks/useOutsideClick';

interface TooltipsProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children?: ReactNode;
  content?: ReactNode;
}

const Tooltips: FC<TooltipsProps> = ({ visible = false, setVisible = () => {}, children = <></>, content = <></> }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const wrapperRef = useRef<ElementRef<'div'>>(null);

  const referenceElementRef = useRef<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

  useOutsideClick(wrapperRef, () => setVisible(false));

  const { styles, attributes } = usePopper(referenceElementRef.current, popperElement, {
    strategy: 'fixed',
    placement: 'bottom',
  });

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const tooltipsContainer = isBrowser
    ? createPortal(
        <div
          ref={setPopperElement}
          style={{ ...styles.popper, zIndex: 200 }}
          {...attributes.popper}
          className="bg-white rounded-lg shadow-md p-3 w-48">
          {children}
        </div>,
        document.body,
      )
    : null;

  return (
    <div ref={wrapperRef} className="relative">
      <div
        className="pointer h-4 w-auto m-auto cursor-pointer"
        data-testid="set-visible"
        onClick={() => setVisible(!visible)}
        ref={referenceElementRef}>
        {content}
      </div>
      {visible ? tooltipsContainer : null}
    </div>
  );
};

export default Tooltips;
