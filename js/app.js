$(document).ready(function(){
  console.log('Ready!')
})

$('#submit-btn').click(function () {
// prevent form from resetting immediately
  event.preventDefault();

// get user input
  var city = $('#city-type').val();
  // city = city.toLowerCase();

//test variable
  // alert(city);

// // match user input to image
//   if (city == 'new york' || city == 'new york city' || city == 'nyc') {
// // display matching image
//     $('body').attr('class', 'nyc');
//   }
//   else if (city == 'san francisco' || city == 'sf' || city == 'bay area') {
//     $('body').attr('class', 'sf');
//   }
//   else if (city == 'los angeles' || city == 'la' || city == 'lax') {
//     $('body').attr('class', 'la');
//   }
//   else if (city == 'austin' || city == 'atx') {
//     $('body').attr('class', 'austin');
//   }
//   else if (city == 'sydney' || city == 'syd') {
//     $('body').attr('class', 'sydney');
//   }

  switch (city.toLowerCase()) {
    case 'new york':
    case 'new york city':
    case 'nyc':
      $('body').attr('class', 'nyc')
      break;
    case 'san francisco':
    case 'sf':
    case 'bay area':
      $('body').attr('class', 'sf')
      break;
    case 'los angeles':
    case 'la':
    case 'lax':
      $('body').attr('class', 'la')
      break;
    case 'austin':
    case 'atx':
      $('body').attr('class', 'austin')
      break;
    case 'sydney':
    case 'syd':
      $('body').attr('class', 'sydney')
      break;
    default:
  }

// reset input field
  $('#city-type').val('');
})
