/**
 * @file Introduction
 * @date 2024-04-15
 * @author Andy Jiang
 * @lastModify Andy Jiang 2024-04-15
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from 'react';
import * as style from './style.scss';
import { Image } from 'antd';
import Ava from '../../Asserts/avatar.png';

import Github from '../../Asserts/Icons/github.svg';
import Linkedin from '../../Asserts/Icons/linkedin.svg';
import Download from '../../Asserts/Icons/download.svg';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface IntroductionProps {
    demo?: string;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const Introduction: React.FC<IntroductionProps> = ({
    ...props
}: IntroductionProps): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    const icons = [Github, Linkedin, Download];
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.Intro_container}>
            {/* <------------------------------------ **** SECTION1 START **** ------------------------------------ */}
            {/** git the brief description for this section */}

            <div className={style.Intro_baseContainer}>
                <Image
                    src={Ava}
                    className={style.Intro_baseImg}
                    preview={{ toolbarRender: undefined }}
                />
                <div className={style.Intro_baseName}>CHUAN JIANG</div>
                <div className={style.Intro_baseLink}>
                    {icons.map((icon, i) => (
                        <div key={`intro_base${i}`}>
                            <img src={icon} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={style.Intro_introContainer}>
                <div>
                    {`<`}
                    <span className={style.Intro_introEx}>!</span>
                    {`HELLO>`}
                </div>
                <div>
                    {`<I'M`}
                    <span className={style.Intro_introName}>CHUAN JIANG</span>
                    {`/>`}
                </div>
                <div className={style.Intro_introContext}>
                    <div>
                        {`> Highly skilled and motivated Front-end Developer with `}
                        <span>three years</span>
                        {` of experience.`}
                    </div>
                    <div>
                        {`> Proficient in `}
                        <span>TypeScript</span>
                        {`,`}
                        <span>React</span>
                        {`  framework, and associated development tools.`}
                    </div>
                    <div>
                        {`> span foundation in `}
                        <span>coding</span>
                        {` and `}
                        <span>logical</span>
                        {` thinking.`}
                    </div>
                    <div>
                        {`> Passionate about front-end development and actively pursuing `}
                        <span>self-learning</span>
                        {` in full-stack development.`}
                    </div>
                    <div>
                        {`> Effective team player with `}
                        <span>problem-solving</span>
                        {` abilities, eager to tackle challenges and grow in a dynamic environment`}
                    </div>
                    <div />
                </div>

                <div>
                    {`<`}
                    <span className={style.Intro_introTitle}>FRONT-END</span>
                    {`DEVELOPER/>`}
                </div>
            </div>

            {/* <------------------------------------ **** SECTION1 END **** ------------------------------------ */}
        </div>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
