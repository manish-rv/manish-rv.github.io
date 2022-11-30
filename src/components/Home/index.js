import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadTitle from "../../assets/images/logo-s.png";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameAray = ['a','m','p','l','e','T','e','x','t',]
    const jobArray = ['A','d','d','i','t','i','o','n','a','l',' ','T','e','x','t',]
    useEffect(() => {
         setTimeout(() => setLetterClass('text-animate-hover'), 1000);
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LoadTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameAray}
                idx={15}/>
                </h1>
                <h2>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}/>
                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>  
    );
}

export default Home