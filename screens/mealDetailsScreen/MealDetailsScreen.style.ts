import { StyleSheet } from 'react-native';

const S = StyleSheet.create({
  scrollWrap: {
    marginBottom: 32,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    bottom: '95%',
    right: 18,
    zIndex: 9,
  },
  img: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailOuterWrap: {
    alignItems: 'center',
  },
  detailWrap: {
    width: '80%',
  },
  detailsText: {
    color: 'white',
  },
});

export { S };
