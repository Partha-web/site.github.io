import React from 'react';


export default  class State extends React.Component{
constructor()
{
    super();
    this.state={
        name: 'partha',
        email: 'parthakhanra.tal@gmail.com',
        count: 0
    }
}

updateState(){
    this.setState({
        name: 'Partha Khanra ',
        count: this.state.count+1
    })
}

    render(){
        return(
            <div>
                <h1>This is state component</h1>
                <h2>Hello {this.state.name}</h2>
                <h2>This is my email - {this.state.email}</h2>
                <h2>Count - {this.state.count}</h2>
                {/* Upadate button */}
                <button onClick={()=>{this.updateState()}}>Update Name</button>
            </div>
        )
    }
} 