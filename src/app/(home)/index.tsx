import {View , Text} from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const index = () => {
    return (
        <GestureHandlerRootView>
        <View>
            <Text>index</Text>
        </View>
        </GestureHandlerRootView>
    );
};

export default index;