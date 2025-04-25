export const getTours = async () => {
    const res = await fetch("http://localhost:8000/api/tours", {
     method: "GET",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch tours");
    }
    const data = await res.json();
    return data;
};