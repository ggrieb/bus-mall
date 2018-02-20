'use strict';

MallPic.allImages = [];
var totalClickCounter = 28;//this is only the case because of first render

function MallPic(name, filepath, clicks, views) {
  this.name = name;
  this.filepath = filepath;
  this.clicks = clicks;
  this.views = views;
  MallPic.allImages.push(this);
}

new MallPic ('R2D2 Bag', 'img/bag.jpg', 0, 0);
new MallPic ('Banana Slicer', 'img/banana.jpg', 0, 0);
new MallPic ('I-Bathroom Stand', 'img/bathroom.jpg', 0, 0);
new MallPic ('Toeless Rainboots', 'img/boots.jpg', 0, 0);
new MallPic ('All-In-One Bkfst Maker', 'img/breakfast.jpg', 0, 0);
new MallPic ('Meatball Bubblegum', 'img/bubblegum.jpg', 0, 0);
new MallPic ('Chair', 'img/chair.jpg', 0, 0);
new MallPic ('Cthulhu', 'img/cthulhu.jpg', 0, 0);
new MallPic ('Dog Duckbill', 'img/dog-duck.jpg', 0, 0);
new MallPic ('Dragon Meat', 'img/dragon.jpg', 0, 0);
new MallPic ('Pen Silverware', 'img/pen.jpg', 0, 0);
new MallPic ('Pet Sweeper', 'img/pet-sweep.jpg', 0, 0);
new MallPic ('Pizza Scissors', 'img/scissors.jpg', 0, 0);
new MallPic ('Shark Sleeping Bag', 'img/shark.jpg', 0, 0);
new MallPic ('Baby Sweeper', 'img/sweep.png', 0, 0);
new MallPic ('Tauntaun Sleeping Bag', 'img/tauntaun.jpg', 0, 0);
new MallPic ('Unicorn Meat', 'img/unicorn.jpg', 0, 0);
new MallPic ('USB Tentacle', 'img/usb.gif', 0, 0);
new MallPic ('Water Can', 'img/water-can.jpg', 0, 0);
new MallPic ('Wine Glass', 'img/wine-glass.jpg', 0, 0);

var itemPic1 = document.getElementById('mall-pic1');
var itemPic2 = document.getElementById('mall-pic2');
var itemPic3 = document.getElementById('mall-pic3');

function randomItem1(event) {
  var randomItem1 = Math.floor(Math.random() * MallPic.allImages.length);
  itemPic1.src = MallPic.allImages[randomItem1].filepath;
  itemPic1.alt = MallPic.allImages[randomItem1].name;
  itemPic1.title = MallPic.allImages[randomItem1].name; 
  totalClickCounter --;
  MallPic.allImages[randomItem1].clicks++;
  MallPic.allImages[randomItem1].views++;
  console.log(MallPic.allImages[randomItem1]);
}

function randomItem2(event) {
  var randomItem2 = Math.floor(Math.random() * MallPic.allImages.length);
  itemPic2.src = MallPic.allImages[randomItem2].filepath;
  itemPic2.alt = MallPic.allImages[randomItem2].name;
  itemPic2.title = MallPic.allImages[randomItem2].name;
  totalClickCounter --;
  MallPic.allImages[randomItem2].clicks++;
  MallPic.allImages[randomItem2].views++;
  console.log(MallPic.allImages[randomItem2]);
}

function randomItem3(event) {
  var randomItem3 = Math.floor(Math.random() * MallPic.allImages.length);
  itemPic3.src = MallPic.allImages[randomItem3].filepath;
  itemPic3.alt = MallPic.allImages[randomItem3].name;
  itemPic3.title = MallPic.allImages[randomItem3].name;
  totalClickCounter --;
  MallPic.allImages[randomItem3].clicks++;
  MallPic.allImages[randomItem3].views++;
  console.log(MallPic.allImages[randomItem3]);
}

randomItem1();
randomItem2();
randomItem3();

itemPic1.addEventListener('click', randomItem1);
itemPic2.addEventListener('click', randomItem2);
itemPic3.addEventListener('click', randomItem3);

if (totalClickCounter < 0) {
    itemPic1.removeEventListener('click', randomItem1);
    itemPic2.removeEventListener('click', randomItem1);
    itemPic3.removeEventListener('click', randomItem3);
    console.log(MallPic.allImages);
}