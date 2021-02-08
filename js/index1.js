const handleDigitInput = () => {
  const inputDigitCheck = document.getElementById('inputDigitCheck').value;
  console.log(inputDigitCheck)
  const myRegex = /^[0-9]{10,12}$/g;

  if(myRegex.test(inputDigitCheck) == true) {
    console.log('Password correct')
  } else {
    console.log('You need minimal 10, and maximal 12 digit characters');
  }
}