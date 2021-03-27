import React from 'react';
import './OurTeam.css'
import pic1 from "../assets/team1.jpg";

export default function OurTeam() {
    const teamDetails = [
        { id: 1, intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt eum sequi quibusdam nulla quidem, ullam in saepe laborum! Maiores quod itaque incidunt laboriosam autem optio provident voluptatem cum iure!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt eum sequi quibusdam nulla quidem, ullam in saepe laborum! Maiores quod itaque incidunt laboriosam autem optio provident voluptatem cum iure!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt eum sequi quibusdam nulla quidem, ullam in saepe laborum! Maiores quod itaque incidunt laboriosam autem optio provident voluptatem cum iure!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt eum sequi quibusdam nulla quidem, ullam in saepe laborum! Maiores quod itaque incidunt laboriosam autem optio provident voluptatem cum iure!", name: "Harsh Mauny", designation: "Web Developer", pic: pic1 },
        { id: 2, intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt eum sequi quibusdam nulla quidem, ullam in saepe laborum! Maiores quod itaque incidunt laboriosam autem optio provident voluptatem cum iure!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt eum sequi quibusdam nulla quidem, ullam in saepe laborum! Maiores quod itaque incidunt laboriosam autem optio provident voluptatem cum iure!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt eum sequi quibusdam nulla quidem, ullam in saepe laborum! Maiores quod itaque incidunt laboriosam autem optio provident voluptatem cum iure!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt eum sequi quibusdam nulla quidem, ullam in saepe laborum! Maiores quod itaque incidunt laboriosam autem optio provident voluptatem cum iure!", name: "Harsh Mauny", designation: "Web Developer", pic: pic1 },
        { id: 3, intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt eum sequi quibusdam nulla quidem, ullam in saepe laborum! Maiores quod itaque incidunt laboriosam autem optio provident voluptatem cum iure!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt eum sequi quibusdam nulla quidem, ullam in saepe laborum! Maiores quod itaque incidunt laboriosam autem optio provident voluptatem cum iure!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt eum sequi quibusdam nulla quidem, ullam in saepe laborum! Maiores quod itaque incidunt laboriosam autem optio provident voluptatem cum iure!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt eum sequi quibusdam nulla quidem, ullam in saepe laborum! Maiores quod itaque incidunt laboriosam autem optio provident voluptatem cum iure!", name: "Harsh Mauny", designation: "Web Developer", pic: pic1 },
    ]


    return (
        <div className="container">
            <div className="our-team-heading">
                <h2>Meet Our <span style={{ color: "#04BDC9" }}>Team</span>  !</h2>
            </div>
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
                        </div>

                        <div className="item team-card-right">
                            <img src={teamdetail.pic} alt={`${teamdetail.pic}`} />
                        </div>
                    </div>
                )
            })}
            {/* <div className="team-card">
                <div className="item team-card-left">
                    <svg xmlns="http://www.w3.org/2000/svg" height="35" class="mb-2" viewBox="0 0 32 32" fill="#04BDC9"><path d="M0 4v12h8c0 4.4-3.6 8-8 8v4c6.6 0 12-5.4 12-12V4H0z" /><path d="M20 4v12h8c0 4.4-3.6 8-8 8v4c6.6 0 12-5.4 12-12V4H20z" /></svg>
                    <h6 className="intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ex, soluta, sunt magnam eos consequatur hic accusantium laudantium id amet nisi sed? Optio consequuntur atque voluptatem mollitia, unde provident itaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste sapiente, facere illo sunt reiciendis, tempore exercitationem, fugiat nobis enim eos optio saepe hic quis excepturi labore quos. Magnam, rerum vel.</h6>
                    <div className="designation">
                        <h5>Harsh Mauny</h5>
                        <h6>web developer</h6>
                    </div>
                </div>

                <div className="item team-card-right">
                    <img src={pic1} alt="pic1" />
                </div>
            </div> */}
        </div>
    )
}