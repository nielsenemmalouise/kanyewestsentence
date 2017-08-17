
  var $ = function(id) {
  return document.getElementById(id);
};
var inc = 0;
var out = 0;
var str = 'Monday, July 15, was just another day at Channel 40. Christine Chubbuck arrived about a half hour before the 9:30 morning talk show, “Suncoast Digest.” She had had a quick cup of coffee with her mother at their house on nearby Siesta Key, asked her mother to leave her chocolate poodle out because she’d be back at 10:45, jumped in her yellow Volkswagen convertible and dashed off to the studio. She looked particularly good that morning. She had a tan, her waist-length black hair was clean and shiny and her black and white print dress complemented her long slim figure. She was in extraordinarily good spirits. Her guest arrived and she showed him and his wife into the studio, then excused herself to write her script for the newscast. “In keeping with Channel 40’s policy of bringing you the latest in blood and guts and in living colour,” she said, “you are going to see another first – an attempted suicide.” And with that she raised the gun to her head and pulled the trigger.';
var chars = 'SUICIDE';
var t;

var anim = function() {
  inc++;
  if (inc % 7 === 0 && out < str.length) {
    $('anim').appendChild(document.createTextNode(str[out]));
    out++;
  } else if (out >= str.length) {
    $('shuffle').innerHTML = '';
    removeInterval(t);
  }
  $('shuffle').innerHTML =
    chars[Math.floor(Math.random() * chars.length)];
};
t = setInterval(anim, 80);
$('anim').innerHTML = '';

