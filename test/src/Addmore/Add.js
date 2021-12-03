import React from "react";
import './add.css'

export default function Add(){
    return(
        <>
        <header >
            <div className="text">
                <h1>Autumn Giveaways for FREE</h1>
                <p>Participate in Autumn Giveaway and treat yourself <br/> to nice and refreshing cosmetics for free</p>
            </div>
            <img src="img/banner.svg" alt="cream"/>
        </header>
        <div className="main-cont">
            <section className="one-block">
                <div className="img-block">
                    <div className="column">
                        <img src="img/arrow.svg" className="row"/>
                        <img src="img/onePic.svg" className="img"></img>
                        <img src="img/twoPic.svg" className="img"></img>
                        <img src="img/three.svg" className="img"></img>
                        <img src="img/arrow1.svg" className="row1"/>
                    </div>
                    <img src="img/bigPic.svg" className="bigPic"/>
                </div>
                <div className="text-block">
                    <div className="text-one">
                        <p><strong>BEST SELLER</strong></p>
                        <img src="img/start.svg"></img>
                        <span>(1731 reviews)</span>
                    </div>
                    <h4>Acne Treatment Cystic Acne heals<br/> repairs & renews</h4>
                    <p><strong>Description:</strong></p>
                    <p className="p">Addictively refreshing gel-cream leaves skin plump, dewy, glowing.</p>
                    <button>ITEMS LEFT: 12</button>
                    <hr></hr>
                    <div className="money-box">
                        <p className="p1"><s>US$25.89</s></p>
                        <p className="p">$0.00 FREE</p>
                    </div>
                    <button className="btn">SELECT</button>
                    <img src="img/amazon.svg" className="amazon"/>
                </div>
            </section>
            <section className="two-block">
                <h1>Overview</h1>
                <p className="p">Who It's For</p>
                <p className="p1">Very Dry, Dry, Dry Combination Skin (Type 1, 2)</p>
                <p className="p">What It Is</p>
                <p className="p1">Step 3 in our customized 3-Step Skincare System.<br/>
                        Dermatologist-developed face moisturizer softens, smooths, improves. Leaves<br/> skin glowing.</p>
                <p className="p">What It Does</p>       
                <ul>
                    <li>Silky lotion delivers 8-hour hydration</li>
                    <li>Slips on easily, absorbs quickly.</li>
                    <li> Helps strengthen skin’s own moisture barrier so more moisture stays in.<br/> Skin that holds onto moisture has a youthful-looking glow.</li>
                </ul>
                <span className="none">Read more...</span>

                <div className="more">
                    <p className="pK">Key Ingredients</p>
                    <p className="p1">Sunflower Seed Cake, Barley Extract and Cucumber<br/>Fruit Extract help strengthen skin’s barrier, improve<br/> its resiliency, and balance and retain skin’s moisture<br/> levels. Hyaluronic acid acts as a natural moisture<br/> magnet/humectant.</p>
                    <hr></hr>
                    <div className="money-box">
                        <p className="p1"><s>US$25.89</s></p>
                        <p className="p">$0.00 FREE</p>
                    </div>
                    <button className="btn">SELECT</button>
                    <img src="img/amazon.svg" className="amazon"/>
                </div>

            </section>
            <section className="three-block">
                <h1>How does it work?</h1>
                <div className="step">
                    <div className="wrapperB">
                    <div className="oneB">
                        <p>Easy<br/>as<br/>1-2-3</p>
                    </div>
                    <p className="ts"></p>
                    </div>
                    <img src="img/next.svg" className="next1"/>
                    <div className="wrapper">
                    <div className="one">
                        <img src="img/choose.svg" className="ch"/>
                    </div>
                    <p>Choose product</p>
                    </div>
                    <img src="img/next.svg" className="next"/>
                    <div className="wrapper">
                    <div className="one">
                         <img src="img/buy.svg" className="bu"/>
                    </div>
                    <p>Buy product</p>
                    </div>
                    <img src="img/next.svg" className="next1"/>
                    <div className="wrapperF">
                    <div className="one">
                         <img src="img/test.svg" className="ts"/>
                    </div>
                    <p>Test and share<br/>review</p>
                    </div>
                    <img src="img/next.svg" className="next"/>
                    <div className="wrapperFf">
                    <div className="one">
                         <img src="img/get.svg" className="ge"/>
                    </div>
                    <p>Get 100%<br/>money back</p>
                    </div>
                </div>
            </section>
        </div>
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