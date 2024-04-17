/**
 * @file Experience
 * @date 2024-04-15
 * @author Andy Jiang
 * @lastModify Andy Jiang 2024-04-15
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useEffect, useRef, useState } from 'react';
import * as style from './style.scss';
import Go from '../../Asserts/Icons/go.png';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface ExperienceProps {
    demo?: string;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const Experience: React.FC<ExperienceProps> = ({
    ...props
}: ExperienceProps): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    });
    const [moveX, setMoveX] = useState(0);
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    const loop = Array.from('theTimes');

    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    const handleScroll = () => {
        setMoveX(document.documentElement.scrollTop);
    };
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.Experience_container}>
            {/* <------------------------------------ **** SECTION1 START **** ------------------------------------ */}
            {/** git the brief description for this section */}
            <div className={style.Experience_title} style={{ left: `-${moveX}px` }}>
                {loop.map((_, i) => (
                    <div key={`experience_${i}`}>
                        <div>
                            <span>WORK</span> EXPERIENCE
                        </div>
                        <div>
                            <span>PROJECT</span> EXPERIENCE
                        </div>
                    </div>
                ))}
            </div>
            <div className={style.Experience_titleBar}>
                <div>
                    View All
                    <img src={Go} />
                </div>
            </div>
            <div className={style.Experience_keywords}></div>
            {/* <------------------------------------ **** SECTION1 END **** ------------------------------------ */}
        </div>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
