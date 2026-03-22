import { getUnits, getHistory } from "./api.js";
import { populateDropdown, renderHistory, toggleOperators } from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {

    const state = {
        type: "Length",
        action: "Conversion",
        fromVal: null,
        fromUnit: "",
        toVal: null,
        toUnit: "",
        operator: "+"
    };

    const fromSelect = document.querySelector("#from-unit");
    const toSelect = document.querySelector("#to-unit");

    async function loadUnits(type) {
        const units = await getUnits(type);
        populateDropdown(fromSelect, units);
        populateDropdown(toSelect, units);
    }

    async function loadHistoryList() {
        const records = await getHistory();
        renderHistory(records);
    }

    function attachEventListeners() {
        document.querySelectorAll(".type-card").forEach(btn => {
            btn.addEventListener("click", async () => {
                state.type = btn.dataset.type;
                await loadUnits(state.type);
                state.fromUnit = "";
                state.toUnit = "";
            });
        });

        document.querySelectorAll(".action-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                state.action = btn.dataset.action;
                toggleOperators(state.action === "Arithmetic");
            });
        });
    }

    attachEventListeners();
    await loadUnits("Length");
    toggleOperators(false);
    await loadHistoryList();
});