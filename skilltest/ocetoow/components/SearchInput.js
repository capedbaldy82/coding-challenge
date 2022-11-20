export default function SearchInput({ $app, initialState }) {
  this.state = initialState;
  this.$input = document.createElement('.input');
  this.$input.setAttribute('type', 'text');

  $app.appendChild(this.$input);

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.render = () => {};
}
