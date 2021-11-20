var musik = ["Jazz", "Blues"];
console.log(music);
var musikRocknroll = musik.push("Rock-n-roll");
console.log(musik);
 musik.splice(1, 1, "Classic");
console.log(musik);
var deleteMusik = music.shift();
console.log(musik);
var shiftMusik = musik.unshift("Rap, Reggae,")
console.log(musik);