'use strict';

MallPic.items = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
MallPic.allImages = [];
MallPic.dupeView = [];

var totalClickCounter = 25;

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
    displayList();
  }
  totalClickCounter -= 1;
  console.log(totalClickCounter);
  for (var i = 0; i < MallPic.items.length; i++) {
    if (event.target.alt === MallPic.allImages[i].name) {
      MallPic.allImages[i].clicks += 1;
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


var ctx = document.getElementById("prodChart");
var prodChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 132, 0.2)',
        'rgba(255, 206, 132, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 132, 1)',
        'rgba(255, 206, 132, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
});
