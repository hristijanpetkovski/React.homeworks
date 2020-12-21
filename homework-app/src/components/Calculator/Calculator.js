import React from 'react';


 class Calc extends React.Component {

  constructor() {
    super()

    this.state = {
      firstNumer: '',
      operation: '',
      secondNumber: '',
      total: ''
    }
  }
   
  Number1 = (event) => {
    const value = event.target.value
    
    this.setState ({
      firstNumer: value
    })
  }
  Operation = (event) => {
    this.setState({
      operation:event.target.value
    })
  }
  Number2 = (event) => {
    this.setState({
      secondNumber:event.target.value,
    });
  };
  

  calcNumber = () => {
   
    
     
     const totalPost = this.state.firstNumer + this.state.operation + this.state.secondNumber;
      this.setState({total: eval(totalPost), firstNumer: '', operation: '', secondNumber:''})
    // eval 
    };
  render () {
    return (
      <div>
      <div>
       <input type="number" placeholder='First Number' value={this.state.firstNumer} onChange={this.Number1}/>
      </div>
       <div>
       <input  placeholder="Operation" value={this.state.operation} onChange={this.Operation}/>
       </div>
       <div>
       <input type='number' placeholder="Second Number" value={this.state.secondNumber} onChange={this.Number2}/>
       </div>
       <div>
       <button type="submit"  onClick={this.calcNumber}>Calc</button>
      </div> 
      <div>
      <span>{this.state.total}</span>
        </div>   
      </div>
    )

  }
}
export default Calc;
      
        

       
      
