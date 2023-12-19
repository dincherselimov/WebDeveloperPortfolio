import React from "react";
import PageContent from '../content/PageContent.json';
const Motivation = () => {
    const motivationText = PageContent.Motivation;
    return (
        <section className="motivation-section">
            <div className="quote-container">
                <p className="quote-text">{motivationText.MotivationText} </p>
                <p className="author">{motivationText.Author}</p>
            </div>
        </section>
    );
}

export default Motivation;
