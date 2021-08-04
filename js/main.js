var $homeContainer = document.querySelector('.home-container');
var $header = document.querySelector('.header');
var $homePlay = document.querySelector('.home-play');

var $return = document.querySelector('.return');
var $rule = document.querySelector('.rule');
var $ruleContainer = document.querySelector('.rule-container');

var $betContainer = document.querySelector('.bet-container');
var $start = document.querySelector('.start');

var $gameTableContainer = document.querySelector('.game-table-container');

// var $cardImage = document.querySelector('.card-image');

function handleRulesButton(event) {
  $ruleContainer.className = 'rule-container';
  $homeContainer.className = 'home-container hidden';
  $header.className = 'header uppercase gold italic';
}

function handleReturnButton(event) {
  $ruleContainer.className = 'rule-container hidden';
  $homeContainer.className = 'home-container';
  $header.className = 'header uppercase gold italic hidden';
}

function handleHomePlayButton(event) {
  $betContainer.className = 'bet-container';
  $homeContainer.className = 'home-container hidden';
  $header.className = 'header uppercase gold italic';
}

function handleStartButton(event) {
  $betContainer.className = 'bet-container hidden';
  $gameTableContainer.className = 'game-table-container';
}

$rule.addEventListener('click', handleRulesButton);
$return.addEventListener('click', handleReturnButton);
$homePlay.addEventListener('click', handleHomePlayButton);
$start.addEventListener('click', handleStartButton);

function getCardDeckData(event) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=3');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    data.response = xhr.response;
  });
  xhr.send();
}

getCardDeckData();

function drawRandom(event) {
  var random = new XMLHttpRequest();
  random.open('GET', 'https://deckofcardsapi.com/api/deck/tg0ubkvlqr4q/draw/?count=2');
  random.responseType = 'json';
  random.addEventListener('load', function () {
    data.response = random.response;
  });
  random.send();
}

drawRandom();

// function cardImageHandler(event) {
//   if ($cardImage)
// }
