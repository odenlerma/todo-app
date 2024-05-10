import { PixelRatio, Dimensions} from 'react-native';
import moment from 'moment';

export const dateFormat = 'YYYY-MM-DD';
export const dateformatdisplay = 'MMMM DD, YYYY'

export const convertDate = (date, format = dateformatdisplay) => {
    if(isEmpty(date)) return '-'
	return moment(date).format(format);
}

// IS EMPTY
export const isEmpty = (data) => {
    if(!Object.is(NaN, data) && data != undefined && data != "undefined" && data != null && data?.length != 0 && data !== '' && data !== ' ' && data != 'null' && data != '[]' && data != {} && data != '0000-00-00 00:00:00' && data != 0 && data != '0000-00-00'){
            return false // not empty
    }
 
    return true // empty
}

export const randomID = () => {
    const timestamp = Date.now().toString(36); // Convert current timestamp to base36 string
    const randomNum = Math.random().toString(36).substr(2, 5); // Generate random string
    return `${timestamp}-${randomNum}`;
}

export const sort = (arr, type, param) => {
    let newArr = [...arr]
    let sortedArray = newArr.sort((a, b) => {
        let fa = a[param].toLowerCase(),
            fb = b[param].toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    if(type == 'asc'){
        return sortedArray
    }else if(type == 'desc'){
        return sortedArray.reverse()
    }
}
