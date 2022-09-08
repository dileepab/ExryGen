import team from "../../img/team@2x.png";
import shield from "../../img/shield@2x.png";
import listIcon from "../../img/checkmark.svg";
import startup from "../../img/startup (1)@2x.png";

export default function SWDevServices() {
    return(
        <section className='section'>
            <h1 className='title'>Software development services</h1>
            <span className='desc'>EXRYGEN is delivering Intelligent, cost-effective, custom software solutions for companies.</span>

            <div className='info'>
                <div className='service-box'>
                    <div className='box-header'>
                        <div className='service-type'>
                            <img className='service-icon' src={team} alt='team'/>
                            <div className='service-name'>
                                <span>Our services</span>
                                <h3>Businesses</h3>
                            </div>
                        </div>
                        <img className='shield' src={shield} alt={'shield'}/>
                    </div>
                    <div className='box-content'>
                        <div className='list'>
                            <div className='list-item'>
                                <img src={listIcon} alt='list-icon'/>
                                <span className='list-label'>Add functionality and/or improve existing software</span>
                            </div>
                            <div className='list-item'>
                                <img src={listIcon} alt='list-icon'/>
                                <span className='list-label'>Design and develop new applications to improve efficiency</span>
                            </div>
                            <div className='list-item'>
                                <img src={listIcon} alt='list-icon'/>
                                <span className='list-label'>Build connectors between different apps to streamline workflows</span>
                            </div>
                            <div className='list-item'>
                                <img src={listIcon} alt='list-icon'/>
                                <span className='list-label'>Make sense of business data in an intuitive, easy-to-use dashboards</span>
                            </div>
                        </div>
                        <div className='capabilities'>
                            <h6 className='title'>Capabilities</h6>
                            <div className='tag-list'>
                                <span className='tag'>Architecture</span>
                                <span className='tag'>Sales Force</span>
                                <span className='tag'>Java</span>
                                <span className='tag'>Design</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='service-box'>
                    <div className='box-header'>
                        <div className='service-type'>
                            <img className='service-icon' src={startup} alt='startup'/>
                            <div className='service-name'>
                                <span>Our services</span>
                                <h3>Startups</h3>
                            </div>
                        </div>
                        <img className='shield' src={shield} alt={'shield'}/>
                    </div>
                    <div className='box-content'>
                        <div className='list'>
                            <div className='list-item'>
                                <img src={listIcon} alt='list-icon'/>
                                <span className='list-label'>Add functionality and/or improve existing software</span>
                            </div>
                            <div className='list-item'>
                                <img src={listIcon} alt='list-icon'/>
                                <span className='list-label'>Design and develop new applications to improve efficiency</span>
                            </div>
                            <div className='list-item'>
                                <img src={listIcon} alt='list-icon'/>
                                <span className='list-label'>Build connectors between different apps to streamline workflows</span>
                            </div>
                            <div className='list-item'>
                                <img src={listIcon} alt='list-icon'/>
                                <span className='list-label'>Make sense of business data in an intuitive, easy-to-use dashboards</span>
                            </div>
                        </div>
                        <div className='capabilities'>
                            <h6 className='title'>Capabilities</h6>
                            <div className='tag-list'>
                                <span className='tag'>Architecture</span>
                                <span className='tag'>Sales Force</span>
                                <span className='tag'>Java</span>
                                <span className='tag'>Design</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}