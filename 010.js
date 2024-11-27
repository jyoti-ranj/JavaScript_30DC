const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const categoryBtns = document.querySelectorAll(".category-btn");



function filterProduct() {
    const searchValue = searchInput.value.toLowerCase();
    const products = document.querySelectorAll(".product-item");
    const activeCategory = document.querySelector(".category-btn.active").dataset.category;

    products.forEach(item => {       
        const productName = item.querySelector("h3").textContent.toLowerCase();
        const category = item.dataset.category;

        if ((productName.includes(searchValue) || searchValue === "") && 
            (category === activeCategory || activeCategory === "all")) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function setCategory(e){
   categoryBtns.forEach(btn=>btn.classList.remove("active"));

   e.target.classList.add("active");
   filterProduct();
}

searchBtn.addEventListener("click", filterProduct);
searchInput.addEventListener("keyup",filterProduct);
categoryBtns.forEach(btn=>{
    btn.addEventListener("click",setCategory);
})
filterProduct();