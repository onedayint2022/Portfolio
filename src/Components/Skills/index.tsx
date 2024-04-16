/**
 * @file Skills
 * @date 2024-04-15
 * @author Andy Jiang
 * @lastModify Andy Jiang 2024-04-15
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from 'react';
import * as style from './style.scss';
import { Progress } from 'antd';
import iReact from '../../Asserts/Icons/react.png';
import iGit from '../../Asserts/Icons/git.png';
import iH5 from '../../Asserts/Icons/h5.png';
import iTs from '../../Asserts/Icons/ts.png';
import iJest from '../../Asserts/Icons/jest.png';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface SkillsProps {
    demo?: string;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const Skills: React.FC<SkillsProps> = ({ ...props }: SkillsProps): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    const icons = [iReact, iH5, iTs, iGit, iJest];
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.Skills_container}>
            {/* <------------------------------------ **** SECTION1 START **** ------------------------------------ */}
            {/** git the brief description for this section */}
            <div className={style.Skills_wrapper}>
                <div className={style.Skills_title}>
                    {`<`}
                    <span>!</span>
                    <span>SKILLS</span>
                    {`>`}
                </div>
                <div className={style.Skills_skillsContainer}>
                    <div>
                        <span>Web Developer</span>
                        <Progress percent={95} showInfo={false} strokeColor={`#aacca7`} />
                        <div>
                            {icons.map((i) => (
                                <img src={i} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <span>Other</span>
                        <Progress percent={85} showInfo={false} strokeColor={`#aacca7`} />
                        <div>
                            {icons.map((i) => (
                                <img src={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* <------------------------------------ **** SECTION1 END **** ------------------------------------ */}
        </div>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
