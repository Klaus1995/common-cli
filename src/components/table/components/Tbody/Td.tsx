import React, { useMemo, FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import { isEmpty } from '@/utils';
import { ColumnExt } from '../../type';
import styles from '../../index.module.less';

interface TdProps {
  data: ColumnExt;
}

const Td: FC<PropsWithChildren<TdProps>> = ({ data, children }) => {
  return useMemo(() => {
    const classNames = cn(styles.cell, {
      [styles['fixed-left']]: !isEmpty(data.left),
      [styles['fixed-right']]: !isEmpty(data.right),
    });
    return (
      <td className={classNames} style={{ left: data.left, right: data.right }}>
        {children}
      </td>
    );
  }, [children, data.left, data.right]);
};

export default Td;