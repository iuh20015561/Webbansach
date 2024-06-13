const btn = document.querySelectorAll(".muaNgay")
// console.log(btn)
const productList = []
 btn.forEach(function(button,index){
  //  console.log(button,index) 
  button.addEventListener("click",function(event){{
    var btnItem = event.target
    var product = btnItem.parentElement.parentElement
    var productImg = product.querySelector("img").src
    var productName = product.querySelector("h5").innerText
    var productPrice = product.querySelector("span").innerText
    var productSoLuong = product.querySelector("input").value
    // console.log(productImg,productPrice,productName,productSoLuong)
    let productItem = {
      name: productName,
      price: productPrice,
      pathImg: productImg,
      quantity: productSoLuong
    }
    
    
    productList.push(productItem)
    localStorage.setItem('item', JSON.stringify(productList))
    console.log(productList)
  }
})
})

