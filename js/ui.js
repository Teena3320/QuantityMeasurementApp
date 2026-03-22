export function populateDropdown(selectEl, units) {
    if (!selectEl) return;

    selectEl.innerHTML = "";

    const def = document.createElement("option");
    def.textContent = "-- Select Unit --";
    def.disabled = true;
    def.selected = true;
    selectEl.appendChild(def);

    units.forEach(u => {
        const opt = document.createElement("option");
        opt.value = u.symbol;
        opt.textContent = `${u.label} (${u.symbol})`;
        selectEl.appendChild(opt);
    });
}
export function setActive(parentEl, clickedEl, childSelector) {
    if (!parentEl) return;

    parentEl.querySelectorAll(childSelector).forEach(el => {
        el.classList.remove("active");
    });

    clickedEl.classList.add("active");
}
export function showResult(value, unitSymbol) {
    const valEl = document.querySelector("#result-value");
    const unitEl = document.querySelector("#result-unit");

    if (value === null) {
        valEl.textContent = "—";
        unitEl.textContent = "";
        return;
    }

    valEl.textContent = value;
    unitEl.textContent = unitSymbol || "";

    valEl.classList.add("highlight");
    setTimeout(() => {
        valEl.classList.remove("highlight");
    }, 1500);
}
export function toggleOperators(show) {
    const el = document.querySelector("#operator-selector");
    if (!el) return;
    el.style.display = show ? "flex" : "none";
}