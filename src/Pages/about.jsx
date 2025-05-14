import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../App.css';
import Navigation from '../components/Navigation.jsx';
import FooterComponent from '../components/FooterComponent/FooterComponent.jsx';
import SubpageHeader from '../components/SubpageHeader/SubpageHeader.jsx';

export function About() {
    return (
        <>
            <Navigation />
            <SubpageHeader />
            THIS IS THE ABOUT PAGE
            <br />
            About us page to be developed
            <FooterComponent />
        </>
    );
}