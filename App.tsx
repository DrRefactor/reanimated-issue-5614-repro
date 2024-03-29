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
import {useSharedValue} from 'react-native-reanimated';

function App(): React.JSX.Element {
  const x = useSharedValue(0);

  const [s, setS] = useState(0);

  useEffect(() => {
    setInterval(() => setS(ss => ss + 1), 50);
  }, [x]);

  useEffect(() => {
    x.value = s;
  }, [s, x]);

  return <View style={{flex: 1, backgroundColor: 'red'}} />;
}

export default App;
