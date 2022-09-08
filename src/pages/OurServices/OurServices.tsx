import './OurServices.scss'
import Hero from "../../components/OurServices/Hero";
import SWDevServices from "../../components/OurServices/SWDevServices";
import Services from "../../components/OurServices/Services";
import WhoWeWorkWith from "../../components/OurServices/WhoWeWorkWith";

export default function OurServices() {
    return(
        <div>
            <Hero/>
            <SWDevServices/>
            <Services/>
            <WhoWeWorkWith/>
        </div>
    )
}