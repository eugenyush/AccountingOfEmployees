import './employees-add-form.css';
import { Component } from 'react';

class EmployeesAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
             name: '',
             salary: '',
             raise: ''
        }
    }

    OnValueChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

   render(){

    const {name,salary} = this.state;

    return (
        <div className="app-add-form">
            <h3>Add a new employee</h3>
            <form
                className="add-form d-flex"
                onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="What's his name?" 
                    onChange={this.OnValueChange}
                    name='name'
                    value={name}/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Salary $?" 
                    onChange={this.OnValueChange}
                    name='salary'
                    value={salary}/>

                <button type="submit"
                        className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
   }
}

export default EmployeesAddForm;