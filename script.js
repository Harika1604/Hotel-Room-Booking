function bookRoom() {
    let name = document.getElementById("userName").value.trim();
    let roomType = document.getElementById("roomType").value;
    let messageBox = document.getElementById("message");

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    messageBox.innerText = `Hello ${name}, your ${roomType} room is ready for booking!`;
    messageBox.style.display = "block";

    generateReceipt(name, roomType);
}

function generateReceipt(name, roomType) {
    const receiptContent = `Hotel Room Booking Receipt\n\nName: ${name}\nRoom Type: ${roomType}\nThank you for booking with us!`;
    const blob = new Blob([receiptContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Booking_Receipt.txt";
    link.click();
}
