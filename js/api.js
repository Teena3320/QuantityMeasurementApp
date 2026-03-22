export const BASE_URL = "http://localhost:3000";

export async function getUnits(type) {
    const res = await fetch(`${BASE_URL}/units?type=${type}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
}

export async function getConversion(from, to) {
    const res = await fetch(`${BASE_URL}/conversions?from=${from}&to=${to}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    if (!data.length) throw new Error("No conversion found");

    return data[0];
}
export async function saveHistory(record) {
    const res = await fetch(`${BASE_URL}/history`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
}
export async function getHistory() {
    const res = await fetch(`${BASE_URL}/history?_sort=timestamp&_order=desc`);
    if (!res.ok) return [];
    return await res.json();
}