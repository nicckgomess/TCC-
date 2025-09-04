
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

// Abre uma nova aba com as opções de comida do menu selecionado
function openMenuInNewTab(menuId) {
    const menu = document.getElementById('menu-' + menuId);
    if (!menu) return;
    const items = menu.querySelectorAll('.food-item');
    let html = `<h2>Opções de comida</h2><ul style='font-size:18px;'>`;
    items.forEach(item => {
        const p = item.querySelector('p');
        if (p && p.textContent.trim() !== '') {
            html += `<li>${p.textContent}</li>`;
        }
    });
    html += `</ul>`;
    const win = window.open('', '_blank');
    win.document.write(`
        <html>
        <head>
            <title>Opções de comida</title>
            <meta charset="UTF-8">
        </head>
        <body style='font-family:sans-serif;padding:32px;'>
            ${html}
        </body>
        </html>
    `);
    win.document.close();
}
