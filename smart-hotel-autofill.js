/**
 * VN To You Asia - Smart Hotel Auto-Fill System
 * Tự động điền khách sạn dựa trên thành phố được chọn
 * Updated: September 2025
 */

// Database khách sạn - copy từ hotels-database.json
const HOTELS_DATABASE = {
  "danang": {
    "name": "Da Nang",
    "3star": ["Sepon Blue Hotel 3*", "Pandora Danang Hotel 3*"],
    "4star": ["Luxtery Da Nang 4*", "Nhu Minh Danang 4*"],
    "5star": ["Golden Bay Danang Hotel 5*", "Muong Thanh Luxury Danang 5*"]
  },
  "hoian": {
    "name": "Hoi An",
    "3star": [],
    "4star": ["Historic Hoian 4*", "Silkotel Hoian 4*", "La Charm Hoi An Hotel & Spa 4*"],
    "5star": []
  },
  "hue": {
    "name": "Hue",
    "3star": [],
    "4star": ["Thanh Lich Hotel Hue 4*", "Romance Hotel Hue 4*"],
    "5star": []
  },
  "hanoi": {
    "name": "Hanoi",
    "3star": ["CWD Hanoi Hotel 3*", "Quang Ba Trade Union Hotel 3*"],
    "4star": ["Thang Long Opera Hotel 4*", "Muong Thanh Central Hotel 4*", "Super Candle Hanoi Hotel 4*", "Lacasa Hanoi Hotel 4*"],
    "5star": []
  },
  "sapa": {
    "name": "Sapa",
    "3star": ["Azure Sapa 3*", "Sapa Relax Hotel 3*"],
    "4star": ["Sapa Highland Resort & Spa 4*", "Charm Sapa Hotel 4*", "Hotel De Sapa 4*"],
    "5star": []
  },
  "halong": {
    "name": "Ha Long",
    "3star": ["New Star Halong 3*", "Song Loc Luxury Hotel 3*"],
    "4star": ["Marina Halong Hotel 4*"],
    "5star": []
  },
  "nhatrang": {
    "name": "Nha Trang",
    "3star": [],
    "4star": ["Le More Nha Trang Hotel 4*", "Le' Cham Hotel Nhatrang 4*"],
    "5star": []
  },
  "phuquoc": {
    "name": "Phu Quoc",
    "3star": [],
    "4star": ["VinHolidays Fiesta Phuquoc 4*", "Wyndham Garden Hotel 4*"],
    "5star": []
  },
  "hcmc": {
    "name": "Ho Chi Minh City",
    "3star": [],
    "4star": ["Cicilia Saigon Hotel 4*", "Athena Saigon Hotel 4*", "Ramana Saigon Hotel 4*"],
    "5star": []
  },
  "muine": {
    "name": "Mui Ne",
    "3star": [],
    "4star": ["Muong Thanh Muine 4*"],
    "5star": []
  },
  "dalat": {
    "name": "Da Lat",
    "3star": [],
    "4star": ["TTC Dalat Hotel 4*", "King Dalat Hotel 4*", "Saigon Dalat Hotel 4*"],
    "5star": []
  },
  "tamdao": {
    "name": "Tam Dao",
    "3star": [],
    "4star": ["Venus Hotel Tam Dao 4*"],
    "5star": []
  },
  "ninhbinh": {
    "name": "Ninh Binh",
    "3star": [],
    "4star": ["The Reed Ninh Binh 4*"],
    "5star": []
  }
};

/**
 * Hàm chính để tự động điền khách sạn
 * Trigger: onChange event khi user nhập cities_visited
 */
function autoFillHotels() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  
  // Tìm cột cities_visited
  const citiesCol = headers.indexOf('cities_visited') + 1;
  const modeCol = headers.indexOf('hotel_selection_mode') + 1;
  
  if (citiesCol === 0 || modeCol === 0) {
    SpreadsheetApp.getUi().alert('Không tìm thấy cột cities_visited hoặc hotel_selection_mode');
    return;
  }
  
  const citiesValue = sheet.getRange(2, citiesCol).getValue();
  const modeValue = sheet.getRange(2, modeCol).getValue();
  
  if (!citiesValue || modeValue !== 'AUTO') {
    return; // Không auto-fill nếu mode không phải AUTO
  }
  
  // Parse cities từ format "hanoi|sapa|danang"
  const cities = citiesValue.split('|').map(city => city.trim().toLowerCase());
  
  // Auto-fill hotels cho từng thành phố
  cities.forEach(cityKey => {
    if (HOTELS_DATABASE[cityKey]) {
      fillHotelsForCity(sheet, headers, cityKey);
    }
  });
  
  SpreadsheetApp.getUi().alert(`✅ Đã tự động điền khách sạn cho ${cities.length} thành phố: ${cities.join(', ')}`);
}

