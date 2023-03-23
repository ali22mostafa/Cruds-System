var ProductName=document.getElementById("ProductName");
var ProductPrice=document.getElementById("ProductPrice");
var ProductCategory=document.getElementById("ProductCategory");
var ProductDescription=document.getElementById("ProductDescription");
var productList=[]
currentInd=0

// show data to user from localStorage
if(localStorage.getItem("ourProduct")!=null){
   productList= JSON.parse(localStorage.getItem("ourProduct"))
   displayProduct()
}
// fun that add product
function addProduct(){
    if (validateName()==true &&validatePrice()==true &&validateCategory()==true &&validateDescription()==true) {
        var product={
            name:ProductName.value,
            price:ProductPrice.value,
            category:ProductCategory.value,
            description:ProductDescription.value
        }
        productList.push(product);
        localStorage.setItem("ourProduct",JSON.stringify( productList))
        displayProduct()
    }

}
// fun that clear data after adding from input
function clearForm() {

    ProductName.value="";
    ProductPrice.value="";
    ProductCategory.value="";
    ProductDescription.value="";
    
}
// show data

function displayProduct() {
    cartona=``
    for (var i=0; i < productList.length; i++) {
     cartona+=`<tr>
     <td>${i}</td>
     <td>${productList[i].name}</td>
     <td>${productList[i].price}</td>
     <td>${productList[i].category}</td>
     <td>${productList[i].description}</td>
     <td><button class="btn btn-warning" onclick="updateProduct(${i})">Update</button></td>
     <td><button onclick="deleteProduct(${i})"  class="btn btn-danger">Delete</button></td>
     
   </tr>`
    }
    document.getElementById("data").innerHTML=cartona;
    
}
// delet element 
function deleteProduct(index) {

    productList.splice(index,1)
    localStorage.setItem("ourProduct",JSON.stringify( productList))
    displayProduct() 

}

// searh 

function searchProduct(term){
    cartona=``
    
    for (var i = 0; i < productList.length; i++) {
        if (productList[i].name.toLowerCase().includes(term.toLowerCase())==true) {
            cartona+=`<tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].description}</td>
        <td><button class="btn btn-warning" onclick="updateProduct(${i})">Update</button></td>
        <td><button onclick="deleteProduct(${i})"  class="btn btn-danger">Delete</button></td>
        
      </tr>`
        }
        
        
    }
    document.getElementById("data").innerHTML=cartona;
    
}
// updata data
function updateProduct(ind) {
    currentInd=ind;
    ProductName.value=productList[ind].name
    ProductPrice.value=productList[ind].price
    ProductCategory.value=productList[ind].category
    ProductDescription.value=productList[ind].description
    document.getElementById("Add").style.display="none"
    document.getElementById("Edit").style.display="inline-block"
}
// updata data
function addEdit(currentInd) {
    if (validateName()==true &&validatePrice()==true &&validateCategory()==true &&validateDescription()==true){
        productList[currentInd].name=ProductName.value
        productList[currentInd].price=ProductPrice.value
        productList[currentInd].category=ProductCategory.value
        productList[currentInd].description=ProductDescription.value
        displayProduct()
        clearForm()
        localStorage.setItem("ourProduct",JSON.stringify( productList))
        document.getElementById("Add").style.display="inline-block"
        document.getElementById("Edit").style.display="none"
    }
   
}







// valid name
ProductName.addEventListener("blur",validateName)

function validateName() {
    
    let reg=/^[A-Z][a-z]{2,7}( )?([A-Za-z]{3,7})?$/
    if (reg.test(ProductName.value)==true) {
        document.getElementById("alertName").classList.replace("d-block","d-none")
       return true
    }
    else{
        document.getElementById("alertName").classList.replace("d-none","d-block")
        return false
    }
    
}
// valid price
ProductPrice.addEventListener("blur",validatePrice)

function validatePrice() {
    
    let reg=/^[1-9][0-9]{1,9}$/
    if (reg.test(ProductPrice.value)==true) {
        document.getElementById("alertPrice").classList.replace("d-block","d-none")
       return true
    }
    else{
        document.getElementById("alertPrice").classList.replace("d-none","d-block")
        return false
    }
    
}

// valid Category
ProductCategory.addEventListener("blur",validateCategory)

function validateCategory() {
    
    let reg=/^[A-Z][a-z]{1,7}( )?([A-Za-z]{3,7})?$/
    if (reg.test(ProductCategory.value)==true) {
        document.getElementById("alertCategory").classList.replace("d-block","d-none")
       return true
    }
    else{
        document.getElementById("alertCategory").classList.replace("d-none","d-block")
        return false
    }
    
}
// valid description
ProductDescription.addEventListener("blur",validateDescription)

function validateDescription() {
    
    let reg=/^([A-Z]|[a-z]| |-|_|@|#){3,100}$/
    if (reg.test(ProductDescription.value)==true) {
        console.log(ProductDescription.value);
        document.getElementById("alertDesc").classList.replace("d-block","d-none")
       return true
    }
    else{
        document.getElementById("alertDesc").classList.replace("d-none","d-block")
        console.log(ProductDescription.value);
        return false
    }
    
}

