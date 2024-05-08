import { PixelRatio, Dimensions} from 'react-native';

const { 
    width: SCREEN_WIDTH, 
    height: SCREEN_HEIGHT 
} = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;

export const normalize = (size, based = 'width') => {
	//let heightBaseScale = getHeightBaseScale() 
	let newSize = newSize = (based === 'height') ? 
	size * heightBaseScale : size * widthBaseScale;
	return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width  pixel
export const widthPixel = (size) => {
	return normalize(size, 'width')
	return size;
};
//for height  pixel
export const heightPixel = (size) => {
	return normalize(size, 'height');
};


//for font pixel
export const scalingPixel = (size) => {
    console.log('scalingPixel ==>', size)
	return heightPixel(size);
};

//for Margin and Padding vertical pixel
export const pixelSizeVertical = (size) => {
    return heightPixel(size);
};

//for Margin and Padding horizontal pixel
export const pixelSizeHorizontal = (size) => {
    return widthPixel(size);
};

// IS EMPTY
export const isEmpty = (data) => {
    if(!Object.is(NaN, data) && data != undefined && data != "undefined" && data != null && data?.length != 0 && data !== '' && data !== ' ' && data != 'null' && data != '[]' && data != {} && data != '0000-00-00 00:00:00' && data != 0 && data != '0000-00-00'){
            return false // not empty
    }
 
    return true // empty
}