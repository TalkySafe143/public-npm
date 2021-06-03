const messages = [
    "Sebastian", 
    "Felipe",
    "Galindo",
    "Valentina",
    "Amaya"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };