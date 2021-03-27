import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="grip-footer">

            <div className="social">

                <a href="https://www.facebook.com/thesparksfoundation.info" target="_blank" rel="noreferrer">
                    <div className="icons">
                        <i className="fa fa-facebook-f"></i>
                    </div>
                </a>
                <a href="https://twitter.com/tsfsingapore" target="_blank" rel="noreferrer">
                    <div className="icons">
                        <i className="fa fa-twitter"></i>
                    </div>
                </a>
                <a href="https://instagram.com/thesparksfoundation.info" target="_blank" rel="noreferrer">
                    <div className="icons">
                        <i className="fa fa-instagram"></i>
                    </div>
                </a>

                <a href="https://www.linkedin.com/company/the-sparks-foundation/" target="_blank" rel="noreferrer">
                    <div className="icons">
                        <i className="fa fa-linkedin"></i>
                    </div>
                </a>

            </div>

            <p className="text">© 2021 The Sparks Foundation | GRIP <br />made by Harsh Mauny </p>

        </footer>
    )
}