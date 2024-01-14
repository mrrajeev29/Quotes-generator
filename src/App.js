import React from "react";
import axios from 'axios';
import './App.css'
class App extends React.Component{


    state={ advice: ''};

    componentDidMount(){
        //console.log('COMPONENT DID MOUNT');
        this.fetchAdvice();

    }

    fetchAdvice=()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{

            const {advice}=response.data.slip;
            //console.log(advice);

            this.setState({advice});
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        const {advice} =this.state;
        return(
            <>
            <div className="full">
            <div id="data" className="shadow-lg p-3 mb-5  rounded">

                <h1>{advice}</h1>
            </div>
            </div>
            <center><button type="button" className="bt" onClick={Refresh} >Next Advice</button></center>
            </>
        );
    }
}


function Refresh() {
    window.parent.location = window.parent.location.href;
}
export default App;