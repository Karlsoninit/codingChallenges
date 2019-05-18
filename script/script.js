

const inputs  = document.querySelectorAll('.controls input')




function showValue() {
    console.log(this.value)
    const suffix = this.dataset.sizing || '';
    console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}` , this.value + suffix);
    console.log(this.name)
}


inputs.forEach(input => input.addEventListener('change', showValue))
inputs.forEach(input => input.addEventListener('mousemove', showValue))