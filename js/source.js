function validateform(event) {
  var fiyatCheck = document.myForm.fiyat.value;
  var karCheck = document.myForm.kar.value;

  if (fiyatCheck == null || fiyatCheck == "") {
    alert("Bilgilerinizi kontrol ediniz.");
    return false;
  }
  if (karCheck == null || karCheck == "") {
    alert("Bilgilerinizi kontrol ediniz.");
    return false;
  } else {
    event.preventDefault();
    var fiyat = document.getElementById("fiyat").value;
    var kar = document.getElementById("kar").value;
    var satisFiyati = (parseInt(fiyat) * (100 + parseInt(kar))) / 100;
    document.getElementById("satisFiyati").value = satisFiyati;
  }
}
