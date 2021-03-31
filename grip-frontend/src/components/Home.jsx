import React, { useState } from 'react';
import './Home.css'
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import internship from '../assets/internship.jpg';
import mentorship from '../assets/mentorship.jpg';
import community from '../assets/community.jpg';

export default function Home() {
    const [focus, setFocus] = useState(false);

    const [tileInfos] = useState([
        { id: 1, heading: "Unpaid Internship", content: "This is an unpaid internship of a month during which you'll be trained, mentored and observerd for future role." },
        { id: 2, heading: "Flexible working hours", content: "During the course of the internship you will be expected to work from home with flexibility to manage your time. The tasks assigned re easy and can be finished in your extra time." },
        { id: 3, heading: "Own computers and internet", content: "You'll use your own computers with internet connecttions and coordinate with your team members through whatsapp or Google Hangout calls, etc." },
    ])

    return (
        <div >
            <Carousel
                additionalTransfrom={0}
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 1
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1
                    }
                }}
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >

                <div className="my-gallery" style={{ backgroundImage: "url(" + internship + ")" }}>
                    <div class="d-flex align-items-center justify-content-center min-vh-100">
                        <div className="gallery-text">
                            <h1>Internships</h1>
                            <h6>We Conduct Internship Program To Help Students Be Ready For What Is Coming To Them In Their Career Ahead. To Know More About The GRIP Program, Scroll Down.</h6>
                        </div>
                    </div>
                </div>

                <div className="my-gallery" style={{ backgroundImage: "url(" + mentorship + ")" }}>
                    <div class="d-flex align-items-center justify-content-center min-vh-100">
                        <div className="gallery-text">
                            <h1>Mentorship</h1>
                            <h6>We Help Students And Enable Them To Move Forward, Get Unstuck From Any Unfavorable Situation. We Keep An Alternative Channel Open Always To Help Them, When School And People Around Are Not Enough.</h6>
                        </div>
                    </div>
                </div>

                <div className="my-gallery" style={{ backgroundImage: "url(" + community + ")" }}>
                    <div class="d-flex align-items-center justify-content-center min-vh-100">
                        <div className="gallery-text">
                            <h1>Community</h1>
                            <h6>We Have Built A Community Of Sharing Knowledge, Helping Each Other. We Encourage Asking For Help, And Let Inner Desire Drive Students To Success.</h6>
                        </div>
                    </div>
                </div>


            </Carousel>
            <div className="TSF-info container">

                <div className="video">
                    <iframe width="500" height="325" title="TSF"
                        src="https://www.youtube.com/embed/kgj_0E_urK0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
                <div className="TSF-info-right">
                    <h2>The Sparks Foundation</h2>
                    <p>The Sparks Foundation is a not-for-profit organization registered in India and Singapore and operating Globally.</p>
                    <p>we inspire students to innovate and help them to build a better humankind</p>

                    <a href="https://www.thesparksfoundationsingapore.org/" target="_blank" rel="noreferrer"><button className="know-more-button">Know More</button></a>
                </div>

            </div>

            <div className="grip-container">

                <div className="grip-info container">
                    <div className="grip-info-heading container">
                        <h1>GRADUATE</h1>
                        <h1>ROTATIONAL</h1>
                        <h1>INTERNSHIP</h1>
                        <h1>PROGRAM</h1>
                        <h3>Welcome to TSF Internship Program</h3>
                        <Link to='/grip'><button className="grip-know-more-btn">Know More</button></Link>
                    </div>
                    <div className="grip-info-content container">
                        <div className="content-box">
                            <h5>The Graduate Rotational Internship Program is an unique offer for students and recent graduates to experience and join TSF.</h5>
                            <br />
                            <h5>This program aims to enable students to be professionally capable, and entrepreneurial. Apart from skill specific tasks, we encourage interns to build a credible professional profile.</h5>
                        </div>
                    </div>
                </div>

            </div>

            {/* <div className="extra-info-top container">
                <h4>virtual Internship</h4>
                <h4>unpaid</h4>
                <h4>flexible</h4>
                <h4>5-6 hours per week</h4>
            </div> */}

            <div className="extra-info-tiles container">

                {tileInfos.map((tileInfo) => {
                    return (
                        <div className="tile" key={tileInfo.id}>
                            <div className="tile-heading">
                                <h4>{tileInfo.heading}</h4>
                            </div>
                            <div className="tile-content">
                                <p>{tileInfo.content}</p>
                            </div>
                        </div>
                    )
                })}

            </div>

            <div className="counter-section">
                <div className="join-us">
                    <div className="overlay-text">
                        <h3>Come Join the <span style={{ color: "#04BDC9" }}>Community </span>now! </h3>
                        <br />
                        <p>Join The GRIP program now as an intern and unleash your potential. </p>
                        <p>Interested in the GRIP program? Fill out the interest form now!</p>
                        <div style={{ textAlign: "center" }}>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScTmzfiKkbfS2yjmabn3XczfaEVYnw4xgO5NfThPebxZnlc8Q/viewform?entry.941892130=LF06" target="_blank"><button className="interest-form-btn">Interest Form</button></a>
                        </div>
                    </div>

                </div>
                <div className="counter">
                    <div className="counter-whole">
                        <div className="counter-item">
                            <div className="item-left">
                                <h4>Number of <br />Students</h4>
                                <CountUp start={focus ? 0 : null} end={300000} duration={4} suffix="+">
                                    {({ countUpRef }) => (
                                        <VisibilitySensor onChange={(isVisible) => {
                                            if (isVisible) { setFocus(true); }
                                        }} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </div>
                            <div className="item-right">
                                <h4>Number of <br />Countries</h4>
                                <CountUp start={focus ? 0 : null} end={100} duration={4} suffix="+">
                                    {({ countUpRef }) => (
                                        <VisibilitySensor onChange={(isVisible) => {
                                            if (isVisible) { setFocus(true); }
                                        }} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </div>
                        </div>
                        <div className="counter-item">
                            <div className="item-left">
                                <h4>Mentors<br /> Involved</h4>
                                <CountUp start={focus ? 0 : null} end={75} duration={4} suffix="+">
                                    {({ countUpRef }) => (
                                        <VisibilitySensor onChange={(isVisible) => {
                                            if (isVisible) { setFocus(true); }
                                        }} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </div>
                            <div className="item-right">
                                <h4>Internships<br />offered</h4>
                                <CountUp start={focus ? 0 : null} end={8} duration={4} suffix="+">
                                    {({ countUpRef }) => (
                                        <VisibilitySensor onChange={(isVisible) => {
                                            if (isVisible) { setFocus(true); }
                                        }} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}