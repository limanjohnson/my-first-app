import '../App.css';
import Navigation from '../components/Navigation.jsx';
import FooterComponent from '../components/FooterComponent/FooterComponent.jsx';
import SubpageHeader from '../components/SubpageHeader/SubpageHeader.jsx';
import ServicesList from '../components/ServicesComponents/Services.jsx';


export function Services() {
    return (
        <>
            <Navigation />
            <SubpageHeader />
            <ServicesList />
            <FooterComponent />
        </>
    );
}