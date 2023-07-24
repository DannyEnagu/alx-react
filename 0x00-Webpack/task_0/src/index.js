import $ from 'jquery';

$(function () {
  // Paragraph 1
  const paragraph1 = $('<p>').text('Holberton Dashboard');
  $('body').append(paragraph1);

  // Paragraph 2
  const paragraph2 = $('<p>').text('Dashboard data for the students');
  $('body').append(paragraph2);

  // Paragraph 3
  const paragraph3 = $('<p>').text('Copyright - Holberton School');
  $('body').append(paragraph3);
});
