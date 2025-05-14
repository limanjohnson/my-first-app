import React from "react";
import './Services.css';

function ServicesList() {
    return(
        <div className="Ln-Services-List">
            <div className="Ln-Services-List-Item Service-Item-1">
                <img src="https://scaffoldsolutions.com/wp-content/uploads/2018/08/group-5472x.png" alt="Estimating" />
                <div className="Ln-Services-Content">
                    <h2>Estimating</h2>
                    <ul>
                        <li>Layout/Full overlay of projects with architectural plans review</li>
                        <li>Design</li>
                        <li>Cad/drafting</li>
                    </ul>
                </div>
            </div>
            <div className="Ln-Services-List-Item Service-Item-2">
                <img src="https://scaffoldsolutions.com/wp-content/uploads/2018/08/group-5502x.png" alt="Operations" />
                <div className="Ln-Services-Content">
                    <h2>Operations</h2>
                    <ul>
                        <li>Dispatch</li>
                        <li>Superintendents</li>
                        <li>Quality Control</li>
                    </ul>
                </div>
            </div>
            <div className="Ln-Services-List-Item Service-Item-3">
                <img src="https://scaffoldsolutions.com/wp-content/uploads/2018/08/group-5512x.png" alt="safety"/>
                <div className="Ln-Services-Content">
                    <h2>Safety</h2>
                    <ul>
                        <li>Compliance</li>
                        <li>Training</li>
                        <li>Drug Testing</li>
                        <li>IIPP</li>
                        <li>Certifications</li>
                    </ul>
                </div>
            </div>
            <div className="Ln-Services-List-Item Service-Item-4">
                <img src="https://scaffoldsolutions.com/wp-content/uploads/2018/08/group-5572x.png" alt="Project Management"/>
                <div className="Ln-Services-Content">
                    <h2>Project Management</h2>
                    <ul>
                        <li>Project Coordination/Scheduling</li>
                        <li>Design Application</li>
                        <li>Detailing</li>
                        <li>Quality Assurance</li>
                    </ul>
                </div>
            </div>
            <div className="Ln-Services-List-Item Service-Item-5">
            <img src="https://scaffoldsolutions.com/wp-content/uploads/2018/08/group-5722x.png" alt="Administration"/>
            <div className="Ln-Services-Content">
                    <h2>Administration</h2>
                    <ul>
                        <li>Contracts</li>
                        <li>Compliance</li>
                        <li>Logistics</li>
                        <li>Fleet Management
                        </li>
                        <li>Purchasing</li>
                        <li>Warehouse</li>
                        <li>Maintenance</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ServicesList;
