import arrow from "../../img/arrow.svg";

export default function Hero() {
    const goToBottom = () => {
        const height = document.body.scrollHeight
        window.scrollTo({
            top: height,
            behavior: 'smooth',
        });
    };
    return(

        <div className='hero'>
            <div className='content'>
                <h1 className='title'>Our Works</h1>
                <h2 className='sub-title'>Let us help you bring your project to life</h2>
                <p className='description'>Whether you’re driven by a need to modernise, to gain a competitive edge, or to overcome a frustrating operational blocker, we’re adept at crafting bespoke solutions that deliver real business value that will help your business grow</p>
                <button onClick={() => goToBottom()} className='arrow'>
                    <img src={arrow} alt={arrow}/>
                </button>
            </div>
        </div>
    )
}