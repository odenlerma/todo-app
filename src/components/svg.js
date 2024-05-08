
import { SvgCss } from 'react-native-svg/css';
import React from 'react';

import { ADD_SVG } from '@assets/svg/add';
import { CHECK_SVG } from '@assets/svg/check';
import { CLOSE_SVG } from '@assets/svg/close';
import { DELETE_SVG } from '@assets/svg/delete';
import { EDIT_SVG } from '@assets/svg/edit';
import { LOGO_SVG } from '@assets/svg/logo';
import { MARKED_SVG } from '@assets/svg/marked';
import { NOTMARKED_SVG } from '@assets/svg/not-marked';
import { SEARCH_SVG } from '@assets/svg/search';
import { SORT_SVG } from '@assets/svg/sort';
import { UNCHECKED_SVG } from '@assets/svg/uncheck';


const DEFAULT_SVG_SIZE = 42;

// ADD
const ADD = ADD_SVG
const ADDSVGCSS = ({size=DEFAULT_SVG_SIZE}) => {
    return(
        <SvgCss xml={ADD} width={size} height={size}/>
    )
}   
export const CUSTOM_SVG_ADD= React.memo(ADDSVGCSS)

// CHECK
const CHECK = CHECK_SVG
const CHECKSVGCSS = ({size=DEFAULT_SVG_SIZE}) => {
    return(
        <SvgCss xml={CHECK} width={size} height={size}/>
    )
}   
export const CUSTOM_SVG_CHECK= React.memo(CHECKSVGCSS)

// CLOSE
const CLOSE = CLOSE_SVG
const CLOSESVGCSS = ({size=DEFAULT_SVG_SIZE}) => {
    return(
        <SvgCss xml={CLOSE} width={size} height={size}/>
    )
}   
export const CUSTOM_SVG_CLOSE= React.memo(CLOSESVGCSS)

// DELETE
const DELETE = DELETE_SVG
const DELETESVGCSS = ({size=DEFAULT_SVG_SIZE}) => {
    return(
        <SvgCss xml={DELETE} width={size} height={size}/>
    )
}   
export const CUSTOM_SVG_DELETE= React.memo(DELETESVGCSS)

// EDIT
const EDIT = EDIT_SVG
const EDITSVGCSS = ({size=DEFAULT_SVG_SIZE}) => {
    return(
        <SvgCss xml={EDIT} width={size} height={size}/>
    )
}   
export const CUSTOM_SVG_EDIT= React.memo(EDITSVGCSS)

// LOGO
const LOGO = LOGO_SVG
const LOGOSVGCSS = ({size=DEFAULT_SVG_SIZE}) => {
    return(
        <SvgCss xml={LOGO} width={size} height={size}/>
    )
}   
export const CUSTOM_SVG_LOGO= React.memo(LOGOSVGCSS)


// MARKED
const MARKED = MARKED_SVG
const MARKEDSVGCSS = ({size=DEFAULT_SVG_SIZE}) => {
    return(
        <SvgCss xml={MARKED} width={size} height={size}/>
    )
}   
export const CUSTOM_SVG_MARKED= React.memo(MARKEDSVGCSS)


// NOTMARKED
const NOTMARKED = NOTMARKED_SVG
const NOTMARKEDSVGCSS = ({size=DEFAULT_SVG_SIZE}) => {
    return(
        <SvgCss xml={NOTMARKED} width={size} height={size}/>
    )
}   
export const CUSTOM_SVG_NOTMARKED= React.memo(NOTMARKEDSVGCSS)

// SEARCH
const SEARCH = SEARCH_SVG
const SEARCHSVGCSS = ({size=DEFAULT_SVG_SIZE}) => {
    return(
        <SvgCss xml={SEARCH} width={size} height={size}/>
    )
}   
export const CUSTOM_SVG_SEARCH= React.memo(SEARCHSVGCSS)

// SORT
const SORT = SORT_SVG
const SORTSVGCSS = ({size=DEFAULT_SVG_SIZE}) => {
    return(
        <SvgCss xml={SORT} width={size} height={size}/>
    )
}   
export const CUSTOM_SVG_SORT= React.memo(SORTSVGCSS)


// UNCHECKED
const UNCHECKED = UNCHECKED_SVG
const UNCHECKEDSVGCSS = ({size=DEFAULT_SVG_SIZE}) => {
    return(
        <SvgCss xml={UNCHECKED} width={size} height={size}/>
    )
}   
export const CUSTOM_SVG_UNCHECKED= React.memo(UNCHECKEDSVGCSS)