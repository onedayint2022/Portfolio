/**
 * @file Header
 * @date 2024-04-12
 * @author Andy Jiang
 * @lastModify Andy Jiang 2024-04-12
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from 'react';
import * as style from './style.scss';
import { Avatar } from 'antd';
import Ava from '../../Asserts/avatar.png';
import { layer } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface HeaderProps {
    currentPage: string;
    pageOnChange: (page: string) => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const Header: React.FC<HeaderProps> = ({ ...props }: HeaderProps): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    const headerProps: Array<string> = ['HOME', 'PROJECT', 'CONTACT'];
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.Header_container}>
            {/* <------------------------------------ **** SECTION1 START **** ------------------------------------ */}
            {/** git the brief description for this section */}
            <div className={style.Header_name}>
                <div>
                    <Avatar src={Ava} size={62} />
                </div>
                Chuan Jiang
            </div>
            <div className={style.Header_props}>
                <div className={style.Header_propsBars}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <ul className={style.Header_propsList}>
                    {headerProps.map((p) => (
                        <li
                            id={p}
                            className={props.currentPage == p ? style.Header_selected : undefined}
                            key={`header_${p}`}
                            onClick={() => props.pageOnChange(p)}
                        >
                            {p}
                        </li>
                    ))}
                </ul>
            </div>
            {/* <------------------------------------ **** SECTION1 END **** ------------------------------------ */}
        </div>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
