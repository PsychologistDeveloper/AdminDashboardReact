import React, { memo } from 'react';

import ClickOutside from 'Components/ClickOutside';
import CloseBtn from 'Components/CloseBtn';
import { classesToClassName } from 'Utils/ClassName';

import './Popup.style.scss';

export const Popup = (props) => {
  const {
    popupId,
    activePopupId,
    children,
    hookClasses,
    closePopup,
  } = props;

  function renderCloseBtn() {
    return <CloseBtn onClick={closePopup} className="Popup-Close" />;
  }

  return (
    <div className={`Popup-Wrapper ${popupId === activePopupId ? 'Popup-Wrapper_isActive' : ''}`}>
      <ClickOutside onClick={closePopup}>
        <div className={`Popup-Content ${classesToClassName(hookClasses)}`}>
          { children }
          { renderCloseBtn() }
        </div>
      </ClickOutside>
    </div>
  );
};

export default memo(Popup);
