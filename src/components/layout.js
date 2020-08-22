import React from 'react';
import '../styles/index.scss';
import Footer from './footer';

const Layout = (props) => {
    return (
        <div className="layout">
            
            {props.children}
            <Footer flipped={props.flipped} />
        </div>
    );
}

export default Layout;