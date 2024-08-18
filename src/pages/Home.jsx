import Button from "../components/Button";
import Col from "../components/Col";
import Row from "../components/Row";
import WiggleTitle from "../components/WiggleTitle";
import { useState, useEffect } from "react";
import { googleLogin } from "../firebase";
export default function Home() {
    const [page, setPage] = useState(0);

    function WhatWeDo(props) {
        return <></>;
    }

    function WhyWeDoIt(props) {
        return <></>;
    }

    function WhoWeAre(props) {
        return <></>;
    }

    function ContactUs(props) {
        return <></>;
    }

    return (
        <>
            <div className="background"></div>
            <div className="background2"></div>
            <div id="frontpage">
                <WiggleTitle
                    className="title"
                    id="frontPageTitle"
                    title="<Syntax Success/>"
                />
                <h1 id="underline">_____________________</h1>
                <br />
                <br />
                <Row
                    justify="space-around"
                    align="center"
                    id="infoBlock1andSignIn">
                    <Col
                        width="40%"
                        justify="center"
                        align="start"
                        id="infoBlock1">
                        <WiggleTitle
                            className="h2"
                            title="Learn how to code,"
                        />
                        <ul>
                            <li>
                                from the very basics, like setting up your
                                development environment,
                            </li>
                            <li>
                                to the most latest and widely-used libraries,
                                like Angular and React,
                            </li>
                            <li>
                                from people who have experience programming{" "}
                                <b style={{ color: "#ffe2ad" }}>and teaching</b>
                                ,
                            </li>
                            <li>
                                with carefully-crafted lessons, videos, and
                                projects,
                            </li>
                            <li>
                                and the best part:{" "}
                                <b style={{ color: "#ffe2ad" }}>
                                    it's completely free
                                </b>
                                .
                            </li>
                        </ul>
                    </Col>
                    <Col
                        width="40%"
                        justify="center"
                        align="center"
                        id="signInBlock">
                        <WiggleTitle className="h2" title="Get started here:" />
                        <Row justify="center" align="center">
                            <Col width="45%" justify="center" align="center">
                                Sign in with email/password
                            </Col>
                            <Col width="10%" justify="center" align="center">
                                <h2 id="or">or</h2>
                            </Col>
                            <Col width="45%" justify="center" align="center">
                                <button
                                    className="button"
                                    onClick={googleLogin}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMidYMid"
                                        viewBox="0 0 256 262"
                                        className="svg">
                                        <path
                                            fill="#4285F4"
                                            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                            className="blue"></path>
                                        <path
                                            fill="#34A853"
                                            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                            className="green"></path>
                                        <path
                                            fill="#FBBC05"
                                            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                                            className="yellow"></path>
                                        <path
                                            fill="#EB4335"
                                            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                            className="red"></path>
                                    </svg>
                                    <span className="text">
                                        Continue with Google
                                    </span>
                                </button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <Row justify="center">
                    <div id="learn-more">
                        <WiggleTitle
                            className="h2"
                            title="Learn more about us:"
                        />
                        <Row justify="center" id="learn-more-buttons">
                            <Button
                                selected={page == 1}
                                className="frontPageButton"
                                label="What We Do"
                                method={() => {
                                    setPage(1);
                                }}
                            />
                            <Button
                                selected={page == 2}
                                className="frontPageButton"
                                label="Why We Do It"
                                method={() => {
                                    setPage(2);
                                }}
                            />
                            <Button
                                selected={page == 3}
                                className="frontPageButton"
                                label="Who We Are"
                                method={() => {
                                    setPage(3);
                                }}
                            />
                            <Button
                                selected={page == 4}
                                className="frontPageButton"
                                label="Contact Us"
                                method={() => {
                                    setPage(4);
                                }}
                            />
                        </Row>
                    </div>
                </Row>
                {page == 1 ? <WhatWeDo /> : <></>}
                {page == 2 ? <WhyWeDoIt /> : <></>}
                {page == 3 ? <WhoWeAre /> : <></>}
                {page == 4 ? <ContactUs /> : <></>}
            </div>
        </>
    );
}
