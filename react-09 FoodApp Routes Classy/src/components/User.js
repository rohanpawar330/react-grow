export default User = (props) => {
    return (
        <div className="about-cont">
            <h3>{props.name}</h3>
            <h4>{props.hobby}</h4>
            <h3>{props.location}</h3>
        </div>)
}