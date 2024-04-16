/**
 * @file ProjectCard
 * @date 2024-04-16
 * @author Andy Jiang
 * @lastModify Andy Jiang 2024-04-16
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from 'react';
import * as style from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface ProjectCardProps {
    name: string;
    date: string;
    location: string;
    resps: Array<string>;
    title: string;
    keywords: Array<string>;
    background: string;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const ProjectCard: React.FC<ProjectCardProps> = ({
    ...props
}: ProjectCardProps): JSX.Element => {
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
        <div className={style.ProjectCard_container}>
            {/* <------------------------------------ **** SECTION1 START **** ------------------------------------ */}
            {/** git the brief description for this section */}
            <div className={style.ProjectCard_name}>{props.name}</div>
            <div className={style.ProjectCard_date}>{props.date}</div>
            <div className={style.ProjectCard_location}>{props.location}</div>
            <div className={style.ProjectCard_title}>{props.title}</div>
            <div className={style.ProjectCard_bg}>Project Background</div>
            <div className={style.ProjectCard_background}>{props.background}</div>
            <div className={style.ProjectCard_res}>Responsibilities</div>
            <div className={style.ProjectCard_resps}>
                {props.resps.map((res) => (
                    <div>{res}</div>
                ))}
            </div>
            <div className={style.ProjectCard_keywords}>
                {props.keywords.map((keyword) => (
                    <div>{keyword}</div>
                ))}
            </div>
            {/* <------------------------------------ **** SECTION1 END **** ------------------------------------ */}
        </div>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
