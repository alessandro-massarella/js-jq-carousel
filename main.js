// Creare uno slider di immagini
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// Per scorrere le immagini permettere anche l'uso delle frecce sinistra e destra della tastiera ( e' un evento diverso dal click, quale? )
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l'immagine attuale da visualizzare nello slider
// Bonus:
// Clicchiamo sui pallini e mostriamo l'immagine corrispondente
// Generiamo i pallini con JS

// inserisco tutto il codice per essere sicuro che venga caricato solamente quando il DOM è pronto
$(document).ready(function(){

// per scorrere il carosello in avanti
  $('.slider-wrapper .next').click(function() {
    var activeImg = $('.slider-wrapper .images img.active');
      activeImg.removeClass('active')
      activeImg.next().addClass('active')
    })

// per scorrere il carosello all'indietro
  $('.slider-wrapper .prev').click(function() {
    var activeImg = $('.slider-wrapper .images img.active');
      activeImg.removeClass('active')
      activeImg.prev().addClass('active')
    })



})
