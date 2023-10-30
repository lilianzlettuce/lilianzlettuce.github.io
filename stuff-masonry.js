var elem = document.querySelector('.grid');
var grid = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer', 
  percentPosition: true
});

imagesLoaded(elem, () => {
  grid = new Masonry( elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer', 
    percentPosition: true
  });
})

// layout Masonry after each image loads
/*imagesLoaded().progress(() => {
    grid.masonry('layout');
});*/