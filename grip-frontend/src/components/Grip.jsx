import React, { useState } from 'react';
import './Grip.css'



export default function Grip() {
    const [benefits] = useState([
        { id: 1, heading: "Completion Certificate", context: "provided after successful completion of one month of internship." },
        { id: 2, heading: "Recommendation Letter", context: "Provided to top performing interns based on various assessment parameters." },
        { id: 3, heading: "Opportunity to be a part of TSF", context: "Job opportunity is given to best candidates and they are hired on best hiring plan. " },
        { id: 4, heading: "Workshop/Guidance", context: "For personality insights, Resume and and linkedIn profile building, Srum training session, interview skills, further education, etc." },
        { id: 5, heading: "Networking Opportunity", context: "Global, multicultural & rare diverse working environment is available for interns. " },

    ])

    const [guidance] = useState([
        { id: 1, heading: "Sheduled Calls", context: "Regular contact with core team members via live online sessions." },
        { id: 2, heading: "Mentor Support", context: "Our mentors are there to guide and support at any time. You can reach the mentors through email or whatsapp." },
        { id: 3, heading: "Discussion Forum", context: "You will be asked to join The Sparks Foundation Network group on LinkedIn. Here, Your mentors and facilitators will answer your task queries." },
        { id: 4, heading: "On Demand Support", context: "If you feel the need, you can mail us for help. We will guide you to correct resources." },

    ])

    return (
        <div >

            <div className="grip-info-top container">

                <div className="grip-info-top-heading">
                    <h2>Why join GRIP?</h2>
                </div>

                <div className="grip-info-top-content">

                    <div className="benefits">

                        <h2>Benefits</h2>
                        {benefits.map((benefit) => {
                            return (<div className="benefits-block" key={benefit.id}>
                                <div className="benefits-heading">
                                    <h4>{benefit.heading}</h4>
                                </div>
                                <div className="benefits-context">
                                    <h5>{benefit.context}</h5>
                                </div>
                            </div>
                            )
                        })}

                    </div>

                    <div className="guidance">

                        <h2>Guidance</h2>
                        {guidance.map((guide) => {
                            return (<div className="guidance-block" key={guide.id}>
                                <div className="guidance-heading">
                                    <h4>{guide.heading}</h4>
                                </div>
                                <div className="guidance-context">
                                    <h5>{guide.context}</h5>
                                </div>
                            </div>
                            )
                        })}

                    </div>
                </div>

            </div>

            <div className="Internships container">

                <div className="Internships-heading">
                    <h2>Internships Available</h2>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <a href="https://docs.google.com/document/d/1QmqPQVjTAlLL18nZBU5Mx7lqh0yF1jnvQKJXOWSct30/edit?usp=sharing"><button className="Internships-btn">Web Development</button></a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://docs.google.com/document/d/12lAGdYmBnIhNBCfJAI9gEGyfh_KJVTjTa7HOH1kllyI/edit"> <button className="Internships-btn">Mobile Development</button></a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://docs.google.com/document/d/1Vh_3Kf7xJsSiElv6dbvDpGs-Ckksm82HukFzxGxtamE/edit"><button className="Internships-btn">Data Analytics</button></a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://docs.google.com/document/d/1dPWPAf9DrWwegukrgRBhgII_2W3it0tciWlBy2etGec/edit"><button className="Internships-btn">Content Development</button></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <a href="https://docs.google.com/document/d/1lxUIRSaYf-ATS3EhfeMkLciUXMTyRD1gmIu8mWiram4/edit"><button className="Internships-btn">Campus Ambassador</button></a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://docs.google.com/document/d/1ptZ0II8Ned904C2vxvfv7A2VZcqYH8fU84uPvNYAebM/edit"><button className="Internships-btn">Digital Marketing</button></a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://docs.google.com/document/d/18GvNuiZXI_rRlvSDlWXM6fFclnbkSN4tegV36mIKErM/edit"> <button className="Internships-btn">Talent Acquisition</button></a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://docs.google.com/document/d/1aOIDcNi7PXBgPwl8E0RGS_s2unemS5ZWx8-clzrksGI/edit"><button className="Internships-btn">IOT/computer Vision </button></a>
                    </div>
                </div>

            </div>

            <div className="timeline-heading container">
                <h2>GRIP Timeline</h2>
            </div>

            <div class="timeline-area container">
                <div class="container1">
                    <div class="all-timelines">

                        {/* <!--SINGLE TIMELINE--> */}
                        <div class="single-timeline d-flex-2">
                            <div class="timeline-blank"></div>
                            <div class="timeline-text d-flex-2">
                                <span>
                                    <h6>Application</h6>
                                    <ul>
                                        <li>You can apply for GRIP from either LinkedIn or a job portal like internshala or indeed.</li>
                                        <li>All applicants must fill the interest From and create a profile on My credible info before deadline.</li>
                                    </ul>
                                </span>
                                <div class="t-square"></div>
                            </div>
                        </div>

                        {/* <!--SINGLE TIMELINE--> */}
                        <div class="single-timeline d-flex-2">
                            <div class="timeline-blank"></div>
                            <div class="timeline-text d-flex-2">
                                <span>
                                    <h6>GRIP Selection Certificate </h6>
                                    <ul>
                                        <li>If selected through job portals, complete the joining formalities before deadline mentioned in the selection email. </li>
                                        <li>If applying through LinkedIn, apply before deadline mentioned in the post or GRIP@TSF document.</li>
                                        <li>Selection certificate are sent in the last week of each month for the next batch in upcoming month.</li>
                                    </ul>
                                </span>
                                <div class="t-square"></div>
                            </div>
                        </div>

                        {/* <!--SINGLE TIMELINE--> */}
                        <div class="single-timeline d-flex-2">
                            <div class="timeline-blank"></div>
                            <div class="timeline-text d-flex-2">
                                <span>
                                    <h6>Internship Starts - 1<sup>st</sup> week of the month</h6>
                                    <ul>
                                        <li>If you got a selection certificate in this month, you will receive an orientation email in 1<sup>st</sup> week.</li>
                                        <li>Follow the instrustions from email and start your tasks.</li>
                                        <li>All announcements and your queries will be answered via TSF Network group</li>
                                    </ul>
                                </span>
                                <div class="t-square"></div>
                            </div>
                        </div>

                        {/* <!--SINGLE TIMELINE--> */}
                        <div class="single-timeline d-flex-2">
                            <div class="timeline-blank"></div>
                            <div class="timeline-text d-flex-2">
                                <span>
                                    <h6>Task Submission & Peer Evaluation</h6>
                                    <ul>
                                        <li>Task Submission form will be shared a few days before submission deadline and announced in TSF Network.</li>
                                        <li>submit tasks exactly as instructed</li>
                                        <li><b>Deadline:</b> 23:59(SGT) 21<sup>st</sup> day of your batch/month</li>
                                    </ul>
                                </span>
                                <div class="t-square"></div>
                            </div>
                        </div>

                        {/* <!--SINGLE TIMELINE--> */}
                        <div class="single-timeline d-flex-2">
                            <div class="timeline-blank"></div>
                            <div class="timeline-text d-flex-2">
                                <span>
                                    <h6>GRIP Session Feedback</h6>
                                    <ul>
                                        <li>GRIP Session Feedback is sent on 22<sup>nd</sup> - 23<sup>rd</sup> day and only to those who have submitted Task Submission form by the deadline. </li>
                                        <li>Fill the form before 23:59(SGT), 25<sup>th</sup> day of the month</li>
                                        <li>Email in Session Feedback form must match with email in task Submission form.</li>
                                    </ul>
                                </span>
                                <div class="t-square"></div>
                            </div>
                        </div>

                        {/* <!--SINGLE TIMELINE--> */}
                        <div class="single-timeline d-flex-2">
                            <div class="timeline-blank"></div>
                            <div class="timeline-text d-flex-2">
                                <span>
                                    <h6>Completion Certificate</h6>
                                    <ul>
                                        <li>If you are eligible, you will receive a selection certificate in the 1st week of next month.</li>
                                        <li>If you miss any deadline or make mistake in submitting details, your certificate issuance will be with next batch provided you correctly fill the details again</li>
                                    </ul>
                                </span>
                                <div class="t-square"></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="FAQ-docs container">

                <h4>Read FAQ Documents for any Queries</h4>
                <a href="https://docs.google.com/document/d/1EUo3Vly4C9ym6OW8tjJsbMzJUnBoFXwuSh-Pit9vNso/edit?usp=sharing"><button className="FAQ-docs-btn">FAQ Documents</button></a>

            </div>


        </div>
    )
}