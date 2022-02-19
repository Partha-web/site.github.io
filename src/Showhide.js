import React from 'react'

export default class Showhide extends React.Component{

    constructor()
    {
        super();
        this.state={
            show:true
        }
    }

        render()
        {
            return(
                <div>

                    {
                        this.state.show?
                        <h1>When you Press this button then hide and show. </h1>
                        :null
                    }



                    <button onClick={()=>{this.setState({show:!this.state.show})}}>ShowHide</button>
                </div>
            )
        }
}