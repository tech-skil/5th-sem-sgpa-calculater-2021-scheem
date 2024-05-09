function Sgpa() {
  var a = parseInt(document.getElementById("marks1").value);
  var b = parseInt(document.getElementById("marks2").value);
  var c = parseInt(document.getElementById("marks3").value);
  var d = parseInt(document.getElementById("marks4").value);
  var e = parseInt(document.getElementById("marks5").value);
  var f = parseInt(document.getElementById("marks6").value);
  var g = parseInt(document.getElementById("marks7").value);
  var h = parseInt(document.getElementById("marks8").value);
  // var i=parseInt(document.getElementById("marks9").value);
  // var j=parseInt(document.getElementById("marks10").value);
  var digit1 = 3 * marks(a);
  var digit2 = 1 * marks(b);
  var digit3 = 4 * marks(c);
  var digit4 = 3 * marks(d);
  var digit5 = 3 * marks(e);
  var digit6 = 1 * marks(f);
  var digit7 = 2 * marks(g);
  var digit8 = 1 * marks(h);
  // var digit9 = 1*marks(i);
  // var digit10 = 2*marks(j);

  // var value=((digit1+digit2+digit3+digit4+digit5+digit6+digit7+digit8+digit9+digit10)/22);
  var value = (digit1 + digit2 + digit3 + digit4 + digit5 + digit6 + digit7 + digit8) / 18;

  document.getElementById("result").value = parseFloat(value).toFixed(4) + "    SGPA";
}

function marks(y) {
  if (y >= 90) return 10;
  else if (y <= 89 && y >= 80) return 9;
  else if (y <= 79 && y >= 70) return 8;
  else if (y <= 69 && y >= 60) return 7;
  else if (y <= 59 && y >= 50) return 6;
  else if (y <= 49 && y >= 45) return 5;
  else if (y <= 44 && y >= 40) return 4;
  else return 0;
}
