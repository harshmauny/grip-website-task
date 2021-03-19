import React, { useState } from 'react';
import './Home.css'
import { Link } from "react-router-dom";


export default function Home() {

    const [tileInfos] = useState([
        { id: 1, heading: "Unpaid Internship", content: "This is an unpaid internship of a month during which you'll be trained, mentored and observerd for future role." },
        { id: 2, heading: "Flexible working hours", content: "During the course of the internship you will be expected to work from home with flexibility to manage your time. The tasks assigned re easy and can be finished in your extra time." },
        { id: 3, heading: "Own computers and internet", content: "You'll use your own computers with internet connecttions and coordinate with your team members through whatsapp or Google Hangout calls, etc." },
    ])

    return (
        <div >
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

            <div className="extra-info-top container">
                <h4>virtual Internship</h4>
                <h4>unpaid</h4>
                <h4>flexible</h4>
                <h4>5-6 hours per week</h4>
            </div>

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

        </div>
    )
}