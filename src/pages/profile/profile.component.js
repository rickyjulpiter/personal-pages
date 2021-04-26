import React from "react";
import { Link } from "react-router-dom";
import Education from "../../component/profile/education.component";
import WorkExperiences from "../../component/profile/work.component";

import "./profile.styles.scss";

export default function Profile() {
    return (
        <>
            <section className="py-5 text-center personal">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="text-white font-weight-bolder">
                            Hi! I'm Ricky J
                        </h1>
                        <p className="font-weight-bold text-white">
                            Nice to know you visit this page, and now let me to
                            introduce my self, my project and my short story
                            life. Connect with me with this social media below.
                            Stay safe!
                        </p>
                        <p>
                            <Link
                                to={{
                                    pathname:
                                        "https://github.com/rickyjulpiter",
                                }}
                                target="_blank"
                                className="btn btn-github mr-2"
                            >
                                Github
                            </Link>
                            <Link
                                to={{
                                    pathname:
                                        "https://www.linkedin.com/in/rickyjulpiter/",
                                }}
                                target="_blank"
                                className="btn btn-linkedin mr-2"
                            >
                                LinkedIn
                            </Link>
                            <Link
                                to={{
                                    pathname:
                                        "https://www.instagram.com/rickyjulpiter/",
                                }}
                                target="_blank"
                                className="btn btn-instagram mr-2"
                            >
                                Instagram
                            </Link>
                        </p>
                    </div>
                </div>
            </section>

            <Education />
            <WorkExperiences />
        </>
    );
}
