function exportTourToJSON() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  let tourData = {};
  
  // Đọc dữ liệu cơ bản
  for (let i = 0; i < data.length; i++) {
    const field = data[i][0];
    const value = data[i][1];
    
    if (!field || !value) continue;
    
    // Xử lý các trường đơn giản
    if (field === 'id') tourData.id = value;
    else if (field === 'title') tourData.title = value;
    else if (field === 'subtitle') tourData.subtitle = value;
    else if (field === 'description') tourData.description = value;
    else if (field === 'overview') tourData.overview = value;
    else if (field === 'duration') tourData.duration = value;
    else if (field === 'departure') tourData.departure = value;
    else if (field === 'destination') tourData.destination = value;
    else if (field === 'transport') tourData.transport = value;
    else if (field === 'region') tourData.region = value;
    else if (field === 'city') tourData.city = value;
    
    // Xử lý mảng
    else if (field === 'hashtags') {
      tourData.hashtags = value.split(',').map(item => item.trim());
    }
    else if (field === 'highlights') {
      tourData.highlights = [value];
    }
    // Note: includes, excludes, terms, contact sẽ được load từ default-terms.json
    else if (field === 'seo_keywords') {
      if (!tourData.seo) tourData.seo = {};
      tourData.seo.keywords = value.split(',').map(item => item.trim());
    }
    else if (field === 'seo_meta_description') {
      if (!tourData.seo) tourData.seo = {};
      tourData.seo.metaDescription = value;
    }
    
    // Xử lý itinerary
    else if (field.startsWith('itinerary_day')) {
      if (!tourData.itinerary) tourData.itinerary = [];
      
      const dayMatch = field.match(/itinerary_day(\d+)_(.+)/);
      if (dayMatch) {
        const dayNum = parseInt(dayMatch[1]);
        const property = dayMatch[2];
        
        // Tìm hoặc tạo day object
        let dayObj = tourData.itinerary.find(item => item.day === dayNum);
        if (!dayObj) {
          dayObj = { day: dayNum };
          tourData.itinerary.push(dayObj);
        }
        
        if (property === 'meals') {
          dayObj.meals = value.split(',').map(item => item.trim());
        } else if (property === 'title') {
          dayObj.title = value;
        } else if (property === 'description') {
          dayObj.description = value;
        }
      }
    }
    
    // Xử lý hotels
    else if (field.startsWith('hotels_')) {
      if (!tourData.hotels) tourData.hotels = {};
      
      const hotelMatch = field.match(/hotels_(.+)_(.+)/);
      if (hotelMatch) {
        const city = hotelMatch[1];
        const starType = hotelMatch[2];
        
        if (!tourData.hotels[city]) tourData.hotels[city] = {};
        tourData.hotels[city][starType] = value.split('|').map(item => item.trim());
      }
    }
    
    // Xử lý pricing
    else if (field.startsWith('pricing_')) {
      if (!tourData.pricing) {
        tourData.pricing = {
          currency: "USD",
          options: [
            { name: "3 Star Hotel", rates: [] },
            { name: "4 Star Hotel", rates: [] }
          ]
        };
      }
      
      if (field === 'pricing_currency') {
        tourData.pricing.currency = value;
      } else {
        const pricingMatch = field.match(/pricing_(.+star)_(.+)/);
        if (pricingMatch) {
          const starType = pricingMatch[1];
          const rateType = pricingMatch[2];
          
          let optionIndex = starType === '3star' ? 0 : 1;
          let typeLabel = '';
          
          if (rateType === 'single') typeLabel = 'Single Supplement';
          else if (rateType === '3pax') typeLabel = '3 Pax';
          else if (rateType === '4pax') typeLabel = '4 Pax';
          else if (rateType === '7pax') typeLabel = '7 Pax';
          else if (rateType === '10_14pax') typeLabel = '10-14 Pax';
          else if (rateType === '15_19pax') typeLabel = '15-19 Pax + 1 Tour Leader';
          else if (rateType === '20_24pax') typeLabel = '20-24 Pax + 1 Tour Leader';
          else if (rateType === '25_29pax') typeLabel = '25-29 Pax + 1 Tour Leader';
          else if (rateType === '30_34pax') typeLabel = '30-34 Pax + 2 Tour Leaders';
          else if (rateType === '35_39pax') typeLabel = '35-39 Pax + 2 Tour Leaders';
          else if (rateType === '40_42pax') typeLabel = '40-42 Pax + 2 Tour Leaders';
          
          if (typeLabel) {
            tourData.pricing.options[optionIndex].rates.push({
              type: typeLabel,
              price: parseInt(value)
            });
          }
        }
      }
    }
    // Note: contact sẽ được load từ default-terms.json
  }
  
  // Sắp xếp itinerary theo day
  if (tourData.itinerary) {
    tourData.itinerary.sort((a, b) => a.day - b.day);
  }
  
  // Xuất JSON
  const jsonString = JSON.stringify(tourData, null, 2);
  
  // Tạo file download hoặc hiển thị
  console.log(jsonString);
  
  // Hoặc tạo file trong Google Drive
  const blob = Utilities.newBlob(jsonString, 'application/json', 'tour-data.json');
  DriveApp.createFile(blob);
  
  return jsonString;
}

// Hàm để test
function testExport() {
  const result = exportTourToJSON();
  Logger.log(result);
}