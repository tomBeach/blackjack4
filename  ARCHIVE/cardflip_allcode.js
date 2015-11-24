
// ======= html =======

<div class="card effect__EFFECT">
  <div class="card__front">
    <span class="card__text">front</span>
  </div>
  <div class="card__back">
    <span class="card__text">back</span>
  </div>
</div><!-- /card -->

/ ======= css =======
.card {
  position: relative;
  float: left;
  padding-bottom: 25%;
  width: 25%;
  text-align: center;
}

.card__front,
.card__back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card__front,
.card__back {
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transition: -webkit-transform 0.3s;
          transition: transform 0.3s;
}

.card__front {
  background-color: #ff5078;
}

.card__back {
  background-color: #1e1e1e;
  -webkit-transform: rotateY(-180deg);
          transform: rotateY(-180deg);
}

// ======= hover =======
.card.effect__hover:hover .card__front {
  -webkit-transform: rotateY(-180deg);
          transform: rotateY(-180deg);
}

.card.effect__hover:hover .card__back {
  -webkit-transform: rotateY(0);
          transform: rotateY(0);
}



// ======= javascript =======
(function() {
  var cards = document.querySelectorAll(".card.effect__click");
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
  }

  function clickListener(card) {
    card.addEventListener( "click", function() {
      var c = this.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }
})();

// ======= randomize/javascript =======
// range between 1 and 3 seconds
// randomly generate a time delay for cards to flip
// timeout will get cleared each time and reset
// purely visual effect.


(function() {

  // cache vars
  var cards = document.querySelectorAll(".card.effect__random");
  var timeMin = 1;
  var timeMax = 3;
  var timeouts = [];

  // loop through cards
  for ( var i = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    var cardID = card.getAttribute("data-id");
    var id = "timeoutID" + cardID;
    var time = randomNum( timeMin, timeMax ) * 1000;
    cardsTimeout( id, time, card );
  }

  // timeout listener
  function cardsTimeout( id, time, card ) {
    if (id in timeouts) {
      clearTimeout(timeouts[id]);
    }
    timeouts[id] = setTimeout( function() {
      var c = card.classList;
      var newTime = randomNum( timeMin, timeMax ) * 1000;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
      cardsTimeout( id, newTime, card );
    }, time );
  }

  // random number generator given min and max
  function randomNum( min, max ) {
    return Math.random() * (max - min) + min;
  }

})();
