import React from 'react';
import './OurTeam.css'
import priyeshKumar from "../assets/priyesh-kumar.jpg";
import tanwiKaushik from "../assets/tanwi-kaushik.jpg";
import pranavDubey from "../assets/pranav-dubey.jpg";
export default function OurTeam() {
    const teamDetails = [
        { id: 1, intro: "Priyesh is a technology enthusiast at his core. He is known for architecting, designing and developing large scale applications, and ensure security, scalability, and maintainability. A graduate of Indian Institute of Technology Delhi, and National University of Singapore, he works with VISA, NUS, and the likes with some of the large-scale projects of impact and his expertise is in Application Innovation, Machine Learning and Artificial Intelligence. He brings in more than 12 years of versatile experience to build The Sparks Foundation into an innovative social enterprise with impact at scale. He does a lot of volunteer work and mentorship; helping learners know more about latest technologies, methodologies and innovations.", name: "Priyesh Kumar", designation: "Founder", pic: priyeshKumar },
        { id: 2, intro: "Tanwi is a social entrepreneur and researcher. She is a double masters in Life Sciences from Cornell University (USA) and NUS (Singapore) with 6 years of experience in research and development. Having worked in India, USA and Singapore has given her a tremendous exposure and a chance to understand the academia and the industry internationally. After a vast understanding of academics in various countries from her own and others' experiences, she comprehended the gaps that still persist in the education system and hinder students from progressing to their full potential. This drove her to startup a social enterprise that works towards educational advancement.", name: "Tanwi Kaushik", designation: "Co-Founder and Executive Manager", pic: tanwiKaushik },
        { id: 3, intro: "Pranav Dubey is a business consultant by profession, and his expertise lies in project management, knowledge management, data & business analytics and financial research analysis. He shares his knowledge and experience as a corporate trainer for companies and educational institutions across Asia-Pacific region. Such sessions cover skills related to data & business analytics and hands-on on business intelligence tools. He Co-founded The Sparks Foundation, a non-profit organization, with a mission to inspire students and young professionals through innovative pedagogy; to create an integrated learning ecosystem.", name: "Pranav Dubey", designation: "Co-founder", pic: pranavDubey },
    ]


    return (
        <div >
            <div className="our-team-heading">
                <h1>Meet Our <span style={{ color: "#04BDC9" }}>Team</span>  !</h1>
            </div>
            <div className="container">
                {teamDetails.map((teamdetail) => {
                    return (
                        <div className="team-card" key={teamdetail.id}>
                            <div className="item team-card-left">
                                <svg xmlns="http://www.w3.org/2000/svg" height="35" class="mb-2" viewBox="0 0 32 32" fill="#04BDC9"><path d="M0 4v12h8c0 4.4-3.6 8-8 8v4c6.6 0 12-5.4 12-12V4H0z" /><path d="M20 4v12h8c0 4.4-3.6 8-8 8v4c6.6 0 12-5.4 12-12V4H20z" /></svg>
                                <h6 className="intro">{teamdetail.intro}</h6>
                                <div className="designation">
                                    <h5>{teamdetail.name}</h5>
                                    <h6>{teamdetail.designation}</h6>
                                </div>
                                <div className="media-handles">
                                    <a href=""><i style={{ color: "#0c64c3" }} class="fa fa-linkedin fa-lg"></i></a>
                                    <a href=""><i style={{ color: "#1da1f3" }} className="fa fa-twitter fa-lg"></i></a>
                                    <a href=""><i style={{ color: "#2d88ff" }} className="fa fa-facebook"></i></a>
                                </div>
                            </div>

                            <div className="item team-card-right">
                                <img src={teamdetail.pic} alt={`${teamdetail.pic}`} />
                            </div>
                        </div>
                    )
                })}
            </div >

        </div>
    )
}