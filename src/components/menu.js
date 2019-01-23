import React from 'react'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { navBurger } from '../../public/icons/SVG/icons';
import MenuItem from './MenuItem'

import { Spring, Transition, animated, config } from 'react-spring'




const Menu = ({ isToggled }) => {
    // const vh = '100vh'
    return (
        <>
            <Transition
                native
                items={isToggled}

                from={{
                    // opacity: 1,
                    opacity: .8,
                    // height: 0,
                    // marginTop: 2000
                    marginLeft: 2000
                }}

                enter={{
                    opacity: 1,
                    // height: 1000,
                    // marginTop: 0
                    marginLeft: 0
                }}

                leave={{
                    opacity: 1,
                    // opacity: .8,
                    // height: 0,
                    // marginTop: 2000
                    marginLeft: 2000
                }}

                config={{ duration: 120 }}
            >

                {item =>
                    // isToggled && (props =>
                    item && (props =>

                        <animated.div className="navbar__background" style={props}>
                            <ul className="navbar__list">
                                <MenuItem isToggled={isToggled} name='Home' link='/' direction='right' animationType='cover' delay='0' />
                                <MenuItem isToggled={isToggled} name='My Work' link='/projects' direction='right' animationType='cover' delay='100' />
                                <MenuItem isToggled={isToggled} name='What I Use' link='/what-i-use' direction='right' animationType='cover' delay='200' />
                                <MenuItem isToggled={isToggled} name='Contact Me' link='/contact' direction='right' animationType='cover' delay='300' />
                            </ul>
                            {/* <navBurger /> */}
                        </animated.div>
                    )
                }
            </Transition>
        </>
    )
}

export default Menu

                                // <AniLink cover direction="right" to="/" bg="#131515"> <li className='navbar__item'>Home</li></AniLink>
                                // <AniLink cover direction="right" to="projects" bg="#131515"><li className='navbar__item'>My Work</li></AniLink>
                                // <AniLink cover direction="right" to="what-i-use" bg="#131515"><li className='navbar__item' activeStyle={{ color: "red", }}>What I Use</li></AniLink>
                                // <Link to='/contact'  > <li className='navbar__item'>Contact Me</li></Link>

