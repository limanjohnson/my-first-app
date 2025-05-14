import React from 'react';
import { useMediaQuery
 } from 'react-responsive';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav/MobileNav';


function Navigation() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <>
            {isMobile ? <MobileNav /> : <DesktopNav />}
        </>
    );
}

export default Navigation;