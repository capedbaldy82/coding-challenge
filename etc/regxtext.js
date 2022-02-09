const accountNameRegx = /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣_.]*$/;
const numberRegx = /^[0-9]+$/;
const userNameRegx = /^.{2,10}$/;

console.log("userNameCheck");
console.log(userNameRegx.test("as $ d"));
