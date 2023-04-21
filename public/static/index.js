
// setTimeout(() => {
//   let elem = document.getElementsByClassName("__floater __floater__open")[0];
//   console.log("target", elem);

//   let placement = elem.getAttribute("x-placement");

//   if (placement === "bottom") {
//     elem.style.top = "-21px";
//   }

//   window.addEventListener("click", () => {
//     setTimeout(() => {
//       let elem = document.getElementsByClassName(
//         "__floater __floater__open"
//       )[0];
//       let placement = elem.getAttribute("x-placement");
//       console.log(placement, elem, "fixing");
//       if (placement === "bottom") {
//         elem.style.color = "red";
//       }
//     }, 500)
//   });
// }, 2000)