const barChart = document.querySelector('#bar-chart');
const indexLine = document.querySelector('#index-line');

const widthBar = parseInt(getComputedStyle(barChart, '').width);
const arrChart = [
  5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13,
];
const arrLenght = arrChart.length;
arrChart.map((v, i) => {
  const itm = document.createElement('div');
  itm.innerHTML = v;

  if (v <= 5) {
    itm.style = `background-color: green;`;
  } else if (v >= 6 && v <= 10) {
    itm.style = `background-color: yellow;`;
  } else {
    itm.style = `background-color: red;`;
  }
  itm.style.height = `${v * 20}px`;
  itm.style.width = `${widthBar / arrLenght - 10}px`;
  barChart.insertBefore(itm, null);
  const ind = document.createElement('div');
  ind.innerHTML = i;
  ind.style.width = `${widthBar / arrLenght - 10}px`;
  indexLine.insertBefore(ind, null);
});
