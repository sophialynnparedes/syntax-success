import { Link } from "wouter";

export default function Button(props) {
    if (!props.href) {
        return (
            <button
                className={"button " + props.className}
                id={props.selected ? "selected" : ""}
                onClick={props.method}
                disabled={props.disabled}>
                <p>{props.label}</p>
            </button>
        );
    } else {
        return (
            <Link
                href={props.href}
                className={"button " + props.className}
                id={props.selected ? "selected" : ""}
                onClick={props.method}>
                <p>{props.label}</p>
            </Link>
        );
    }
}
