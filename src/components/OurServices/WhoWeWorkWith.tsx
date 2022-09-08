import corporate from "../../img/corparate@2x.png"
import government from "../../img/government@2x.png"
import startup from "../../img/startup2x.png"

export default function WhoWeWorkWith() {
    return(
        <section className='section'>
            <h1 className='title who-we-work'>#WHO WE WORK WITH</h1>
            <span className='desc'>Loreum ipsum Intelligent, cost-effective, custom software solutions for companies.</span>

            <div className='clients'>
                <a href='/' className='client'>
                    <img className='icon' src={government} alt={'government'}/>
                    <span className='name'>
                        Government
                    </span>
                </a>
                <a href='/' className='client'>
                    <img className='icon' src={corporate} alt={'corporate'}/>
                    <span className='name'>
                        Corporate
                    </span>
                </a>
                <a href='/' className='client'>
                    <img className='icon' src={startup} alt={'startup'}/>
                    <span className='name'>
                        Startup
                    </span>
                </a>
            </div>

            <div className='info product'>
                <div className='product-box mini'/>
                <div className='product-box mini'/>
                <div className='product-box mini'/>
                <div className='product-box mini'/>
                <div className='product-box mini'/>
            </div>
        </section>
    )
}