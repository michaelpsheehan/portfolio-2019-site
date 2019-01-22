import React from 'react'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { navBurger } from '../../public/icons/SVG/icons';
import { Spring, Transition, config, animated } from 'react-spring';

const Icon = ({ name, iconName, delay }) => {
    // const isToggled = props.isToggled;
    // console.log(isToggled);
    return (
        <>


            <Spring
                from={{ opacity: 0, transform: 'translateY(20vh)' }}
                to={{ opacity: 1, transform: 'translateY(0)' }}
                delay={delay}
                // config={config.wobbly}
                config={config.gentle}
            // config={config.molasses}
            // leave={{ opacity: 0 }}
            >
                {props => (
                    // <animated.div style={props} >
                    <div className="tools-icon"  >


                        <div className="tools-icon__text">
                            {name}
                        </div>

                        <div className="tools-icon__icon">
                            <div style={props}>

                                {iconName}
                            </div>

                        </div>
                    </div>

                )}
            </Spring>



        </>
    )
}

export default Icon