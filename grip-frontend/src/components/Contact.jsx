import React, { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import axios from 'axios';
import './Contact.css'


export default function Contact() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [college, setCollege] = useState("");
    const [mobile, setMobile] = useState("");
    const [country, setCountry] = useState("");
    const [gender, setGender] = useState("");
    const [internship, setInternship] = useState("");
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const selectCountry = (val) => {
        setCountry(val)
    }

    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "email") {
            setEmail(value);
        } else if (name === "name") {
            setName(value);
        } else if (name === "college") {
            setCollege(value);
        } else if (name === "mobile") {
            setMobile(value);
        } else if (name === "gender") {
            setGender(value);
        } else if (name === "internship") {
            setInternship(value);
        }

    }

    const onSubmitHandler = (event, name, email, country, college, mobile, gender, internship) => {
        event.preventDefault();
        console.log(name, email, country, college, mobile, gender, internship)
        const mydata = { name, email, country, college, mobile, gender, internship }
        axios.post('https://grip-tsf.herokuapp.com/person/new', mydata)
            .then(personDetail => {
                var data = personDetail.data.person_data;
                setSuccess("form submitted!")
                console.log(data)
            })
            .catch(err => {
                setError("Mobile or Email already exists or empty fields!")
                console.log(err.error)
            })
    }

    return (
        <div className="container">

            <div className="contact-info">

                <div className="address">
                    <h3>Address</h3>
                    <p>THE HANGAR, NUS ENTERPRISE</p>
                    <p>21 HENG MUI KENG TERRACE, SINGAPORE, 119613</p>
                </div>
                <div className="contact">
                    <h3>contact</h3>
                    <p>+65-8402-8590</p>
                    <p>info@thesparksfoundation.sg</p>
                </div>

            </div>

            <div className="interest-form">

                <div className="title">
                    <h2>Interest Form</h2>
                </div>

                <form action="">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="email" name="email" className="form-control" placeholder="Email" onChange={event => onChangeHandler(event)} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" placeholder="Name" onChange={event => onChangeHandler(event)} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="college" className="form-control" placeholder="College/University" onChange={event => onChangeHandler(event)} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="mobile" className="form-control" placeholder="Mobile" onChange={event => onChangeHandler(event)} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <CountryDropdown className="form-control" value={country} onChange={(val) => selectCountry(val)} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Gender</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gender" value="Male" id="male" onChange={event => onChangeHandler(event)} />
                                    <label class="form-check-label" for="male">
                                        Male
									</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gender" value="Female" id="female" onChange={event => onChangeHandler(event)} />
                                    <label class="form-check-label" for="female">
                                        Female
								</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="text" name="internship" className="form-control" placeholder="Preferred Internship Function" onChange={event => onChangeHandler(event)} />
                    </div>

                    <div className="submit-button">
                        <button type="submit" className="submitBtn" onClick={event => { onSubmitHandler(event, name, email, country, college, mobile, gender, internship) }}>Submit</button>
                    </div>

                </form>
                {<><p style={{ color: 'red', fontWeight: '800', marginTop: "1rem" }}>{error}</p></>}
                {<><p style={{ color: 'green', fontWeight: '800', marginTop: "1rem" }}>{success}</p></>}

            </div>

        </div>
    )
}