import React, { ReactElement } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { MyTextProps } from '@/utils/types';

const MyText: React.FC<MyTextProps> = ({ children, style }) => {

  let content:ReactElement;
  
  switch (style) {
    case 'xl':
      content = <Text style={styles.xl}>{children}</Text>;
      break;
    case 'l':
      content = <Text style={styles.l}>{children}</Text>;
      break;
    case 'm':
      content = <Text style={styles.m}>{children}</Text>;
      break;
    default:
      content = <Text style={styles.s}>{children}</Text>;
      break;
  }
  
  return (
    <View>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  s: {
    fontFamily: 'interRegular',
    fontSize: 20,
  },
  m: {
    marginTop: 50,
    fontFamily: 'interBlack',
    fontSize: 48,
  },
  l: {
    fontFamily: 'interExtraLight',
    fontSize: 64,
  },
  xl: {
    fontFamily: 'interExtraLight',
    fontSize: 120,
  },
});
export default MyText;