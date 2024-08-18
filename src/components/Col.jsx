export default function Col(props) {
    return (
        <div
            className={"col " + props.className}
            id={props.id}
            style={{
                width: props.width,
                justifyContent: props.justify,
                alignItems: props.align,
                flexDirection: props.reverse ? "column-reverse" : "column",
            }}>
            {props.children}
        </div>
    );
}
