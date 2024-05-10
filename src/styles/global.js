import { PixelRatio, StyleSheet, Platform, Image} from 'react-native';

// CUSTOM IMPORTS
import { scalingPixel } from '@helper/utils'


export const ANIMATIONMS = 300;

export const BORDERRADIUS = 12;
export const BORDERWIDTH = 2;
export const FONTWEIGHT = '500';

export const COLORS = {
	default_background: '#FAFFFE',
	primary: '#4793AF',
    secondary: '#FFC470',
    white: '#FAFFFE',
	black: '#000D16',
    gray: '#849399',
    success: '#00993D',
	warning: '#ff6700',
    danger: '#D73535',
	info: '#e3f6f5',
};

export const SPACING = {
	default: 16,
	s1: 8,
	s2: 10,
	s3: 12,
	s4: 16,
	s5: 20,
	s6: 24,
	s7: 32,
	s8: 48,
	s9: 50,
	s10: 60,
	s11: 100
}

export const SIZE = {
	xsm: 10,
	sm: 12,
    default: 16,
    secondary: 24,
    m: 28,
	lg2: 32,
    lg: 36,
    xl: 42,
	xxl: 48
}



export const FLEX = StyleSheet.create({
	"FLEX1": {
		flex: 1,
	},
	"FLEXGROW1": {
		flexGrow: 1,
	},
	"CENTER": {
		alignItems: 'center',
		justifyContent: 'center',
	},
	"CENTER_COLUMN": {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	"CENTER_COLUMN_END": {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	"CENTER_ROW": {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	"CENTER_ROW_END": {
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
	"ROW" : {
		flexDirection: 'row'
	},
	"ENDTOEND_COLUMN": {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	"ENDTOEND_COLUMN_LEFT": {
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
	},
	"ENDTOEND_ROW": {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	"ENDTOEND_ROW_START": {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	"ENDTOEND_ROW_END": {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	"TOP_COLUMN":{
		flexDirection: 'column',
		justifyContent: 'center',
	},
	"TOP_ROW":{
		flexDirection: 'row',
		alignItems: 'center',
	},
	"LEFT_CENTER_ROW":{ 
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	"LEFT_TOP_ROW":{ 
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start'
	},
	"LEFT_BOTTOM_ROW":{
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'flex-start'
	},
	"RIGHT_CENTER_ROW":{ 
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end', 
	},
	"RIGHT_TOP_ROW":{ 
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-end', 
	},
    "RIGHT_BOTTOM_ROW":{
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'flex-end'
	},
	"LEFT_CENTER_COLUMN":{
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	"LEFT_BOTTOM_COLUMN":{
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start'
	},
	"LEFT_TOP_COLUMN":{ 
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start'
	},
	"RIGHT_CENTER_COLUMN":{
		flexDirection: 'column',
		alignItems: 'flex-end',
		justifyContent: 'center', 
	},
	"RIGHT_TOP_COLUMN":{
		flexDirection: 'column',
		alignItems: 'flex-end',
		justifyContent: 'flex-start', 
	},
	"TOP_CENTER_COLUMN":{
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start', 
	},
	"RIGHT_BOTTOM_COLUMN": {
		flexDirection: 'column',
		alignItems: 'flex-end',
		justifyContent: 'flex-end', 
	},
	"SPACEAROUND_CENTER_COLUMN": {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	"SPACEAROUND_CENTER_ROW": {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	"SPACEAROUND_TOP_ROW": {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'flex-start'
	},
})

export const TEXTCOLOR = StyleSheet.create({
	"color_black": {
	  color: COLORS.black
	},
	"color_white": {
	  color: COLORS.white
	},
	"color_gray":{
	  color: COLORS.gray
	},
	"color_primary":{
	  color: COLORS.primary
	},
    "color_secondary":{
        color: COLORS.secondary
      },
	"color_danger":{
	  color: COLORS.danger
	},
	"color_info":{
		color: COLORS.info
	  },
	"color_warning":{
	  color: COLORS.warning
	},
	"color_success":{
	  color: COLORS.success
	},
  })

export const TEXTFONTFAMILY = {
	"text_family_primary": {
		fontFamily: Platform.OS == 'android' ? 'Roboto' : 'Arial'
	},
}

export const TEXTFONTSIZE = {
	"xsm": {
		fontSize: SIZE.xsm,
	},
	"sm": {
		fontSize: SIZE.sm,
	},
	"default": {
		fontSize: SIZE.default,
	},
	"secondary": {
		fontSize: SIZE.secondary,
	},
	"m": {
		fontSize: SIZE.m,
	},
	"lg": {
		fontSize: SIZE.lg,
	},
	"lg2": {
		fontSize: SIZE.lg2,
	},
	"xl": {
		fontSize: SIZE.xl,
	},
}

export const TEXTFONTWEIGHT = {
	"bold": {
		fontWeight: Platform.OS =='ios' ? "500" : 'bold'
	},
}

export const BACKGROUND = StyleSheet.create({
    "bg_default": {
        backgroundColor: COLORS.default_background
    },
    "bg_white":{
        backgroundColor: COLORS.white
    },
    "bg_primary" :{
        backgroundColor: COLORS.primary
    },
    "bg_danger" :{
        backgroundColor: COLORS.danger
    },
    "bg_success": {
        backgroundColor: COLORS.success
    },
    "bg_secondary": {
        backgroundColor: COLORS.secondary
    },
    "bg_gray": {
        backgroundColor: COLORS.gray
    },
    "bg_info": {
        backgroundColor: COLORS.info
    },
})

export const CONTAINER = StyleSheet.create({
	main: {
		paddingHorizontal: SPACING.default,
		flex: 1
	}
})

export const W100 = {
	width: '100%'
}

