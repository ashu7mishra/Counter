const countWrapper = document.querySelector('.counter-wrapper')
const countRef = countWrapper.querySelector('.count');
const offsetRef = countWrapper.querySelector('.offset');
const offsetInputRef = offsetRef.querySelector('input');
const buttonRef = countWrapper.querySelector('.buttons');
const incrementRef = buttonRef.querySelector('increment');
const decrementRef = buttonRef.querySelector('decrement');
const resetRef = buttonRef.querySelector('reset');

function incrementCounterValue(val){
    countRefValue = countRef.innerHTML;
    countRefValue += val
    countRef.innerHTML = countRefValue;
}
incrementRef.addEventListener('click', () => {
    val = offsetInputRef.value;
    incrementCounterValue(val);
})