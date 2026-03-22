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