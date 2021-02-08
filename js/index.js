const handleInput = () => {
  const inputCheck = document.getElementById('inputCheck').value;
  console.log(inputCheck)
  const myRegex = new RegExp("[A-Z]")

  if(myRegex.test(inputCheck) === true) {
    console.log('Huruf awal adalah huruf besar')
  } else {
    console.log('Huruf awal adalah huruf kecil')
  }
}