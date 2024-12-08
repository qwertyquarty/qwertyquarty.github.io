let anim1 = [
  "⠁",
  "⠂",
  "⠄",
  "⡀",
  "⡈",
  "⡐",
  "⡠",
  "⣀",
  "⣁",
  "⣂",
  "⣄",
  "⣌",
  "⣔",
  "⣤",
  "⣥",
  "⣦",
  "⣮",
  "⣶",
  "⣷",
  "⣿",
];
let anim2 = [
  "⠈",
  "⠐",
  "⠠",
  "⢀",
  "⢁",
  "⢂",
  "⢄",
  "⣀",
  "⣈",
  "⣐",
  "⣠",
  "⣡",
  "⣢",
  "⣤",
  "⣬",
  "⣴",
  "⣵",
  "⣶",
  "⣾",
  "⣿",
];

let anim1Reverse = [...anim1].reverse();
let anim2Reverse = [...anim2].reverse();

anim1 = anim1.concat(anim1Reverse);
anim2 = anim2.concat(anim2Reverse);

let i = 0;

setInterval(() => {
  document.title = `${anim1[i]} qwertyquarty ${anim2[i]}`;
  i %= anim1.length
  i++;
}, 500);
