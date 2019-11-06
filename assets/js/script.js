// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi,
// gli altri diventano verdi (tutti i rimanennti)
// Opzionale: Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti

var greenCounter = 0;
var redCounter = 0;

$(document).ready(function () {
  
  // VERSIONE 1 CON REMOVE CLASS
  // $('.box').click(function () { 
  //   $(this).removeClass('hidden');
  // });

  // VERSIONE 2 CON ADD IN CSS

  $('.box').click(function () { 
    if ($(this).hasClass('green')) {
      $(this).css('background-color', 'green');
      greenCounter += 1;
    } else if ($(this).hasClass('red')) {
      $(this).css('background-color', 'red');
      redCounter += 1;
    }
    $('.js-green-counter').text(greenCounter);
    $('.js-red-counter').text(redCounter);
    $(this).off('click').css('cursor', 'default');
  });

});