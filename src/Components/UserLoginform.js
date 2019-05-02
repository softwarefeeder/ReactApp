import React from 'react';


export class UserLoginForm  extends React.Component
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
            <input value="Enter the Age" />
        <button
          title="Submit"
          color="#841584"
         onClick={() => fetch("http://localhost:3000/db.json").then (function(response)
         {
         return response.json();
         }).then
        (function(myJson)
        {
           // Console.log(JSON.stringify(myJson))
        })
         }>Submit</button>
            </form>
       );
     
    }
}