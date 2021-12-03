var n = 0;

function numberFormat(n) {
  return n.toString().padStart(2, '0');
}

function render() {

  var items = ['Tache 1', 'Tache 2', 'Tache 3'];

  var lis = items.map(function (items, k) {
    return React.createElement(
      'li',
      { key: k },
      items
    );
  });

  var tilte = React.createElement(
    React.Fragment,
    null,
    ' ',
    React.createElement(
      'h1',
      null,
      'Bonjour tout le monde compteurs',
      React.createElement(
        'span',
        null,
        ' ',
        numberFormat(n)
      )
    ),
    React.createElement(
      'ul',
      null,
      lis
    )
  );
  ReactDOM.render(tilte, document.querySelector('#app'));
}
render();

window.setInterval(function () {
  n++;
  render();
}, 1000);