import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css';


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [
                {name:'Joni',salary:800,increase:false,raise:true,id:1},
                {name:'Smith',salary:1900,increase:false,raise:false,id:2},
                {name:'Alkarn',salary:12000,increase:true,raise:false,id:3}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4
    }


    deleteItem = (id) => {
        this.setState(({data}) =>{
            return{
                 data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name,salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            raise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return{
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) =>{
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return{...item, [prop]: !item[prop]}
                }
                return item;
            })
        })) 
    }

    searchEmp = (items, term) =>{
        if (term.length === 0){
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    filterSalary = (items,filter) =>{
        if(filter === 'all'){
            return items;
        }else if(filter === 'rise'){
            return items.filter(item => item.raise);
        }else if(filter === 'salary'){
            return items.filter(item => item.salary > 1000)
        }else{
            return items;
        }
        
    }

    onUpdateSearch = ((term)=>{
        this.setState({term});
    })

    onFilterClick = (filter =>{
        this.setState({filter});
    })

    render(){
        const {data,term,filter} = this.state;
        const employees = this.state.data.length;
        const raiseEmp = this.state.data.filter(item => item.raise === true).length;
        const visibleData = this.filterSalary(this.searchEmp(data,term),filter);

        return (
            <div className="app">
                <AppInfo
                dataLength = {employees}
                raiseNumber = {raiseEmp}/>
    
                <div className="search-panel">
                    <SearchPanel
                    onUpdateSearch = {this.onUpdateSearch}/>
                    <AppFilter
                    filter={filter}
                    onFilterClick ={this.onFilterClick}/>
                </div>
    
                <EmployeesList 
                data={visibleData}
                onDelete = {this.deleteItem}
                onToggleProp = {this.onToggleProp}/>
                <EmployeesAddForm
                onAdd = {this.addItem}/>
            </div>
        )
    }

}

export default App;