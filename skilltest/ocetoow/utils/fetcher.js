const BASIC_URL = 'https://pr-0ca20157cc1e2bef9.programmers.co.kr:49162/web/data';

const fetcher = async (data) => {
  try {
    const res = await fetch(`${BASIC_URL}/${data ? data : ''}`);

    // if (!res.ok) {
    //   console.log('통신 에러 발생');
    // }

    return await res.json();
  } catch (err) {
    console.log('요청 에러: ' + err.message);
  }
};

export { fetcher };
