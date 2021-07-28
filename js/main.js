var $rule = document.querySelector('.rule');
var $ruleContainer = document.querySelector('.rule-container');
var $homeContainer = document.querySelector('.home-container');
var $header = document.querySelector('.header');
var $return = document.querySelector('.return');

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

$rule.addEventListener('click', handleRulesButton);
$return.addEventListener('click', handleReturnButton);
