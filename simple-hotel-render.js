// Function render hotels đơn giản - thay thế function phức tạp hiện tại
function renderHotelsSimple(hotelsString) {
    if (!hotelsString) return '';
    
    // Split theo dấu | để tách từng thành phố
    const cities = hotelsString.split('|');
    
    return cities.map(cityInfo => {
        const cityMatch = cityInfo.trim().match(/^([^:]+):\s*(.+)$/);
        if (cityMatch) {
            const cityName = cityMatch[1].trim();
            const hotelInfo = cityMatch[2].trim();
            
            return `
                <div class="mb-3">
                    <h5 class="text-primary mb-2">
                        <i class="fas fa-map-marker-alt me-1"></i> 
                        ${sanitizeHTML(cityName)}
                    </h5>
                    <p class="text-muted mb-0" style="line-height: 1.6;">
                        ${sanitizeHTML(hotelInfo)}
                    </p>
                </div>
            `;
        }
        return '';
    }).join('');
}