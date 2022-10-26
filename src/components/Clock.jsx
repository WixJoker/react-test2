// import { Component } from 'react';

// class Clock extends Component {
    
//     state = {
//         time: new Date().toLocaleTimeString(),
//     }

// intervalid = null

//     componentDidMount() {
//         this.intervalid = setInterval(() => this.setState({time: new Date().toLocateTimeString()}), 1000,)
//     }

//     componentWillUnmount() {
//         clearInterval(this.intervalid)
//     }

//     // shouldComponentUpdate(nextProps, nestState) {
//     //     return nextState.activeId !== this.state.activeId
//     // }

//     render() {
//         return <div>{this.state.time}</div>
//     }
    
// }

// export default Clock