var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Clock } from "./studi";

function WelcomFun(_ref) {
    var name = _ref.name,
        children = _ref.children;

    console.log({ name: name });
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Bonjour ",
            name
        ),
        React.createElement(
            "p",
            { className: "alert alert-success" },
            children
        )
    );
}

function Field(_ref2) {
    var type = _ref2.type,
        name = _ref2.name,
        value = _ref2.value,
        onChange = _ref2.onChange,
        children = _ref2.children;

    return React.createElement(
        "div",
        { className: "form-group" },
        React.createElement("input", { type: type, placeholder: children, value: value, onChange: onChange, id: name, name: name, className: "form-control mt-3" })
    );
}
function Checkbox(_ref3) {
    var name = _ref3.name,
        value = _ref3.value,
        onChange = _ref3.onChange,
        children = _ref3.children;

    return React.createElement(
        "div",
        { className: "form-check" },
        React.createElement(
            "label",
            { htmlFor: name, className: "form-check-label mt-2" },
            children
        ),
        React.createElement("input", { type: "checkbox", checked: value, onChange: onChange, id: name, name: name, className: "form-check-input mt-3" })
    );
}

var Formular = function (_React$Component) {
    _inherits(Formular, _React$Component);

    function Formular(props) {
        _classCallCheck(this, Formular);

        var _this = _possibleConstructorReturn(this, (Formular.__proto__ || Object.getPrototypeOf(Formular)).call(this, props));

        _this.state = {
            nom: '',
            email: '',
            newsletter: false
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Formular, [{
        key: "handleChange",
        value: function handleChange(e) {
            var name = e.target.name;
            var type = e.target.type;
            var value = type === 'checkbox' ? e.target.checked : e.target.value;
            this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            e.preventDefault();
            var data = JSON.stringify(this.state);
            this.setState({
                nom: '',
                email: '',
                newsletter: false
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { className: "container p-3", onSubmit: this.handleSubmit },
                React.createElement(
                    Field,
                    { type: "text", name: "nom", value: this.state.nom, onChange: this.handleChange },
                    "Entrez votre nom"
                ),
                React.createElement(
                    Field,
                    { type: "email", name: "email", value: this.state.email, onChange: this.handleChange },
                    "Entrez votre Email"
                ),
                React.createElement(
                    Checkbox,
                    { name: "newsletter", value: this.state.newsletter, onChange: this.handleChange },
                    "Voulez-vous des newsletters ?"
                ),
                React.createElement(
                    "button",
                    { type: "submit", className: "btn btn-primary mt-3 btn-sm" },
                    "Envoyer"
                ),
                React.createElement(
                    "div",
                    { className: "alert alert-warning col-6 mt-4" },
                    JSON.stringify(this.state)
                )
            );
        }
    }]);

    return Formular;
}(React.Component);

var Welcom = function (_React$Component2) {
    _inherits(Welcom, _React$Component2);

    function Welcom() {
        _classCallCheck(this, Welcom);

        return _possibleConstructorReturn(this, (Welcom.__proto__ || Object.getPrototypeOf(Welcom)).apply(this, arguments));
    }

    _createClass(Welcom, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container col-6 mt-5" },
                React.createElement(
                    "h1",
                    null,
                    "Bonjour ",
                    this.props.name
                ),
                React.createElement(
                    "p",
                    { className: "alert alert-success" },
                    this.props.children
                ),
                React.createElement(Formular, null)
            );
        }
    }]);

    return Welcom;
}(React.Component);

function Home() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            Welcom,
            { name: "Bruno" },
            "Test"
        ),
        React.createElement(Clock, null)
    );
}

ReactDOM.render(React.createElement(Home, null), document.querySelector('#ddr'));