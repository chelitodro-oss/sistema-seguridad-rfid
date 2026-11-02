
document.addEventListener("DOMContentLoaded", () => {
    // Menú para dispositivos móviles
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }

    // Simulador RFID
    const result = document.getElementById("simulatorResult");
    const authorized = document.getElementById("authorizedBtn");
    const denied = document.getElementById("deniedBtn");

    if (authorized && denied && result) {
        authorized.addEventListener("click", () => {
            result.innerHTML = `
                <span class="success">● ACCESO AUTORIZADO (SIMULACIÓN)</span>
                <p>Tarjeta reconocida. El mecanismo de apertura se representaría activado.</p>
            `;
        });

        denied.addEventListener("click", () => {
            result.innerHTML = `
                <span class="error">● ACCESO DENEGADO (SIMULACIÓN)</span>
                <p>Tarjeta no registrada. El acceso permanecería cerrado.</p>
            `;
        });
    }
});
