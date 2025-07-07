import React from 'react'
import './home.css'
import illustration from '../../assets/images/illustration-article.svg';
import portrait from '../../assets/images/image-avatar.webp';

const home = () => {
return (
    <div className="body">
            <main>
                    <div className="card">
                            <div className="card1">
                                    <img src={illustration} alt="" />
                            </div>

                            <div className="card2">
                                <div className="learn"><h4><b>Learning</b></h4></div>
                                <p>Published 21 Dec 2023</p>
                            </div>

                            <article>
                                <h3>HTML & CSS foundations</h3>
                                <p>These languages are the backbone of every website, defining structure, content and presentation.</p>
                            </article>

                            <div className="card3">
                                <div className="img"><img src={portrait} alt="" /></div>
                                <div className="name"><h4><b>Greg Hooper</b></h4></div>
                            </div>
                    </div>
            </main>
     
    </div>
)
}

export default home