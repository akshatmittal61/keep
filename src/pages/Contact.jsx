import React from 'react'
import authorImg from '../images/author.png'

const Contact = () => {
    const author = {
        name: "Akshat Mittal",
        github: ["https://github.com/akshatmittal61", "akshatmittal61"],
        linkedin: ["https://www.linkedin.com/in/akshat-mittal-851073202", "akshat-mittal-851073202"],
        twitter: ["https://twitter.com/akshatmittal61", "akshatmittal61"],
        ig: ["https://instagram.com/akshatmittal61", "akshatmittal61"],
        mail: ["mailto:akshatmittal2506@gmail.com", "akshatmittal2506@gmail.com"]
    }
    return (
        <>
            <div class="card">
                <div class="card-frame">
                    <div class="card-box">
                        <div class="card-head">
                            <div class="card-image">
                                <img src={authorImg} alt="author" />
                            </div>
                            <div class="card-name">
                                {author.name}
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="card-social">
                                <div class="card-social-label">LinkedIn</div>
                                <div class="card-social-content">
                                    <a href={author.linkedin[0]} class="card-social-link" target="_blank" rel="noreferrer">
                                        {`@${author.linkedin[1]}`}
                                    </a>
                                </div>
                            </div>
                            <div class="card-social">
                                <div class="card-social-label">GitHub</div>
                                <div class="card-social-content">
                                    <a href={author.github[0]} class="card-social-link" target="_blank" rel="noreferrer">
                                        {`@${author.github[1]}`}
                                    </a>
                                </div>
                            </div>
                            <div class="card-social">
                                <div class="card-social-label">E-Mail</div>
                                <div class="card-social-content">
                                    <a href={author.mail[0]} class="card-social-link" target="_blank" rel="noreferrer">
                                        {`${author.mail[1]}`}
                                    </a>
                                </div>
                            </div>
                            <div class="card-social">
                                <div class="card-social-label">Instagram</div>
                                <div class="card-social-content">
                                    <a href={author.ig[0]} class="card-social-link" target="_blank" rel="noreferrer">
                                        {`@${author.ig[1]}`}
                                    </a>
                                </div>
                            </div>
                            <div class="card-social">
                                <div class="card-social-label">Twitter</div>
                                <div class="card-social-content">
                                    <a href={author.twitter[0]} class="card-social-link" target="_blank" rel="noreferrer">
                                        {`@${author.twitter[1]}`}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
