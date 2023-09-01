let base, height, ans, area;

document.getElementById("btn").onclick = function () {
  base = document.getElementById("base").value;
  base = Number(base); //typcasting string to number

  height = document.getElementById("height").value;
  height = Number(height);

  ans = Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2));
  area = (base * height) / 2;
  document.getElementById("hypo").innerHTML =
    "Hypotenuse of a right angled \n triangle having base " +
    base +
    " and height " +
    height +
    " is  " +
    ans;
  document.getElementById("area").innerHTML =
    "\n Area of right angled triangle is " + area;
  document.getElementById("btn").innerHTML = "Refresh";
  document.getElementById("btn").onclick = function () {
    location.reload();
  };
};
