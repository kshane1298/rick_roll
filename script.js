// Using CountAPI for visit counter (free service)
const updateCounter = async () => {
    try {
        // Create or increment the counter
        const increment = await fetch('https://api.countapi.xyz/hit/rickroll-website/visits');
        const getCount = await fetch('https://api.countapi.xyz/get/rickroll-website/visits');
        
        const response = await getCount.json();
        document.getElementById('counter').textContent = `Total Visits: ${response.value}`;
    } catch (error) {
        console.error('Error updating counter:', error);
        document.getElementById('counter').textContent = 'Visit counter unavailable';
    }
}

// Update counter when page loads
window.addEventListener('load', updateCounter);