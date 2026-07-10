console.log("Attempting to access browser features...");
try {
    const message = localStorage.setItem("message", "Hello World!")
    const pTag = document.querySelector("p");
} catch (error) {
    console.log("localStorage is undefined.")
}
