import '../App.css';
import Navigation from '../components/Navigation.jsx';
import FooterComponent from '../components/FooterComponent/FooterComponent.jsx';
import SubpageHeader from '../components/SubpageHeader/SubpageHeader.jsx';

export function Services() {
    return (
        <>
            <Navigation />
            <SubpageHeader />
            THIS IS THE SERVICES PAGE
            <br />
            Services to be developed
            <FooterComponent />
        </>
    );
}