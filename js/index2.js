let search1 = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/;

const searchCheck = (search) => {
  const searchInput = document.getElementById('searchCheck').value;
  console.log(searchInput)

  if(search1.test(search)) {
    console.log('Karakter berhasil ditemukan')
  } else {
    console.log('Karakter tidak berhasil ditemukan')
  }
}

searchCheck("Bagaimana cara memulai usaha bisnis")