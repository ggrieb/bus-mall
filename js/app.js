'use strict';

MallPic.allImages = [];

function MallPic(name, filepath, clicks, views) {
  this.name = name;
  this.filepath = filepath;
  this.clicks = clicks;
  this.views = views;
  MallPic.allImages.push(this);
}

new MallPic ('R2D2 Bag', 'img/bag.jpg');
new MallPic ('Banana Slicer', 'img/banana.jpg');
new MallPic ('I-Bathroom Stand', 'img/bathroom.jpg');
new MallPic ('Toeless Rainboots', 'img/boots.jpg');
new MallPic ('All-In-One Bkfst Maker', 'img/breakfast.jpg');
new MallPic ('Meatball Bubblegum', 'img/bubblegum.jpg');
new MallPic ('Chair', 'img/chair.jpg');
new MallPic ('Cthulhu', 'img/cthulhu.jpg');
new MallPic ('Dog Duckbill', 'img/dog-duck.jpg');
new MallPic ('Dragon Meat', 'img/dragon.jpg');
new MallPic ('Pen Silverware', 'img/pen.jpg');
new MallPic ('Pet Sweeper', 'img/pet-sweep.jpg');
new MallPic ('Pizza Scissors', 'img/scissors.jpg');
new MallPic ('Shark Sleeping Bag', 'img/shark.jpg');
new MallPic ('Baby Sweeper', 'img/sweep.png');
new MallPic ('Tauntaun Sleeping Bag', 'img/tauntaun.jpg');
new MallPic ('Unicorn Meat', 'img/unicorn.jpg');
new MallPic ('USB Tentacle', 'img/usb.gif');
new MallPic ('Water Can', 'img/water-can.jpg');
new MallPic ('Wine Glass', 'img/wine-glass.jpg');

var itemPic = document.getElementById('mall-pic');

function randomItem() {
  var randomItem = Math.floor(Math.random() * MallPic.allImages.length);
  console.log (MallPic.allImages[randomItem]);
  itemPic.src = MallPic.allImages[randomItem].filepath;
  itemPic.alt = MallPic.allImages[randomItem].name;
  itemPic.title = MallPic.allImages[randomItem].name;
  
  console.log(MallPic.allImages[randomItem].name);
}

randomItem();

itemPic.addEventListener('click', randomItem);