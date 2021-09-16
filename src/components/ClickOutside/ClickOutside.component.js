import {
  Children,
  cloneElement,
  useEffect,
  useRef,
  memo,
} from 'react';

export const ClickOutside = (props) => {
  const { children, onClick = () => {} } = props;

  const childrenRefs = Children.map(children, () => useRef());

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  });

  function handleClick(e) {
    const { target } = e;

    if (childrenRefs.every(({ current }) => !current.contains(target))) {
      onClick();
    }
  }

  return Children.map(children, (element, i) => cloneElement(element, { ref: childrenRefs[i] }));
};

export default memo(ClickOutside);
