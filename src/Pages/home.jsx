import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../App.css';
import Navigation from '../components/Navigation.jsx';
import FooterComponent from '../components/FooterComponent/FooterComponent.jsx';
import DesktopHeader from '../components/DesktopHeader/DesktopHeader.jsx';

export function Home() {
    return (
        <>
            <Navigation />
            <DesktopHeader />
            THIS IS THE HOME PAGE
            <br />
            As you write here, the page will update.
            <FooterComponent />
        </>
    );
}