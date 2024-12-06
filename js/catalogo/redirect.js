function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function redirectToChat(event) {
    const card = event.currentTarget;

    const title = normalizeText(card.querySelector("h2").textContent.trim());

    const productToChat = {
        "computador lenovo legion": "chat-juan.html",
        "iphone 15 pro max usado": "chat-steeven.html",
        "airpods 3ro gen casi nuevo": "chat-carlos.html",
        "apple watch series 7 en buen estado": "chat-kevin.html",
        "mouse deathadder v2x hyperspeed": "chat-yenny.html",
        "teclado logitech g413 casi nuevo": "chat-martha.html",
        "monitor asus 24 pulgadas casi nuevo": "chat-maria.html",
        "mouse logitech g305 casi nuevo": "chat-isabel.html",
        "mouse logitech g102 casi nuevo": "chat-daniel.html",
        "mouse logitech g502 hero usado": "chat-ana.html",
    };

    const chatFile = productToChat[title];

    if (chatFile) {
        window.location.href = `../../html/chat/${chatFile}`;
    } else {
        console.error("No se encontró el archivo de chat para este producto:", title);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.addEventListener("click", redirectToChat);
    });
});
