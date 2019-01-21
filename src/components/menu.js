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
                        <AniLink cover direction="right" to="projects-2" bg="#131515"><li className='navbar__item'>My Work</li></AniLink>
                        <AniLink cover direction="right" to="what-i-use" bg="#131515"><li className='navbar__item' activeStyle={{ color: "red", }}>What I Use</li></AniLink>
                        <Link to='/contact'  > <li className='navbar__item'>Contact Me</li></Link>


                    </ul>
                    {/* <navBurger /> */}
                </div>
            }
        </>
    )
}

export default Menu
