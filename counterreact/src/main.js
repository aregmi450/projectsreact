import React, {Component} from 'react'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            number: 0
         }
    }
    
    //  defining functions to use 
    increment = () => {
        this.setState({number: this.state.number+1})
    }
    decrement = () => {
        this.setState({ number: this.state.number - 1 })
    }
    neutral = () => {
        this.setState({ number: 0 })
    }
    render() { 
        return ( 
            <div className='row justify-content-center'>
                <div className='col-md-5' style={{ marginTop: '200px', border: '5px solid black' }}>

                    <h1>React Counter</h1>
                    {/* to use external variable in html content wrtie in curly braces  */}
                    <h1>{this.state.number}</h1>
                    <button className='btn btn-success' onClick={this.increment}>Increment</button>
                    <button className='btn btn-danger' onClick={this.decrement}>Decrement</button>
                    <button className='btn btn-primary' onClick={this.neutral}>Neutral</button>
                </div>

            </div>
           
         );
    }
}
 
export default Main;

// class component only have render option function doesn't have it