import Button from "../components/Button";
import Col from "../components/Col";
import Row from "../components/Row";
import WiggleTitle from "../components/WiggleTitle";
import { useState, useEffect } from "react";
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
                            <Col width="50%" justify="center" align="center">
                                Sign in with email/password
                            </Col>
                            <Col width="50%" justify="center" align="center">
                                signin with google
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
