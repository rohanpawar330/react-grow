import User from "./User"
import UserClass from "./UserClass"

export default About = () => {
    return (
        <h1>About
            <User name="rohan" hobby="football" location="jabalpur"></User>
            <UserClass name="rohan" hobby="football" location="jabalpur"></UserClass>
        </h1>)
}