import { StyleSheet } from 'react-native';

export default function TextInput() {

  return (
    <div style={styles.container}>
        <input
          name="price"
          type="text"
          placeholder="enter location"
          style={styles.input}
        />
    </div>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 8,
    paddingBottom: 2,
    borderWidth: 0,
    borderRadius: 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 2
  },
  container: {
    display: 'flex',
    paddingTop: 100,
    justifyContent: 'center'
  }
});