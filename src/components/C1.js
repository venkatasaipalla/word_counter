import {Component} from "react";
class c1 extends Component{
    constructor(props){
        super(props);
        this.state={count:0};
    }
    handleClick=(event)=>{
        const word=event.target.value;
        const wordcount=(word)=>{
            if(word.length===0) return 0;
            else{
                word = word.replace(/(^\s*)|(\s*$)/gi,"");
                word = word.replace(/[ ]{2,}/gi," ");
                word = word.replace(/\n /," ");
                return word.split(' ').length; 
            }
        }
        this.setState({
            count:wordcount(word),
        })
    }
    render(){

        return(
            <div className='container' style={{textAlign:"center"}}>
                <h1>Responsive Paragraph Word Counter</h1>
                <textarea cols={"80"} rows={"10"} style={{maxWidth:"100%"}} onChange={this.handleClick}></textarea>
                <p>Word Count: {this.state.count}</p>
            </div>
        )
    }
}
export default c1;