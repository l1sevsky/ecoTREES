import React from 'react';


function SvgIcon ({ name }) {
    switch (name) {
        case 'home':
            return ( <i className="fi fi-rr-home"></i> );
        case 'catalog':
            return ( <i className="fi fi-rr-apps"></i> );
        case 'basket':
            return ( <i className="fi fi-rr-shopping-cart"></i> );
        case 'user':
            return ( <i className="fi fi-rr-user"></i> );
        case 'article':
            return ( <i className="fi fi-rr-document"></i> );
        case 'contacts':
            return ( <i className="fi fi-rr-call-history"></i> );
        case 'settings':
            return ( <i className="fi fi-rr-settings-sliders"></i> );
        case 'back':
            return ( <i className="fi fi-rr-angle-circle-left"></i> );
        case 'tree':
            return ( <i className="fi fi-rr-tree"></i> );
        case 'more':
            return ( <i className="fi fi-rr-angle-square-right"></i> );
        case 'add-basket':
            return ( <i className="fi fi-rr-shopping-cart-add"></i> );
        default:
            return ( <i className="fi fi-rr-resources"></i> );
    }
}


export default SvgIcon;