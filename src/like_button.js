let n = 0

function numberFormat(n){
  return n.toString().padStart(2, '0')
}

function render() {

  const items = [
    'Tache 1',
    'Tache 2',
    'Tache 3'
  ]

  const lis = items.map((items, k) => <li key={k}>{items}</li>)

  const tilte =
<React.Fragment> <h1>
        Bonjour tout le monde compteurs
        <span> {numberFormat(n)}</span>
        </h1>
        <ul>
          {lis}
        </ul>
    </React.Fragment>
ReactDOM.render(tilte, document.querySelector('#app'))
}
render()

window.setInterval(() => {
  n++
  render()
}, 1000)