/**
 * @file Education
 * @date 2024-04-15
 * @author Andy Jiang
 * @lastModify Andy Jiang 2024-04-15
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from 'react';
import * as style from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface EducationProps {
    demo?: string;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const Education: React.FC<EducationProps> = ({ ...props }: EducationProps): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.Education_container}>
            {/* <------------------------------------ **** SECTION1 START **** ------------------------------------ */}
            {/** git the brief description for this section */}
            <div className={style.Education_location}>
                <div>Sydney</div>
                <div>{`Feb. 2018 - Jan. 2020`}</div>
            </div>
            <div className={style.Education_name}>University Of New South Wales</div>
            <div className={style.Education_major}>
                Master of Information Technology (Artificial Intelligence)
            </div>
            <div className={style.Education_location}>
                <div>China</div>
                <div>{`Sep. 2012 - Jun. 2016`}</div>
            </div>
            <div className={style.Education_name}>
                Chongqing University of Posts and Telecommunications
            </div>
            <div className={style.Education_major}>Bachelor of Computer Science and Technology</div>
            <div className={style.Education_footer}>{`<!EDUCATION>`}</div>
            {/* <------------------------------------ **** SECTION1 END **** ------------------------------------ */}
        </div>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
