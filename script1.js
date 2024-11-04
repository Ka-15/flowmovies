var ola = document.getElementsByClassName("oRate");
var kamil = document.getElementsByClassName("kRate");
var rate = document.getElementsByClassName("stars");
const stars = 5;
for (var i = 0; i < ola.length; i++) {
    
    var countAvg = Math.round((parseFloat(ola[i].innerHTML)+parseFloat(kamil[i].innerHTML))/4 * 10) / 10;
    rate[i].innerHTML = countAvg;
    if(countAvg > 0) {
    rate[i].setAttribute("data-rating", countAvg);
    rate[i].setAttribute("data-num-stars", stars);
    } else {
    rate[i].setAttribute("data-rating", "0");
    rate[i].setAttribute("data-num-stars", "0");
    }
}

// aa xD juz wiem
// querySelector Ci zwraca tylko pierwszy element spelniajacy dany selektor,
// to nie jest jak w jquery ze dziala na wszystkie
// const buttons = Array.from(document.querySelectorAll(".card"));
// console.log(buttons); // dziala tow ogole? xd


// buttons.forEach(button => {
//   button.addEventListener("mousemove", (e) => {
//     const { x, y } = button.getBoundingClientRect();
//     button.style.setProperty("--x", e.clientX - x);
//     button.style.setProperty("--y", e.clientY - y);
//     console.log({x, y})
//   });
// });