/**
 * Điền khách sạn cho một thành phố cụ thể
 */
function fillHotelsForCity(sheet, headers, cityKey) {
  const hotelData = HOTELS_DATABASE[cityKey];
  
  ['3star', '4star', '5star'].forEach(starType => {
    const colName = `${cityKey}_${starType}`;
    const colIndex = headers.indexOf(colName) + 1;
    
    if (colIndex > 0 && hotelData[starType].length > 0) {
      const hotelList = hotelData[starType].join('|');
      sheet.getRange(2, colIndex).setValue(hotelList);
    }
  });
}

/**
 * Hàm để tạo dropdown validation cho cities_visited
 */
function setupCitiesValidation() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const citiesCol = headers.indexOf('cities_visited') + 1;
  
  if (citiesCol === 0) {
    SpreadsheetApp.getUi().alert('Không tìm thấy cột cities_visited');
    return;
  }
  
  const cities = Object.keys(HOTELS_DATABASE);
  const citiesRange = sheet.getRange(2, citiesCol);
  
  // Tạo data validation rule
  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(cities, true)
    .setAllowInvalid(false)
    .setHelpText('Chọn các thành phố, cách nhau bằng dấu |. VD: hanoi|sapa|danang')
    .build();
    
  citiesRange.setDataValidation(rule);
  
  SpreadsheetApp.getUi().alert('✅ Đã thiết lập validation cho cột cities_visited');
}

/**
 * Hàm để tạo dropdown cho hotel_selection_mode
 */
function setupHotelModeValidation() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const modeCol = headers.indexOf('hotel_selection_mode') + 1;
  
  if (modeCol === 0) {
    SpreadsheetApp.getUi().alert('Không tìm thấy cột hotel_selection_mode');
    return;
  }
  
  const modeRange = sheet.getRange(2, modeCol);
  
  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['AUTO', 'MANUAL'], true)
    .setAllowInvalid(false)
    .setHelpText('AUTO: Tự động điền khách sạn theo database. MANUAL: Tự nhập khách sạn')
    .build();
    
  modeRange.setDataValidation(rule);
  
  SpreadsheetApp.getUi().alert('✅ Đã thiết lập validation cho cột hotel_selection_mode');
}

/**
 * Export tour to JSON - version cải tiến
 */
