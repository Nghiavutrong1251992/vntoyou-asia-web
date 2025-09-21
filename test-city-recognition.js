// Test function nhận dạng thành phố
function testCityRecognition() {
    const hotelData = "Hanoi: 3 Star - CWD Hanoi Hotel 3*, Quang Ba Trade Union Hotel 3* or similar | Sapa: 3 Star - Azure Sapa 3*, Sapa Relax Hotel 3* or similar | Da Nang: 4 Star - Luxtery Da Nang 4*, Nhu Minh Danang 4* or similar";
    
    // Split theo |
    const cities = hotelData.split('|');
    console.log('Số thành phố tìm thấy:', cities.length);
    
    cities.forEach((cityInfo, index) => {
        // Regex để tách tên thành phố
        const cityMatch = cityInfo.trim().match(/^([^:]+):\s*(.+)$/);
        
        if (cityMatch) {
            const cityName = cityMatch[1].trim();
            const hotelInfo = cityMatch[2].trim();
            
            console.log(`\n${index + 1}. Thành phố: "${cityName}"`);
            console.log(`   Hotels: "${hotelInfo.substring(0, 50)}..."`);
        }
    });
}

// Chạy test
testCityRecognition();

/* 
Expected output:
Số thành phố tìm thấy: 3

1. Thành phố: "Hanoi"
   Hotels: "3 Star - CWD Hanoi Hotel 3*, Quang Ba Trade Union..."

2. Thành phố: "Sapa"  
   Hotels: "3 Star - Azure Sapa 3*, Sapa Relax Hotel 3* or..."

3. Thành phố: "Da Nang"
   Hotels: "4 Star - Luxtery Da Nang 4*, Nhu Minh Danang 4*..."
*/