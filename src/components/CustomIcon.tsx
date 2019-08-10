import React  from 'react';
import * as styles from '../styles/SweetAlertStyles';

const defaultStyle = Object.assign({}, styles.icon, styles.iconCustom);

const CustomIcon: React.FunctionComponent<{
  iconUrl: string,
}> = ({ iconUrl }) => {
  const backgroundImage: string = `url(${iconUrl}`;
  const style = Object.assign({}, defaultStyle,{backgroundImage});
  return <div style={style} />
};

export default CustomIcon;