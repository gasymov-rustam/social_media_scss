import { memo } from 'react';
import { classNames } from '../../lib';

import cls from './Button.module.scss';

export const ButtonTheme = {
  OUTLINED: 'outlined',
  FILL: 'fill',
};

export const ButtonSize = {
  S: 'small',
  M: 'medium',
  L: 'large',
};

export const Button = memo((props) => {
  const {
    className,
    theme = ButtonTheme.OUTLINED,
    size = ButtonSize.M,
    children,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames({ cls: cls.btnLib, additional: [className, cls[theme], cls[size]] })}
      {...otherProps}
    >
      {children}
    </button>
  );
});
