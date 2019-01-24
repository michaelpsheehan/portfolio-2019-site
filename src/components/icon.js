import React from 'react'
import { Spring, config } from 'react-spring';

const Icon = ({ name, iconName, delay }) => {
    return (
        <>
            <Spring
                from={{ opacity: 0, transform: 'translateY(20vh)' }}
                to={{ opacity: 1, transform: 'translateY(0)' }}
                delay={delay}
                config={config.gentle}
            >
                {props => (
                    <div className="tools-icon"  >
                        <div className="tools-icon__text">{name}</div>
                        <div className="tools-icon__icon">
                            <div style={props}>{iconName}</div>
                        </div>
                    </div>
                )}
            </Spring>
        </>
    )
}

export default Icon