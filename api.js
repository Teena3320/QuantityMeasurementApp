export async function getConversion(from, to) {
    const res = await fetch(`${BASE_URL}/conversions?from=${from}&to=${to}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    if (!data.length) throw new Error("No conversion found");

    return data[0];
}