function Nodes({ $app, initialState, onClick, onBackClick }) {
  this.state = initialState;

  this.$target = document.createElement('ul');
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.onClick = onClick;
  this.onBackClick = onBackClick;

  this.render = () => {
    if (this.state.nodes) {
      const nodesTemplate = this.state.nodes
        .map((node) => {
          const iconPath = node.type === 'FILE' ? './img/file.jpeg' : './img/directory.jpeg';

          return `
          <div class="Node" data-node-id="${node.id}">
            <img src="${iconPath}" />
            <div>${node.name}</div>
          </div>
        `;
        })
        .join('');

      this.$target.innerHTML = !this.state.isRoot ? `<div class="Node"><img src="./img/prev.jpg"></div>${nodesTemplate}` : nodesTemplate;
    }

    this.$target.querySelectorAll('.Node').forEach(($node) => {
      $node.addEventListener('click', (e) => {
        const { nodeId } = e.currentTarget.dataset;
        const selectedNode = this.state.nodes.find((node) => node.id === nodeId);

        if (!nodeId) {
          this.onBackClick();
        }

        if (selectedNode) {
          this.onClick(selectedNode);
        }
      });
    });
  };

  this.render();
}

export { Nodes };
