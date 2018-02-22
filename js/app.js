'use strict';

MallPic.items = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
MallPic.allImages = [];
MallPic.dupeView = [];

var totalClickCounter = 24;

MallPic.container = document.getElementById('pics-container');
MallPic.productPlace = [document.getElementById('mall-pic1'), document.getElementById('mall-pic2'), document.getElementById('mall-pic3')];
MallPic.list = document.getElementById('total-list');

function MallPic(name) {
  this.name = name;
  this.filepath = 'img/' + name + '.jpg';
  this.clicks = 0;
  this.views = 0;
  MallPic.allImages.push(this);
}

for (var i = 0; i < MallPic.items.length; i++) {
  new MallPic(MallPic.items[i]);
}

function randomizer() {
  return Math.floor(Math.random() * MallPic.items.length);
}

function createRandomDisplay() {
  while (MallPic.dupeView.length < 6) {
    var randomItem = randomizer();
    while (!MallPic.dupeView.includes(randomItem)) {
      MallPic.dupeView.push(randomItem);
    }
  }
  for (var i = 0; i < 3; i++) {
    var nowDisplayed = MallPic.dupeView.shift();
    MallPic.productPlace[i].src = MallPic.allImages[nowDisplayed].filepath;
    MallPic.productPlace[i].alt = MallPic.allImages[nowDisplayed].name;
    MallPic.productPlace[i].title = MallPic.allImages[nowDisplayed].name;
    MallPic.allImages[nowDisplayed].views += 1;
  }
}

function clickHandler(event) {
  if (event.target === MallPic.container) {
    return alert('Your click just missed the product, please try again.');
  }
  if (totalClickCounter < 1) {
    MallPic.container.removeEventListener('click', clickHandler);
    MallPic.container.style.display = 'none';
    //displayList();
    drawChart();
    localStorage.jsonImages = JSON.stringify(MallPic.allImages);
  }
  totalClickCounter -= 1;
  console.log(totalClickCounter);
  for (var i = 0; i < MallPic.items.length; i++) {
    if (event.target.alt === MallPic.allImages[i].name) {
      MallPic.allImages[i].clicks += 1;
      updateChartArray();
    }
  }
  createRandomDisplay();
}

function displayList() {
  for (var i = 0; i < MallPic.allImages.length; i++) {
    var liEl = document.createElement('li');
    var conversion = (MallPic.allImages[i].clicks / MallPic.allImages[i].views * 100).toFixed(1);
    liEl.textContent = MallPic.allImages[i].name + ' has ' + MallPic.allImages[i].clicks + ' votes, out of ' + MallPic.allImages[i].views + ' views for a rate of ' + conversion + '%';
    MallPic.list.appendChild(liEl);
  }
}

createRandomDisplay();
MallPic.container.addEventListener('click', clickHandler);

//+++++++chart*******

var prodChart;
//var chartDrawn = false;
var chartClicks = [];
var chartViews = [];

if (localStorage.jsonImages) {
  console.log('found localStorage');
  MallPic.allImages = JSON.parse(localStorage.jsonImages);
} else {
  for (var i = 0; i < MallPic.items.length; i++) {
  new MallPic(MallPic.items[i]);
  }
}

function updateChartArray() {
  for (var i = 0; i < MallPic.items.length; i++) {
    chartClicks[i] = MallPic.allImages[i].clicks;
    chartViews[i] = MallPic.allImages[i].views;
  }
}

var data = {
  labels: MallPic.items,
  datasets: [
    {
      label: 'Total Selections',
      data: chartClicks,
      backgroundColor: [
        'lime',
        'lime',
        'lime',
        'lime',
        'lime',
        'lime',
        'lime',
        'lime',
        'lime',
        'lime',
        'lime',
        'lime',
        'lime',
        'lime',
        'lime',
        'lime',
        'lime',
        'lime',
        'lime',
        'lime',
      ],
      hoverBackgroundColor: [
        'gold',
        'gold',
        'gold',
        'gold',
        'gold',
        'gold',
        'gold',
        'gold',
        'gold',
        'gold',
        'gold',
        'gold',
        'gold',
        'gold',
        'gold',
        'gold',
        'gold',
        'gold',
        'gold',
        'gold',
      ]
    }
  ]
}

Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultFontSize = 14;
function drawChart() {
var ctx = document.getElementById('prodChart');
prodChart = new Chart(ctx, {
  type: 'bar',
  data: data,
    options: {
      legend: {
        labels: {
          fontSize: 40,
          fontColor: 'gold',
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            max: 50,
            min: 0,
            stepSize: 5.0
          }
        }]
      }
    }
});
}

/*["R2D2 Bag", "Banana Slicer", "I-Bathroom Stand", "Toeless Rainboots", "All-In-One Bkfst Maker", "Meatball Bubblegum", "Chair", "Cthulhu", "Dog Duckbill", "Dragon Meat", "Pen Silverware", "Pet Sweeper", "Pizza Scissors", "Shark Sleeping Bag", "Baby Sweeper", "new MallPic", "Tauntaun Sleeping Bag", "Unicorn Meat", "USB Tentacle", "Water Can", "Wine Glass"]*/

/*Local Data Storage*/

