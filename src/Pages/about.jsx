
import '../App.css';
import './about.css';
import Navigation from '../components/Navigation.jsx';
import FooterComponent from '../components/FooterComponent/FooterComponent.jsx';
import SubpageHeader from '../components/SubpageHeader/SubpageHeader.jsx';
import PageSection from '../components/PageSection/PageSection.jsx';

export function About() {
    return (
        <>
            <Navigation />
            <SubpageHeader />
            <PageSection >
                <div className="Ln-About-History">
                    <div className="Ln-About-History-Text">
                        <h3>History</h3>
                        <p>A unique team inspired by old school beliefs. The client and relationships guide the business plan. We believe our people are the resource to provide the solutions for our clients needs. The equipment inventory is a byproduct of the solution. “Whatever it takes mentality”. Equipment can be purchased, people and experience cannot. We are founded in these beliefs with each and every team member.</p>
                    </div>
                    <div>
                        <img src="https://scaffoldsolutions.com/wp-content/uploads/2018/08/repeat-grid-142x.jpg" alt="History" />
                    </div>
                </div>
            </PageSection>
            <PageSection >
                <div className="Ln-About-Mission">
                    <div className="Ln-About-Mission-Text">
                        <h3>Mission</h3>
                        <p>To build a team dedicated to providing exceptional customer relations, restore quality service and values to the scaffold industry, empower our employees to set and achieve goals to better themselves and the industry and to provide a personal and professional approach in constructing exceptional quality projects.</p>
                    </div>
                    <div className="Ln-About-Mission-Image">
                        <img src="https://scaffoldsolutions.com/wp-content/uploads/2018/08/stocking-platform-mill-peninsula-turner2x.png" alt="Mission" />
                    </div>
                </div>
            </PageSection>
            <PageSection >
                <div className="Ln-About-Vision">
                    <div className="Ln-About-Vision-Text">
                        <h3>Vision</h3>
                        <p>Use our experience and dedication to set a new standard in the industry for others to follow. To be known for providing outstanding quality, timely commitments, and being budget oriented.</p>
                    </div>
                    <div>
                        <img src="https://scaffoldsolutions.com/wp-content/uploads/2018/08/reskin-hilton-hotel-sarman-construction-22x.jpg" alt="Vision" />
                    </div>
                </div>
            </PageSection>
            <FooterComponent />
        </>
    );
}