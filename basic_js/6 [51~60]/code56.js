nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

let gap = Math.abs(nationWidth.korea - nationWidth.Rusia);
let similarKorea = {
  nation: "",
  gap: 0,
};

for (nation in nationWidth) {
  if (nation !== "korea") {
    if (gap > Math.abs(nationWidth.korea - nationWidth[nation])) {
      gap = Math.abs(nationWidth.korea - nationWidth[nation]);
      similarKorea.nation = nation;
      similarKorea.gap = Math.abs(nationWidth.korea - nationWidth[nation]);
    }
  }
}

console.log(similarKorea);
