import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Helmet } from "react-helmet";
import "../styles/layout.scss";
export default class index extends Component {
    render() {
        return (
            <div className="main">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>YaHeng Su</title>
                    <link rel="canonical" href="https://yaheng.io" />
                </Helmet>
                <h1 className="heading">Hello, I'm YaHeng! <span role="img" aria-label="hand wave emoji">🖐</span></h1>
                <div className="desc">
                    <p>
                        I'm a third-year Computer Engineering student at the
                        University of Waterloo with a passion for technological
                        innovation. When I'm not studying or coding, I'm probably learning 
                        how to dance or watching anime!
                    </p>
                    <p>
                        I'm an incoming software engineering intern at{" "}
                        <a
                            href="https://www.squarepoint-capital.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                        Squarepoint Capital
                        </a> where I'll be working on their trading infrastructure and tooling. 
                        Previously, I worked on backend systems and digital
                        identity protocols at{" "}
                        <a
                            href="https://securekey.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            SecureKey Technologies{" "}
                        </a>
                        and next-generation iOS banking solutions at the{" "}
                        <a
                            href="https://twitter.com/tdlab"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            TD Innovation Lab
                        </a>
                        .
                    </p>
                    <p>
                        I'm always looking for new opportunities to grow and
                        meet new people. Connect with me on one of the platforms
                        below, and let's chat!
                    </p>
                </div>
                <a
                    href="https://github.com/yahengsu"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Button variant="outlined" className="github-button">
                        Github
                    </Button>
                </a>
                <a href="yaheng_resume.pdf" target="_blank">
                    <Button variant="outlined" className="resume-button">
                        Resume
                    </Button>
                </a>
                <a
                    href="https://www.linkedin.com/in/yahengsu/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Button variant="outlined" className="linkedin-button">
                        LinkedIn
                    </Button>
                </a>
                <a
                    href="mailto:yaheng.su1@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button variant="outlined" className="email-button">
                        Email
                    </Button>
                </a>
            </div>
        );
    }
}
