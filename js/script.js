var colors = ["#0bf", "#fc0"];
var points = ["96 180 37 180 0 180 0 69 0 0 96 0 191 0 191 69 191 180 154 180",
              "95 147 36 180 50 114 0 69 67 61 95 0 122 61 190 69 139 114 153 180"];

animate({
  el: "polygon",
  easing: "easeOutCubic",
  translateX: 200,
  fill: colors,
  points: points
});