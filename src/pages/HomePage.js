import React, {useEffect, useState} from 'react';
import { View, Text, Button } from 'react-native';

import * as STYLE from '@styles/global';
import * as COMPONENTS from '@components'

export default () => {
    return(
        <View style={STYLE.CONTAINER.main}>
            <Text>Home Page</Text>
            <COMPONENTS.CUSTOM_BUTTON
                type="secondary"
                text="Hello world2"
            />
             <COMPONENTS.CUSTOM_BUTTON
                type="secondary"
                text="Hello world2"
                icon="add"
            />
            <COMPONENTS.CUSTOM_INPUT title="test" placeholder="Hello" />
        </View>
    )
}