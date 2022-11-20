const BASIC_URL = 'https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev';

const fetcher = async (nodeId) => {
  try {
    const res = await fetch(`${BASIC_URL}/${nodeId ? nodeId : ''}`);

    if (!res.ok) {
      throw new Error('서버와의 통신이 원활하지 않습니다.');
    }

    return await res.json();
  } catch (err) {
    throw new Error(`에러가 발생하였습니다. ${err.message}`);
  }
};

export { fetcher };
