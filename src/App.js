import React, { Component } from 'react';

class App extends Component {

  async postData() {

    try{

        Let result = await fetch('https://webhook.site/9f7afac5-4d0a-4326-b1ed-cdeb3835aa98', {
          method: 'post' ,
          mode: 'no-cors'
          headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json',
        },
        body: JSON.stringify({
            key1: 'myusername'
            email: 'mymail@gmail.com'
            name: 'reema',
            lastname: 'joseph',
            age: 22
         })
     });

     console.log(result)

    } catch(e) {
        console.log(e)
    }    
  }

  render(){
    return (
      <div className="App">
          <button onClick={ () => this.postData() }>Press me to post </button>
      </div>
    );
  }
  
}

export default App;
