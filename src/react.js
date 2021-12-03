function Field({type, name, value, onChange, children}){
    return <div className="form-group">
        <input type={type} placeholder={children} value={value} onChange={onChange} id={name} name={name}  className="form-control mt-3"/>
    </div>
}
function Checkbox({name, value, onChange, children}){
    return <div className="form-check">
        <label htmlFor={name} className="form-check-label mt-2">{children}</label>
        <input type="checkbox" checked={value} onChange={onChange} id={name} name={name}  className="form-check-input mt-3"/>
    </div>
}

class Formular extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            email: '',
            newsletter: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        const name = e.target.name
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const data = JSON.stringify(this.state)
        this.setState({
            nom: '',
            email: '',
            newsletter: false
        })
    }

    render()
    {
        return <form className="container p-3" onSubmit={this.handleSubmit}>
            <Field type="text" name="nom" value={this.state.nom} onChange={this.handleChange}>Entrez votre nom</Field>
            <Field type="email" name="email" value={this.state.email} onChange={this.handleChange}>Entrez votre Email</Field>
            <Checkbox name="newsletter" value={this.state.newsletter} onChange={this.handleChange}>Voulez-vous des newsletters ?</Checkbox>
            <button type="submit" className="btn btn-primary mt-3 btn-sm">Envoyer</button>
            <div className="alert alert-warning col-6 mt-4">{JSON.stringify(this.state)}</div>
        </form>
    }
}

class Welcom extends React.Component{
    render() {
        return <div className="container col-6 mt-5">
            <h1>Bonjour {this.props.name}</h1>
            <p className="alert alert-success">
                {this.props.children}
            </p>
            <Formular/>
        </div>
    }
}

function Home(){
    return <div>
        <Welcom name="Bruno">Test</Welcom>
    </div>
}

ReactDOM.render(<Home/>, document.querySelector('#ddr'))