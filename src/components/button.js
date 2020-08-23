import React from 'react';

const Button = (props) => {
    let outlined= props.outlined ? " outlined" : "";
    let target = props.external ? "_blank" : "";
    return (
        <a href={props.href} target={target}>
            <div className={"button" + outlined}>
                {props.children}
            </div>
        </a>
    );
}

export default Button;