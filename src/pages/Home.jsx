import Col from "../components/Col";
import Row from "../components/Row";
import WiggleTitle from "../components/WiggleTitle";
export default function Home() {
    return (
        <>
            <WiggleTitle
                className="title"
                id="frontPageTitle"
                title="<Syntax Success/>"
            />
            <h1 id="underline">_____________________</h1>
            <br />
            <br />
            <Row justify="space-around" align="center">
                <Col
                    width="40%"
                    justify="center"
                    align="center"
                    id="infoBlock1">
                    <h2>Learn how to code,</h2>
                    <ul>
                        <li>
                            from the very basics, like setting up your
                            development environment,
                        </li>
                        <li>
                            to the most latest and widely-used libraries, like
                            Angular and React,
                        </li>
                        <li>
                            from people who have experience programming{" "}
                            <b style={{ color: "#ffe2ad" }}>and teaching</b>,
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
                    justify="start"
                    align="center"
                    id="signInBlock">
                    <h2> Get started here:</h2>
                    <Row justify="center" align="center">
                        <Col width="50%" justify="center" align="center">
                            Sign in with email/password
                        </Col>
                        <Col width="50%" justify="center" align="center">
                            signin with google
                        </Col>
                    </Row>
                </Col>
                <div id="infoBlock2">
                    <h2>Our mission:</h2>
                </div>
            </Row>
        </>
    );
}