function exportTourToJSON() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const dataRow = sheet.getRange(2, 1, 1, sheet.getLastColumn()).getValues()[0];
  
  let tourData = {};
  
  // Xử lý từng cột dữ liệu
  for (let i = 0; i < headers.length; i++) {
    const field = headers[i];
    const value = dataRow[i];
    
    if (!field || value === '') continue;
    
    // Skip các cột helper (cities_visited, hotel_selection_mode)
    if (field === 'cities_visited' || field === 'hotel_selection_mode') continue;
    
    // Xử lý các trường đơn giản
    if (['id', 'title', 'subtitle', 'description', 'overview', 'duration', 'departure', 'destination', 'transport', 'region', 'city'].includes(field)) {
      tourData[field] = value;
    }
    
    // Xử lý mảng với separator |
    else if (field === 'hashtags') {
      tourData.hashtags = value.split('|').map(item => item.trim());
    }
    else if (field === 'highlights') {
      tourData.highlights = [value];
    }
    
    // Xử lý lịch trình (hỗ trợ tối đa 14 ngày)
    else if (field.match(/^day(\d+)_(meals|title|description)$/)) {
      if (!tourData.itinerary) tourData.itinerary = [];
      
      const dayMatch = field.match(/^day(\d+)_(meals|title|description)$/);
      if (dayMatch) {
        const dayNum = parseInt(dayMatch[1]);
        const property = dayMatch[2];
        
        if (dayNum >= 1 && dayNum <= 14) {
          let dayObj = tourData.itinerary.find(item => item.day === dayNum);
          if (!dayObj) {
            dayObj = { day: dayNum };
            tourData.itinerary.push(dayObj);
          }
          
          if (property === 'meals') {
            dayObj.meals = value.split('|').map(item => item.trim());
          } else if (property === 'title') {
            dayObj.title = value;
          } else if (property === 'description') {
            dayObj.description = value;
          }
        }
      }
    }
    
    // Xử lý khách sạn (hỗ trợ tất cả thành phố và 5 sao)
    else if (field.match(/^(hanoi|sapa|hcmc|danang|hoian|hue|dalat|nhatrang|phuquoc|halong|muine|tamdao|ninhbinh)_(3star|4star|5star)$/)) {
      if (!tourData.hotels) tourData.hotels = {};
      
      const hotelMatch = field.match(/^(.+)_(3star|4star|5star)$/);
      if (hotelMatch) {
        const city = hotelMatch[1];
        const starType = hotelMatch[2];
        
        if (!tourData.hotels[city]) tourData.hotels[city] = {};
        tourData.hotels[city][starType] = value.split('|').map(item => item.trim());
      }
    }
    
    // Xử lý giá tour (pricing) - hỗ trợ 5 sao
    else if (field.match(/^(3star|4star|5star)_(single_supplement|3pax|4pax|7pax|10_14pax|15_19pax|20_24pax|25_29pax|30_34pax|35_39pax|40_42pax)$/)) {
      if (!tourData.pricing) {
        tourData.pricing = {
          currency: "USD",
          options: [
            { name: "3 Star Hotel", rates: [] },
            { name: "4 Star Hotel", rates: [] },
            { name: "5 Star Hotel", rates: [] }
          ]
        };
      }
      
      const pricingMatch = field.match(/^(3star|4star|5star)_(.+)$/);
      if (pricingMatch) {
        const starType = pricingMatch[1];
        const rateType = pricingMatch[2];
        
        let optionIndex = starType === '3star' ? 0 : (starType === '4star' ? 1 : 2);
        let typeLabel = '';
        
        const rateLabels = {
          'single_supplement': 'Single Supplement',
          '3pax': '3 Pax',
          '4pax': '4 Pax',
          '7pax': '7 Pax',
          '10_14pax': '10-14 Pax',
          '15_19pax': '15-19 Pax + 1 Tour Leader',
          '20_24pax': '20-24 Pax + 1 Tour Leader',
          '25_29pax': '25-29 Pax + 1 Tour Leader',
          '30_34pax': '30-34 Pax + 2 Tour Leaders',
          '35_39pax': '35-39 Pax + 2 Tour Leaders',
          '40_42pax': '40-42 Pax + 2 Tour Leaders'
        };
        
        typeLabel = rateLabels[rateType];
        
        if (typeLabel && value) {
          tourData.pricing.options[optionIndex].rates.push({
            type: typeLabel,
            price: parseInt(value)
          });
        }
      }
    }
    
    // Xử lý SEO
    else if (field === 'seo_keywords') {
      if (!tourData.seo) tourData.seo = {};
      tourData.seo.keywords = value.split('|').map(item => item.trim());
    }
    else if (field === 'seo_meta_description') {
      if (!tourData.seo) tourData.seo = {};
      tourData.seo.metaDescription = value;
    }
  }
  
  // Sắp xếp itinerary theo day
  if (tourData.itinerary) {
    tourData.itinerary.sort((a, b) => a.day - b.day);
  }
  
  // Xuất JSON
  const jsonString = JSON.stringify(tourData, null, 2);
  
  // Tạo file download
  const blob = Utilities.newBlob(jsonString, 'application/json', `${tourData.id || 'tour'}-data.json`);
  DriveApp.createFile(blob);
  
  console.log(jsonString);
  SpreadsheetApp.getUi().alert(`✅ Đã xuất JSON cho tour: ${tourData.title || tourData.id}`);
  
  return jsonString;
}

/**
 * Hàm setup ban đầu - chạy một lần
 */
function initialSetup() {
  setupCitiesValidation();
  setupHotelModeValidation();
  SpreadsheetApp.getUi().alert('✅ Đã thiết lập xong validation rules. Bây giờ bạn có thể sử dụng auto-fill hotels!');
}

/**
 * Hàm test để kiểm tra database
 */
function testHotelDatabase() {
  const cities = Object.keys(HOTELS_DATABASE);
  let report = 'HOTEL DATABASE REPORT:\n\n';
  
  cities.forEach(city => {
    const data = HOTELS_DATABASE[city];
    report += `${data.name} (${city}):\n`;
    report += `  3*: ${data['3star'].length} hotels\n`;
    report += `  4*: ${data['4star'].length} hotels\n`;
    report += `  5*: ${data['5star'].length} hotels\n\n`;
  });
  
  SpreadsheetApp.getUi().alert(report);
}

/**
 * Tạo menu tùy chỉnh
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🏨 VN To You Hotel Manager')
    .addItem('🔧 Initial Setup', 'initialSetup')
    .addItem('🏨 Auto Fill Hotels', 'autoFillHotels')
    .addItem('📊 Export to JSON', 'exportTourToJSON')
    .addItem('📋 Test Database', 'testHotelDatabase')
    .addToUi();
}