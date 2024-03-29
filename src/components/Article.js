import React, {Component} from 'react';
class Article extends Component {
     state = {
            isOpen: true,
        };

     render(){
        const {article} = this.props;
        console.log(`props ${this.props}`);
        const body = this.state.isOpen && <section>{article.text}</section>;
        return (
            <div >
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}>{this.state.isOpen ? 'close' : 'open'}</button>
                </h2>
                {body}
                <h3>creation date: {(new Date().toDateString())}</h3>
            </div>
        )
    }
     handleClick=()=> {
        console.log('button close clicked');
        this.setState({
            isOpen: !this.state.isOpen,
        })
    };
}


export  default  Article;