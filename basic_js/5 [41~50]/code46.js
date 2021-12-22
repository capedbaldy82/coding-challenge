let data = "12345678901011121314151617181920".split("");

data = data.reduce((a, b) => parseInt(a) + parseInt(b));

console.log(data);
