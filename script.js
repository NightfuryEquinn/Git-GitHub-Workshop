$('.accordian').on('click', '.accordian-control', function(e) {
  e.preventDefault();

  $(this)
    .next('.accordian-content')
    .not(':animated')
    .slideToggle(400);
})