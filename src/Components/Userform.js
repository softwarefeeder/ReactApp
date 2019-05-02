import React from 'react';


export class UserForm  extends React.Component
{

    constructor ()
    {
        super();
        this.state ={
            value :"Hi"
        };
    }

    render()
    {
        return (
            <form className="container" onSubmit={this.handleFormSubmit}>
            <input value="Enter the name" />
            <input value="age" />
        <button
          title="Submit"
          color="#841584"
         onClick={() => alert ('How can help you ?')}/>
            </form>
       );
     
    }
}