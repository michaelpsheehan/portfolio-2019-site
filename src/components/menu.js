import React from 'react'
import MenuItem from './MenuItem'

import { Transition, animated, config } from 'react-spring'




const Menu = ({ isToggled }) => {

    return (
        <>
            <Transition
                native
                items={isToggled}

                from={{
                    opacity: .8,
                    marginLeft: 2000
                }}

                enter={{
                    opacity: 1,
                    marginLeft: 0
                }}

                leave={{
                    opacity: 1,
                    marginLeft: 2000
                }}

                config={{ duration: 120 }}
            >

                {item =>
                    item && (props =>
                        <animated.div className="navbar__background" style={props}>
                            <ul className="navbar__list">
                                <MenuItem isToggled={isToggled} name='Home' link='/' direction='left' animationType='cover' delay='0' activeStyle={{ color: "red", }} />
                                <MenuItem isToggled={isToggled} name='My Work' link='/projects' direction='right' animationType='cover' delay='100' />
                                <MenuItem isToggled={isToggled} name='What I Use' link='/what-i-use' direction='down' animationType='cover' delay='200' />
                                <MenuItem isToggled={isToggled} name='Contact Me' link='/contact' direction='up' animationType='cover' delay='300' />
                            </ul>
                        </animated.div>
                    )
                }
            </Transition>
        </>
    )
}

export default Menu

