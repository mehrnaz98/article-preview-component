const shareButton = document.querySelector("button");
const dialog = document.getElementById("dialog");
const shareOptions = document.getElementById("shareOptions");

shareButton.addEventListener("click", function () {
  // Toggle visibility of the dialog
  if (window.innerWidth >= 640) {
    if (dialog.style.display === "none" || dialog.style.display === "") {
      dialog.style.display = "flex";
    } else {
      dialog.style.display = "none";
    }
  } else {
    if (shareOptions.style.display === "none" || dialog.style.display === "") {
      shareOptions.style.display = "flex";
    } else {
      shareOptions.style.display = "none";
    }
  }
});

function updateShareOptionsVisibility() {
  if (window.innerWidth >= 640) {
    shareOptions.style.display = "none";
  } else {
    dialog.style.display = "none";
  }
}

// Run on load
updateShareOptionsVisibility();

// Run on window resize
window.addEventListener("resize", updateShareOptionsVisibility);
