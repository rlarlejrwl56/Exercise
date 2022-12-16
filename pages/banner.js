import { useRef } from 'react';
const banner = ()  => {
    const slides = ['#33a', '#8c9', '#f3e074'];
    const bannerRef = useRef();
    const items = useRef();
    const setTransition = (value) => {

        //nBanner.style.transition = value;
    }
    const nextBanner = () =>{
        //setTransition('transfrom 0.3s linear');
        //nBanner.current.style.background = 'red';
        bannerRef.current.style.transform = `translate(-${bannerRef.current.clientWidth}px,0)`;
    }
    return (
        <>
            <div className="slider-area relative overflow-hidden">
                <div className="slider-track  flex" ref={bannerRef}>
                    {
                        slides.map((color, index) =>
                            <div id={index} className="slider-item flex-[0_0_100%] h-80 " style={{background: color}} ref={items}>
                                <div className='w-full h-full'>
                                <a>
                                        {index}2
                                </a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <button className='buttons' onClick={nextBanner}>넘겨</button>
        </>
    )
}

export default banner;