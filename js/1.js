

var allprodect = document.querySelectorAll(".side i ")
var laple = document.querySelector("#namecontant")
var sumprice = document.querySelector("#sumprice")
var total = 0
var ruslt = document.querySelector("#ruselt")


allprodect.forEach(function (item) {
  item.onclick = function () {
    // امسك العنصر واظهر المحتوى النصي الخاص بالعنصر الاخر
    // += زياده اكثر من عنصر
    //+ عملية الدمج
    laple.innerHTML += item.getAttribute("value") + " || "

    total += +(item.getAttribute("price"))
    // = () تحويل من نص الى رقم
    if (laple.innerHTML != "") {
      sumprice.style.visibility = "visible"
      sumprice.style.display = "block"
      ruslt.style.visibility = "visible"
      ruslt.style.display = "block"
      laple.style.visibility = "visible"
      laple.style.display = "block"
    }

  }
})
sumprice.onclick =function(){
  ruslt.innerHTML = total
}



  




















