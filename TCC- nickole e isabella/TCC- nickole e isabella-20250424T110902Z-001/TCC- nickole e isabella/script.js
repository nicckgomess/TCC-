
let total = 0;

function logout() {
    alert("Logout realizado com sucesso!");
    window.location.href = "cadastro.html";
}

function showMenu(categoria) {
    document.querySelectorAll('.food-options').forEach(menu => menu.style.display = 'none');
    document.getElementById(`menu-${categoria}`).style.display = 'block';
}

function addToCart(item, price) {
    const lista = document.getElementById("cart-items");
    const novoItem = document.createElement("li");
    novoItem.innerHTML = `${item} - R$ ${price} <button class='remove-btn' onclick='removeItem(this, ${price})'>Remover</button>`;
    lista.appendChild(novoItem);
    total += price;
    updateTotal();
}

function removeItem(button, price) {
    button.parentElement.remove();
    total -= price;
    updateTotal();
}

function updateTotal() {
    document.getElementById("total").textContent = `Total: R$ ${total}`;
}
