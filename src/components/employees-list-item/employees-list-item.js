import './employees-list-item.css'
import { Component } from 'react';

class EmployeesListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            increase: false,
            raise: false
        }

    }

    onIncrease = () =>{
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onRaise = () =>{
        this.setState(({raise}) => ({
            raise: !raise
        }))
    }


    render(){
        const {name, salary, onDelete} = this.props;
        const {increase, raise} = this.state;

        let className = "list-group-item d-flex justify-content-between";
        if(increase){
            className += " increase";
        }
        if(raise){
            className += " like";
        }
        

        return (
            <li className={className}>
                <span className="list-group-item-label" onClick={this.onRaise}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}
export default EmployeesListItem;