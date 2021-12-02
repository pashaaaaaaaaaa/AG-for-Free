import React from "react";

export default function Footer(){
    return(
        <>
        <section className="footer">
                <div className="one">
                    <p className="bold">Privacy and Terms</p>
                    <p>Privacy Policy</p>
                    <p>Terms of use</p>
                </div>
                <div className="two">
                    <p className="bold">Need Help?</p>
                    <p>mail@gmail.com</p>
                </div>
                <div className="three">
                    <p className="bold">Social</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                </div>
            </section>
            <section className="footer2">
                <p>© All Rights Reserved</p>
            </section>
            </>
    )
}