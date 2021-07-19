import React from 'react'
import { View, Text } from 'react-native'

import MaterialIndicatorWM from './Loaders/MaterialIndicatorWM';;
import WaveIndicatorWM from './Loaders/WaveIndicatorWM';

export default function WaterLoader(props) {
    const { isVisible } = props;
    return (
        <View>
            <MaterialIndicatorWM isVisible={isVisible} />
            <WaveIndicatorWM isVisible={isVisible} />
        </View>
    )
}
