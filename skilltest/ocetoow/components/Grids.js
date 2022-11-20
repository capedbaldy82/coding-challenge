export default function Grids({ $app, initialState }) {
  this.state = initialState;

  this.$thead = document.createElement('thead');
  this.$tbody = document.createElement('tbody');

  $app.appendChild(this.$thead);
  $app.appendChild(this.$tbody);

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.render = () => {
    if (this.state) {
    }
  };

  this.render();
}
