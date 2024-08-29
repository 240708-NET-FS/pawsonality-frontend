import "./AboutPawsonality.css"

const AboutPawsonality = () => {
    return (
        <>
            <div id="AboutPawsonalityMain">
                <h1>What is Pawsonality?</h1>
                <p>Welcome to Pawsonality! After partaking in a short multiple choice personality test,
                    you will learn what your perfect pet is!
                </p>
                <p>
                    Based on your answers, we will help give you clarity on what your perfect pet is, whether it be a dog, cat, bird or something else!
                </p>
                <h3>Below you will find an overview of the process:</h3>
                <div className="aboutSection">
                    <section className="leftAboutSection">
                        <p>First, users will be asked to either create an account or login.</p>
                    </section>
                    <section className="rightAboutSection">
                        <img className="aboutImage" src="https://res.cloudinary.com/dzpne110u/image/upload/v1724946168/Project3Revature/loginimage.jpg"/>
                    </section>
                </div>
                <div className="aboutSection">
                    <section className="leftAboutSection">
                        <p>After creating their account, users will be prompted to take the pawsonality test. This will inform them of their perfect animal companion.</p>
                    </section>
                    <section className="rightAboutSection">
                        <img className="aboutImage" src="https://res.cloudinary.com/dzpne110u/image/upload/v1724946720/Project3Revature/quizimage.jpg"/>
                    </section>
                </div>
                <div className="aboutSection">
                    <section className="leftAboutSection">
                        <p>After completing the multiple choice questions, users will be given their pet.</p>
                    </section>
                    <section className="rightAboutSection">
                        <img className="aboutImage" src="https://res.cloudinary.com/dzpne110u/image/upload/v1724946876/Project3Revature/quizcompletepage.jpg"/>
                    </section>
                </div>
                <div className="aboutSection">
                    <section className="leftAboutSection">
                        <p>After completing their quiz, users can go their profile page and see a history of the quizes they have taken.</p>
                    </section>
                    <section className="rightAboutSection">
                        <img className="aboutImage" src="https://res.cloudinary.com/dzpne110u/image/upload/v1724946973/Project3Revature/profilepage.jpg"/>
                    </section>
                </div>
                <p>Users can take as many quizes as they would like. Enjoy!</p>
            </div>
        </>
    )

}

export default AboutPawsonality