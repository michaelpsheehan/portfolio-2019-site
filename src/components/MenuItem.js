import React from 'react'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { navBurger } from '../../public/icons/SVG/icons';

import { Spring, Transition, animated, config } from 'react-spring'




const MenuItem = ({ isToggled, name, link, delay, direction, animationType }) => {
    // const vh = '100vh'
    return (
        <>
            <Transition
                native
                items={isToggled}

                from={{
                    // opacity: 1,
                    opacity: 0,
                    // position: 'absolute', 
                    overflow: 'hidden',
                    height: 0,
                    transform: `translateY(121px)`



                    // height: 0,
                    // marginTop: 2000
                    // marginLeft: 2000
                }}

                enter={{
                    opacity: 1,
                    // position: 'static',
                    height: 'auto',
                    transform: `translateY(0)`


                    // height: 1000,
                    // marginTop: 0
                    // marginLeft: 0
                }}

                leave={{
                    opacity: .8,
                    // opacity: .8,
                    // height: 0,
                    // marginTop: 2000
                    // marginLeft: 2000
                }}

                delay={delay}

            // config={{ duration: 120 }}
            >

                {item =>
                    // isToggled && (props =>
                    item && (props =>

                        <animated.div style={props}>


                            <AniLink cover direction={direction} to={link} bg="#131515" > <li className="navbar__item">{name}</li></AniLink>



                            {/* <navBurger /> */}
                        </animated.div>
                    )
                }
            </Transition>
        </>
    )
}

export default MenuItem

{/* <AniLink cover direction="right" to="projects" bg="#131515"><li className='navbar__item'>My Work</li></AniLink>
<AniLink cover direction="right" to="what-i-use" bg="#131515"><li className='navbar__item' activeStyle={{ color: "red", }}>What I Use</li></AniLink>
<Link to='/contact'  > <li className='navbar__item'>Contact Me</li></Link> */}