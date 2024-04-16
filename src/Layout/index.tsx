/**
 * @file Layout
 * @date 2024-04-12
 * @author Andy Jiang
 * @lastModify Andy Jiang 2024-04-12
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from 'react';
import * as style from './style.scss';
import { Header } from '../Components/Header';
import { Introduction } from '../Components/Introduction';
import { Skills } from '../Components/Skills';
import { Education } from '../Components/Education';
import { Experience } from '../Components/Experience';
import { Work } from '../Components/Work';
import { Project } from '../Components/Project';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface LayoutProps {
    demo?: string;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const Layout: React.FC<LayoutProps> = ({ ...props }: LayoutProps): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [page, setPage] = useState('HOME');
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    const pageOnChange = (page: string) => {
        setPage(page);
    };
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.layout_container}>
            {/* <------------------------------------ **** SECTION1 START **** ------------------------------------ */}
            {/** git the brief description for this section */}
            <Header pageOnChange={pageOnChange} currentPage={page} />
            {page == 'HOME' && (
                <>
                    <Introduction />
                    <Skills />
                    <Education />
                    <Experience />
                </>
            )}
            {page == 'PROJECT' && (
                <>
                    <Work />
                    <Project />
                </>
            )}

            {/* <------------------------------------ **** SECTION1 END **** ------------------------------------ */}
        </div>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
