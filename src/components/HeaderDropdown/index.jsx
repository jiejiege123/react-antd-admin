import { Dropdown } from 'antd';
import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

const HeaderDropdown = ({ overlayClassName: cls, ...restProps }) => 
{
  console.log({ overlayClassName: cls, ...restProps }); // ...restProps  包含了父组件的其他参数
  return (
    <Dropdown overlayClassName={classNames(styles.container, cls)} {...restProps} />
  )
}
export default HeaderDropdown;
