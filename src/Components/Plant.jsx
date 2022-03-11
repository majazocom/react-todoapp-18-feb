export default function Plant(props) {
    console.log(props);
    return (
        <article>
            <p>{props.data.name}</p>
        </article>
    )
}