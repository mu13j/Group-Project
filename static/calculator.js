// Caching the DOM elements we'll need for repeated use later
var $countrySearch = document.querySelector("#country-search");
var $shapeSearch = document.querySelector("#shape-search");
var $opp_pass_yds = document.querySelector("#opp_pass");
var $opp_rush_yds = document.querySelector("#opp_rush");
var $pass_yds = document.querySelector("#pass");
var $rush_yds = document.querySelector("#rush");
var $pts = document.querySelector("#pts");
var $pts_against = document.querySelector("#pts_against");
var $takeaways = document.querySelector("#take");
var $turnovers = document.querySelector("#give");
var $updateFilterBtn = document.querySelector("#filter-submit");
var $answer = document.querySelector('#calculation')
// Adding event listeners to the pagination buttons and the update filter button
$updateFilterBtn.addEventListener("click", filterData);


function filterData() {
  // filterData calls data.updateFilter, which updates the data.filtered
  $answer.textContent=Math.round((7.58420-0.00032050*$opp_pass_yds.value.trim()-0.00002440*$opp_rush_yds.value.trim()+0.00015229*$pass_yds.value.trim()+0.02434*$pts.value.trim()-0.02907*$pts_against.value.trim()+0.00021380*$rush_yds.value.trim()+0.01656*$takeaways.value.trim()-0.01869*$turnovers.value.trim())*10)/10}
