import React from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';


const styles = StyleSheet.create({
  toastContainer: {
    ...StyleSheet.absoluteFill,
    zIndex: 20,
    paddingHorizontal: 60,
    paddingVertical: 100,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  toast: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00000088',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    elevation: 10,
  },
  whiteToast : {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#727272',
  },
  blackToast: {
    backgroundColor: '#0d0d0d',
  },
});

const Toast = ({
  text,
  position = 'center',
  isWhiteText = false,
  onPress,
}) => {
  const { width } = useWindowDimensions();

  return (
    <View 
      style={[
        styles.toastContainer,
        {
          justifyContent: position,
        },
      ]}
    >
      <TouchableOpacity
        style={[
          styles.toast,
          {
            maxWidth: width * 0.8,
            minWidth: width * 0.4,
          },
          isWhiteText ? styles.blackToast : styles.whiteToast 
        ]}
        onPress={onPress}
      >
        <Text
          style={{
            color: isWhiteText ? 'white' : 'black',
            fontSize: 16,
            textAlign: 'center'
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Toast;





// opacity: appearence,
//           transform: [
//             {
//               translateX: transformValue.interpolate({
//                 inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
//                 outputRange: [0, -10, 10, -10, 10, 0],
//               }),
//             },
//           ],

// const appearence = React.useRef(new Animated.Value(0)).current;
// const transformValue = React.useRef(new Animated.Value(0)).current;

// React.useEffect(() => {
//   Animated.timing(appearence, {
//     toValue: 1,
//     duration: 200,
//     useNativeDriver: true,
//   }).start();
// }, []);

// React.useEffect(() => {
//   if (!shake) return;
//   Animated.timing(transformValue, {
//     toValue: 1,
//     duration: 500,
//     useNativeDriver: true,
//   }).start();
// }, [shake]);
