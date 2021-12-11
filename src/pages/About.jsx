import React from "react";
import "../code.css";
import { Link } from "react-router-dom";
import favicon from "../images/favicon.svg";

const About = () => {
	return (
		<section className="about">
			<div className="about-container">
				<div className="about-head">
					<div className="about-head-image">
						<img
							src={favicon}
							alt="Keep"
							className="about-head-image__img"
						/>
					</div>
					<div className="about-head-title">
						<span className="about-head-title__text">
							About Keep
						</span>
					</div>
				</div>
				<div className="about-body">
					<div className="about-body-section">
						<div className="about-body-section__title">
							Introduction
						</div>
						<div className="about-body-section__content">
							<span>
								Keep is a full stack application built with MERN
								stack techonologies
							</span>
							<br />
							<span></span>
							<span>
								Frontend framework:
								<a href="https://reactjs.org">React.js</a>
							</span>
							<span>
								Runtime for backend:
								<a href="https://nodejs.org">Node.js</a>
							</span>
							<span>
								Backend framework:
								<a href="https://expressjs.com">Express.js</a>
							</span>
						</div>
					</div>
					<div className="about-body-section">
						<div className="about-body-section__title">
							Navigation
						</div>
						<div className="about-body-section__content">
							<h4>
								<Link to="/">Home Page</Link>
							</h4>
							<span>
								Home Page of Keep contains all your notes. In
								case of long notes, the container will be
								truncated. To view the whole note, click on it
								to read it.
							</span>
							<br />
							<span></span>
							<h4>
								<Link to="/add">Add Page</Link>
							</h4>
							<span>
								To add a new note, click on the + icon at the
								bottom right corner of the application.
							</span>
							<span>
								You can also add a new note by clicking on the
								add (+) icon in the header.
							</span>
							<span>
								You can customize a new note by applying a color
								of your choice.
							</span>
							<br />
							<h4>
								<Link to="/contact">Contact the developer</Link>
							</h4>
							<span>
								To contact the developer, go to the contact us
								page and connect with them at different social
								platforms
							</span>
							<br />
						</div>
					</div>
					<div className="about-body-section">
						<div className="about-body-section__title">API</div>
						<div className="about-body-section__content">
							<pre className=" language-javascript">
								<code id="example" className=" language-javascript">
									<span className="token function">fetch</span>
									<span className="token punctuation">('</span>
									<span className="token string">{`${window.location.href}/api/notes`}</span>
									<span className="token punctuation">')</span>
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;
									<span className="token punctuation">.</span>
									<span className="token function">then</span>
									<span className="token punctuation">(</span>
									<span className="token parameter">
										response
									</span>
									<span className="token operator">=&gt;</span>
									response
									<span className="token punctuation">.</span>
									<span className="token function">json</span>
									<span className="token punctuation">(</span>
									<span className="token punctuation">)</span>
									<span className="token punctuation">)</span>
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;
									<span className="token punctuation">.</span>
									<span className="token function">then</span>
									<span className="token punctuation">(</span>
									<span className="token parameter">json</span>
									<span className="token operator">=&gt;</span>
									console
									<span className="token punctuation">.</span>
									<span className="token function">log</span>
									<span className="token punctuation">(</span>json
									<span className="token punctuation">)</span>
									<span className="token punctuation">)</span>
								</code>
							</pre>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
