import React from 'react';

function HomePage() {
    return (
        <React.Fragment>
            <div className="home-page-background"><h1>Merry Xmas!</h1></div>

            <div className="home-page-text">
                <h2>Let's Pet!<br />Don't buy, just rent a pet for Xmas!</h2>
                <p>Why give a pet to your loved ones, not just at Christmas, anytime? It's much better to rent one.
                It is a constant social problem that people get tired of their animals and don’t deal with them anymore, or worse, they are left alone.
                To avoid this, it is better to rent an animal for a longer or shorter period of time.
                <br /><br />
                When should you consider renting?
                <br /><br />
                    <ul>
                        <li>When you don't have time to commit to the long term.</li>
                        <li>When you don't know what kind of animal is right for you.</li>
                        <li>When you don't have time to keep a pet with your daily routines.</li>
                        <li>When you want to bring variety into your life.</li>
                        <li>When you want company.</li>
                        <li>When you want love.</li>
                    </ul>
                </p>
                <h2>About this website</h2>
                <p>This is not a real pet rental site.
                    <br />
                This is a practice website where as a junior web developer I can try out new technologies on an interesting topic.
                Please also look at the descriptions of the animals, browse among them, you will find many funny topics.
                For the development of the website I used HTML, CSS, React.js, React-bootstrap and mock data, considering that the application had to be completed in a short time.
There are many more plans to implement modernization, design and other functional features, so please come back to the site sometimes, because you will definitely find more and more improvements later ...</p>
            </div>
        </React.Fragment >
    )
}

export default HomePage;