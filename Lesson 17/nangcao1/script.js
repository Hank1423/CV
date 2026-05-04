let products = [];
function renderProducts() {
    let content = "";
    for (let i = 0; i < products.length; i++) {
        content += `
            <tr>
                <td>${i + 1}</td>
                <td>${products[i]}</td>
                <td>
                    <button onclick="editProduct(${i})">Sửa</button>
                    <button onclick="deleteProduct(${i})">Xóa</button>
                </td>
            </tr>
        `;
    }
    document.getElementById("product-table-body").innerHTML = content;
}

function addProduct(){
    let val = document.getElementById("product-name").value;
    if(val !== ""){
        products.push(val);
        document.getElementById("product-name").value = "";
        renderProducts();
    }
}

function editProduct(index){
    let newName = prompt("Mời bạn nhập tên sản phẩm mới", products[index]);
    if (newName !== null && newName.trim() !==""){
        products[index] = newName.trim();
        renderProducts();
    }
}

function deleteProduct(index) {
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa sản phẩm: " + products[index] + "?");
    
    if (confirmDelete) {
        products.splice(index, 1);
        renderProducts();
    }
}

document.getElementById("product-name").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addProduct();
    }
});