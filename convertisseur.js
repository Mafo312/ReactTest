var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function FormulaireHandle(_ref) {
    var name = _ref.name,
        type = _ref.type,
        value = _ref.value,
        onChange = _ref.onChange,
        children = _ref.children;

    return React.createElement(
        "div",
        { className: "mt-2 form-groupe container" },
        React.createElement("input", { type: type, name: name, value: value, className: "form-control", onChange: onChange, placeholder: children })
    );
}

var Formulaire = function (_React$Component) {
    _inherits(Formulaire, _React$Component);

    function Formulaire(props) {
        _classCallCheck(this, Formulaire);

        var _this = _possibleConstructorReturn(this, (Formulaire.__proto__ || Object.getPrototypeOf(Formulaire)).call(this, props));

        _this.state = {
            numero: 0
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Formulaire, [{
        key: "handleChange",
        value: function handleChange(e) {
            var n = 0;
            var name = e.target.name;
            var value = e.target.value;
            this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            console.log(e);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "col-6 containder" },
                React.createElement(
                    "form",
                    { className: "container  mt-5", onSubmit: this.handleSubmit },
                    React.createElement(
                        FormulaireHandle,
                        { type: "number", onChange: this.handleChange, value: this.numero, name: "numero" },
                        "Votre nombre"
                    ),
                    React.createElement(
                        FormulaireHandle,
                        { type: "number", value: this.numero, name: "numero" },
                        JSON.stringify(this.state)
                    )
                )
            );
        }
    }]);

    return Formulaire;
}(React.Component);

function Index() {
    return React.createElement(
        "div",
        { className: "container" },
        React.createElement(Formulaire, null)
    );
}

ReactDOM.render(React.createElement(Index, null), document.querySelector("#app"));