const characterRange = document.getElementById('characterAmountRange')
const numberInput = document.getElementById('numberInput')
const upperCaseInput = document.getElementById('includeUpperCase')
const numbersElement = document.getElementById('includeNumbers')
const symbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passWordDisplay = document.getElementById('password-display')

const LOWER_CASE_CHAR_CODES = arrayLowToHigh(97, 122)
const UPPER_CASE_CHAR_CODES = arrayLowToHigh(65, 90)
const NUMBER_CHAR_CODES = arrayLowToHigh(48, 57)
const SPECIAL_CHAR_CODES = arrayLowToHigh(33, 47).concat(
    arrayLowToHigh(58, 64)
).concat(
    arrayLowToHigh(91,96)
).concat(
    arrayLowToHigh(123, 126)
)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = numberInput.value
    const includeUpperCase = upperCaseInput.checked
    const includeNumbers = numbersElement.checked
    const includeSymbols = symbolsElement.checked
    const password = generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols)
    passWordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols){
    let charCodes = LOWER_CASE_CHAR_CODES
    if(includeUpperCase) charCodes = charCodes.concat(UPPER_CASE_CHAR_CODES)
    if(includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if(includeSymbols) charCodes = charCodes.concat(SPECIAL_CHAR_CODES)
    const passwordCharacters = []
    for(let i = 0; i < characterAmount; i++){
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}






function arrayLowToHigh(low, high){
    const array = []
    for(let i = low; i <= high; i++){
        array.push(i)
    }
    return array
}

function copyButton(){
    var copyText = passWordDisplay.innerText
      if(passWordDisplay.innerText === 'Password'){
        return 
      }    navigator.clipboard.writeText(copyText).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
    alert("Text was copied")
}


characterRange.addEventListener('input', syncInputs)
numberInput.addEventListener('input', syncInputs)


function syncInputs(e){
    const value = e.target.value
    characterRange.value = value
    numberInput.value = value

}
