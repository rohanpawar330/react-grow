import React from 'react'

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }

componentDidMount(){
    console.log("did mount");
}

componentDidUpdate(){
    console.log("did update");
}

componentWillUnmount(){
    console.log("did unmount");
}

    render() {
        return (
            <div className="about-cont">
<button onClick={()=>{
    this.setState({count:this.state.count+1})
}}>count
</button>

{this.state.count}
                <h3>{this.props.name}</h3>
                <h4>{this.props.hobby}</h4>
                <h3>{this.props.location}</h3>
            </div>)
    }
}

export default UserClass;