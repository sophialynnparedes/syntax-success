export default function Row(props) {
    return (
        <div
            className={"row " + props.className}
            id={props.id}
            style={{ justifyContent: props.justify, alignItems: props.align }}>
            {props.children}
        </div>
    );
}
