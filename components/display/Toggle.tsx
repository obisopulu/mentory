import { useAppContext } from '@/context/AppContext';
import { View, StyleSheet, Text, Pressable } from 'react-native';

export default function Toggle() {
  const {context, updateUnit} = useAppContext()
    
  return (
    <View style={styles.container}>
    <Pressable
      style={({ pressed }) => [
        [styles.button, styles.left, context.unit == 'c' && styles.selected],
        {
          opacity: pressed ? 0.5 : 1,
          elevation: pressed ? 2 : 4,
        },
      ]} 
      onPress={() => updateUnit('c')}
    >
     <Text style={[styles.text, context.unit == 'c' && styles.selected]}>&#8451;</Text>
    </Pressable>
    <Pressable
      style={({ pressed }) => [
        [styles.button, styles.right, context.unit == 'f' && styles.selected],
        {
          opacity: pressed ? 0.5 : 1,
          elevation: pressed ? 2 : 4,
        },
      ]} 
      onPress={() => updateUnit('f')}
    >
     <Text style={[styles.text, context.unit == 'f' && styles.selected]}>&#8457;</Text>
    </Pressable>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '60%', 
    backgroundColor: '#EEE', 
    borderRadius: 12, 
    marginHorizontal: 30,
    display: 'flex', 
    flexDirection: 'row', 
    alignContent: 'stretch',
    borderWidth: 1,
    borderColor: '#CCCCCC'
  },
  button: {
    width: '50%', 
    textAlign: 'center', 
    padding: 10,
    fontSize: 18
  },
  text: {
    textAlign: 'center', 
  },
  left: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  right: {
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  selected: {
    backgroundColor: '#144884',
    color: 'white'
  }
});