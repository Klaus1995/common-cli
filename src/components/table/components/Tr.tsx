import React, { useMemo, FC, PropsWithChildren } from 'react';
import styles from '../index.module.less';

const Tr: FC<PropsWithChildren<any>> = ({ children }) => {
  return useMemo(() => <tr className={styles.tr}>{children}</tr>, [children]);
};

export default Tr;
