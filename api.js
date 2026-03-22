export const BASE_URL = "http://localhost:3000";

export async function getUnits(type) {
    const res = await fetch(`${BASE_URL}/units?type=${type}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
}