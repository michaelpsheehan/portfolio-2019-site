import React from 'react'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { navBurger } from '../../public/icons/SVG/icons';

const Icon = ({ name, iconName }) => {
    // const isToggled = props.isToggled;
    // console.log(isToggled);
    return (
        <>

            <div className="tools-icon" >
                <div className="tools-icon__text">{name}</div>

                <div className="tools-icon__icon">{iconName}</div>

            </div>


        </>
    )
}

export default Icon