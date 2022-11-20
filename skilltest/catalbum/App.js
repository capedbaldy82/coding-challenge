import { Nodes } from './components/Nodes.js';
import { Breadcrumb } from './components/Breadcrumb.js';
import { fetcher } from './utils/fetcher.js';
import { ImageView } from './components/ImageView.js';
import { Loading } from './components/Loading.js';

const cache = {};

function App($app) {
  this.state = {
    isRoot: true,
    nodes: [],
    depth: [],
    selectedFilePath: null,
    isLoading: false,
  };

  const loading = new Loading({
    $app,
    initialState: this.state.isLoading,
  });

  const imageView = new ImageView({
    $app,
    initialState: this.state.selectedNodeImage,
  });

  const breadcrumb = new Breadcrumb({
    $app,
    initialState: this.state.depth,
  });

  const nodes = new Nodes({
    $app,
    initialState: {
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    },
    onClick: async (node) => {
      try {
        if (node.type === 'DIRECTORY') {
          if (cache[node.id]) {
            console.log('yes data');
            this.setState({
              ...this.state,
              isRoot: false,
              depth: [...this.state.depth, node.name],
              nodes: cache[node.id],
            });
          } else {
            console.log('no data');
            this.setState({
              ...this.state,
              isLoading: true,
            });

            console.log(node);

            const nextNodes = await fetcher(node.id);

            this.setState({
              ...this.state,
              isRoot: false,
              depth: [...this.state.depth, node.name],
              nodes: nextNodes,
              isLoading: false,
            });

            cache[node.id] = nextNodes;
          }
        } else if (node.type === 'FILE') {
          console.log('this is file');
          this.setState({
            ...this.state,
            selectedFilePath: node.selectedFilePath,
          });
        }
      } catch (err) {
        console.log('에러 발생: ' + err);
      }
    },
    onBackClick: async () => {
      try {
        const nextState = { ...this.state };
        nextState.depth.pop();

        const prevNodeId = nextState.depth.length === 1 ? null : nextState.depth[nextState.depth.length - 1].id;

        if (prevNodeId === null) {
          this.setState({
            ...nextState,
            isRoot: true,
            nodes: cache.root,
            isLoading: false,
          });
        } else {
          this.setState({
            ...nextState,
            isRoot: false,
            nodes: cache[prevNodeId],
            isLoading: false,
          });
        }
      } catch (err) {
        console.log('뒤로가기 오류 발생: ' + err.message);
      }
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;
    breadcrumb.setState(this.state.depth);
    nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    });
    imageView.setState(this.state.selectedFilePath);
    loading.setState(this.state.isLoading);
  };

  const init = async () => {
    this.setState({
      ...this.state,
      isLoading: true,
    });

    try {
      const rootNodes = await fetcher();

      this.setState({
        ...this.state,
        isRoot: true,
        nodes: rootNodes,
        depth: ['root'],
      });

      cache.root = rootNodes;
    } catch (err) {
      throw new Error('초기 로딩 실패: ' + err.message);
    } finally {
      this.setState({
        ...this.state,
        isLoading: false,
      });
    }
  };

  init();
}

export { App };
