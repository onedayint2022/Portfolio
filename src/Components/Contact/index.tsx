/**
 * @file Contact
 * @date 2024-04-16
 * @author Andy Jiang
 * @lastModify Andy Jiang 2024-04-16
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from 'react';
import * as style from './style.scss';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface ContactProps {
    demo?: string;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const Contact: React.FC<ContactProps> = ({ ...props }: ContactProps): JSX.Element => {
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
        <div className={style.Contact_container}>
            {/* <------------------------------------ **** SECTION1 START **** ------------------------------------ */}
            {/** git the brief description for this section */}
            <div className={style.Contact_header}>
                <div>
                    <span>{`<0451715218/>`}</span>
                </div>
                <div>
                    <span>{`onedayint0308@gmail.com`}</span>
                </div>
            </div>
            <div className={style.Contact_address}>{`161 Emu Bank, Belconnen, ACT, 2617`}</div>
            <div className={style.Contact_mapWrapper}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2021.8918236759055!2d149.06457202008073!3d-35.23618812101313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b17ad7171bc041d%3A0x5a14748fa9790d53!2s161%20Emu%20Bank!5e0!3m2!1sen!2sau!4v1713263051475!5m2!1sen!2sau"
                    className={style.Contact_map}
                    loading="lazy"
                ></iframe>
            </div>
            <div className={style.Contact_thanks}>
                <span>{`>I sincerely appreciate the opportunity to showcase my work and qualifications. Please feel free to reach out to me if you believe I am a suitable candidate for the position. I am eager to discuss how my skills and experience align with the requirements of the role and how I can contribute to your team. Looking forward to the possibility of working together.<`}</span>
            </div>
            <div className={style.Contact_footer}>
                <div>
                    {`<`}
                    <span>THANK YOU</span>
                    {` FOR TAKING TIME`}
                </div>
                <div>{`TO`}</div>
                <div>
                    {`REVIEW MY `}
                    <span>PORTFOLIO</span>
                    {`/>`}
                </div>
            </div>

            {/* <------------------------------------ **** SECTION1 END **** ------------------------------------ */}
        </div>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
