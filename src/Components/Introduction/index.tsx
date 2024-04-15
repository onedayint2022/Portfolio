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
import { Row, Col, Image } from 'antd';
import Ava from '../../Asserts/ava.png';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

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
    const icons = [faGithub, faLinkedinIn, faDownload];
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.Intro_container}>
            {/* <------------------------------------ **** SECTION1 START **** ------------------------------------ */}
            {/** git the brief description for this section */}
            <Row>
                <Col span={10}>
                    <div className={style.Intro_baseContainer}>
                        <Image src={Ava} className={style.Intro_baseImg} />
                        <div className={style.Intro_baseName}>CHUAN JIANG</div>
                        <div className={style.Intro_baseLink}>
                            {icons.map((icon, i) => (
                                <div key={`intro_base${i}`}>
                                    <FontAwesomeIcon icon={icon} />
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
                <Col span={14}>
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
                                <strong>three years</strong>
                                {` of experience.`}
                            </div>
                            <div>
                                {`> Proficient in `}
                                <strong>TypeScript</strong>
                                {`,`}
                                <strong>React</strong>
                                {`  framework, and associated development tools.`}
                            </div>
                            <div>
                                {`> Strong foundation in `}
                                <strong>coding</strong>
                                {` and `}
                                <strong>logical</strong>
                                {` thinking.`}
                            </div>
                            <div>
                                {`> Passionate about front-end development and actively pursuing `}
                                <strong>self-learning</strong>
                                {` in full-stack development.`}
                            </div>
                            <div>
                                {`> Effective team player with `}
                                <strong>problem-solving</strong>
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
                </Col>
            </Row>

            {/* <------------------------------------ **** SECTION1 END **** ------------------------------------ */}
        </div>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
