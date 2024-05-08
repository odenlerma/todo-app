import React, { Component, useState, useEffect, useCallback } from 'react';
import LottieView from 'lottie-react-native';

import * as CONSTANTS from '@helper/constants' 

export const CUSTOM_LOTTIE = ({
    size = 150,
    source = CONSTANTS.LOTTIE_NO_RESULT
}, props) => {

	return(
		<LottieView
	        source={source}
	        style={{height: size, width: size}}
	        autoPlay
	        {...props}
	    />
	)
}