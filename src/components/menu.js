import React from 'react'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { navBurger } from '../../public/icons/SVG/icons';

const Menu = ({ isToggled }) => {
    // const isToggled = props.isToggled;
    // console.log(isToggled);
    return (
        <>
            {
                isToggled &&

                <div className="navbar__background">
                    <ul className="navbar__list">

                        <AniLink cover direction="right" to="/" bg="#131515"> <li className='navbar__item'>Home</li></AniLink>
                        <li className='navbar__item'>My Work</li>
                        <li className='navbar__item'>What I Use</li>
                        <Link to='/'> <li className='navbar__item'>Contact Me</li></Link>


                    </ul>
                    {/* <navBurger /> */}
                </div>
            }
        </>
    )
}

export default Menu
