export async function load({ parent }) {
    const data = await parent();
    return {
        clone: data.count
    }
}