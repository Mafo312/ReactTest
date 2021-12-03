
function FormulaireHandle({name, type, value,onChange, children}){
    return <div className="mt-2 form-groupe container">
        <input type={type} name={name} value={value} className="form-control" onChange={onChange} placeholder={children}/>
    </div>
}

class Formulaire extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            numero: 0
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        let n = 0
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        console.log(e)
    }

    render(){
        return <div className="col-6 containder">
            <form className="container  mt-5" onSubmit={this.handleSubmit}>
                <FormulaireHandle type="number" onChange={this.handleChange} value={this.numero} name="numero">Votre nombre</FormulaireHandle>
                <FormulaireHandle type="number" value={this.numero} name="numero">{JSON.stringify(this.state)}</FormulaireHandle>
            </form>
        </div>
    }

}

function Index(){
    return <div className="container">
        <Formulaire/>
    </div>
}

ReactDOM.render(<Index/>, document.querySelector("#app"))

