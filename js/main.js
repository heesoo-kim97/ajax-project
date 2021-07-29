var $rule = document.querySelector('.rule');
var $ruleContainer = document.querySelector('.rule-container');
var $homeContainer = document.querySelector('.home-container');
var $header = document.querySelector('.header');
var $return = document.querySelector('.return');

var $betContainer = document.querySelector('.bet-container');
var $homePlay = document.querySelector('.home-play');

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

$rule.addEventListener('click', handleRulesButton);
$return.addEventListener('click', handleReturnButton);
$homePlay.addEventListener('click', handleHomePlayButton);
