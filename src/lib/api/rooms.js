export const getRooms = async () => {
    const res = await fetch("http://localhost:8000/api/rooms", {
        method: "GET",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch rooms");
    }
    const data = await res.json();
    return data;
};