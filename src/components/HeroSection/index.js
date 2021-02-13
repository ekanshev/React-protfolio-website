import React, { useState } from 'react';
import video from "../../videos/video.mp4";
import { Button } from '../ButtonElement';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRignt
} from "./HeroElements";

const HeroSection = () => {

    const [hover, setHover] = useState(False)

    const OnHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video}
                    type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made easy</HeroH1>
                <HeroP>Sign up for a new account today ad receve $259 in
                creedit towards your
                Next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={OnHover}
                        OnMouseLeave={OnHover} >
                        Get started {hover ? <ArrowForward /> : <ArrowRignt />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
