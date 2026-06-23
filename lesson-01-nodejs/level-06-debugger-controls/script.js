console.log("Attempting to access browser features...");
try {
    localStorage.setItem("message", "Hello World!");
    const pTag = document.querySelector("p");
} catch (error) {
    console.error("To use the debugger you need to set breakpoints and then open the JS debug terminal and move through the lines of code with the controls.". error);
}
