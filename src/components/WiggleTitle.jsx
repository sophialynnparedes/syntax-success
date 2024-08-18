import { animated } from "react-spring";
import { useWiggle } from "../hooks/useWiggle";
import Row from "./Row";
export default function WiggleTitle(props) {
    var wordArray = [];
    var i = 0;
    var j = 0;
    while (i < props.title.length && j < props.title.length) {
        if (
            props.title.substring(i, i + 1) == " " ||
            i == props.title.length - 1
        ) {
            wordArray.push(props.title.substring(j, i + 1));
            j = i + 1;
        }
        i++;
    }

    const words = wordArray.map((word, index) => {
        return (
            <>
                <div className="wiggleWord">
                    <WiggleWord
                        className={props.className}
                        id={props.id}
                        word={word}
                        key={index}
                    />
                </div>
            </>
        );
    });

    function WiggleLetter(props) {
        const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });
        return (
            <animated.div onMouseEnter={trigger} style={style}>
                <h1 className={props.className}>{props.letter}</h1>
            </animated.div>
        );
    }

    function WiggleWord(props) {
        var letterArray = [];
        for (var k = 0; k < props.word.length; k++) {
            letterArray.push(props.word.substring(k, k + 1));
        }

        const letters = letterArray.map((letter, index) => {
            return (
                <WiggleLetter
                    className={props.className}
                    letter={letter}
                    key={index}
                />
            );
        });

        return <>{letters}</>;
    }

    return (
        <>
            <div className="wiggleTitle" id={props.id}>
                {words}
            </div>
        </>
    );
}
