import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Transition, animated } from 'react-spring'




const MenuItem = ({ isToggled, name, link, delay, direction, animationType, activeStyle }) => {

    return (
        <>
            <Transition
                native
                items={isToggled}

                from={{
                    opacity: 0,
                    overflow: 'hidden',
                    height: 0,
                    transform: `translateY(121px)`
                }}

                enter={{
                    opacity: 1,
                    height: 'auto',
                    transform: `translateY(0)`
                }}

                leave={{
                    opacity: .8,
                }}

                delay={delay}
            >

                {item =>
                    item && (props =>
                        <animated.div style={props}>

                            <AniLink
                                cover
                                direction={direction}
                                to={link}
                                bg="#131515"
                                activeClassName="active"
                            >
                                <li className="navbar__item"  > {name}</li></AniLink>
                        </animated.div>
                    )
                }
            </Transition>
        </>
    )
}

export default MenuItem
