/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

function App(): React.JSX.Element {
  const x = useSharedValue(0);
  const x2 = useSharedValue(0);
  const x3 = useSharedValue(0);
  const x4 = useSharedValue(0);

  const [s, setS] = useState(0);

  useEffect(() => {
    setInterval(
      () =>
        setS(ss => {
          x.value = ss + 1;
          return ss + 1;
        }),
      50,
    );
  }, [x]);

  const y = useDerivedValue(() => s, [s]);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value % 100}, {translateY: y.value % 100}],
      backgroundColor: 'blue',
      position: 'absolute',
      top: 0,
      left: 0,
      width: 50,
      height: 50,
    };
  }, [x, y]);

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Animated.View style={style} />
    </View>
  );
}

export default App;
