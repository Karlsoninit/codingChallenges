const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastCahcked;

const handleChange = function(e) {
  let inBeetwen = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastCahcked) {
        inBeetwen = !inBeetwen;
      }
      if (inBeetwen) {
        checkbox.checked = true;
      }
    });
  }
  lastCahcked = this;
};

checkboxes.forEach(checkbox =>
  checkbox.addEventListener("click", handleChange)
);
