import appDev from "../../img/app-development (1)@2x.png"
import booking from "../../img/booking@2x.png"
import rapid from "../../img/rapid@2x.png"
import api from "../../img/api@2x.png"
import data from "../../img/data@2x.png"


export default function Services() {
    return(
        <section className='section'>
            <h1 className='title'>OUR SERVICES</h1>
            <span className='desc'>EXRYGEN is delivering Intelligent, cost-effective, custom software solutions for companies.</span>

            <div className='info product'>
                <div className='product-box'>
                    <div className='icon'>
                        <img src={appDev} alt={'appDev'}/>
                    </div>
                    <div className='desc'>
                        <h2>Web App Development</h2>
                        <p>Develop web products, portals,or web based software for business workflow automation.</p>
                    </div>
                </div>
                <div className='product-box'>
                    <div className='icon'>
                        <img src={booking} alt={'booking'}/>
                    </div>
                    <div className='desc'>
                        <h2>Mobile App Development</h2>
                        <p>Mobile App Development</p>
                    </div>
                </div>
                <div className='product-box'>
                    <div className='icon'>
                        <img src={rapid} alt={'rapid'}/>
                    </div>
                    <div className='desc'>
                        <h2>Rapid Prototyping</h2>
                        <p>Build Minimum Viable Products to test the market; Software prototypes to gather feedback and gauge applicability</p>
                    </div>
                </div>
                <div className='product-box'>
                    <div className='icon'>
                    </div>
                    <div className='desc'>
                        <h2>Software Connectors</h2>
                        <p>Streamline processes by connecting different applications</p>
                    </div>
                </div>
                <div className='product-box'>
                    <div className='icon'>
                        <img src={api} alt={'api'}/>
                    </div>
                    <div className='desc'>
                        <h2>API Development</h2>
                        <p>Connect internal applications to improve efficiency or explore new monetizable opportunities by</p>
                    </div>
                </div>
                <div className='product-box'>
                    <div className='icon'>
                        <img src={data} alt={'data'}/>
                    </div>
                    <div className='desc'>
                        <h2>Data Visualisation</h2>
                        <p>Find trends and information hidden in data silos across different applications</p>
                    </div>
                </div>
            </div>
        </section>
    )
}