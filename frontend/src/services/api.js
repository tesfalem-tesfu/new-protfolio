export async function getProfile() {
const response = await fetch('http://localhost:5000/api/profile');
return response.json();
}