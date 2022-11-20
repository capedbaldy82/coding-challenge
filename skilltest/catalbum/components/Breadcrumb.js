function Breadcrumb({ $app, initialState }) {
  this.state = initialState;

  this.$target = document.createElement('nav');
  $app.appendChild(this.$target);

  this.setState = (nextData) => {
    this.state = nextData;

    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = this.state.map((node) => `<span>${node}</span>`).join('');
  };

  this.render();
}

export { Breadcrumb };
