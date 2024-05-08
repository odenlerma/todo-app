import React from 'react';
import { ActivityIndicator, } from 'react-native';

import * as STYLE from '@styles/global'

export const CUSTOM_LOADER = (props) => {
	return(
		<ActivityIndicator size="large" color={props?.loaderColor || STYLE.COLORS.primary}/>
	)
};