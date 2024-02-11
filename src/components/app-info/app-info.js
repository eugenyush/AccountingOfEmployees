import './app-info.css'

const AppInfo = (props) =>{
    const {dataLength,raiseNumber} = props;
    return (
        <div className="app-info">
            <h1>Accounting of employees in the company</h1>
            <h2>Total number of employees: {dataLength}</h2>
            <h2>The award will be received:  {raiseNumber}</h2>
        </div>
    )
}


export default AppInfo;