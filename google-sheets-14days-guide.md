# 📊 GOOGLE SHEET STRUCTURE - 14 DAYS TOUR MANAGEMENT

## 🎯 **TỔNG QUAN**
Cấu trúc Google Sheet mới hỗ trợ tours lên đến **14 ngày** với nhiều thành phố và khách sạn hơn.

---

## 📋 **CẤU TRÚC CỘT CHI TIẾT**

### **🔰 A-K: THÔNG TIN CƠ BẢN (Basic Info)**
| Cột | Tên | Mô tả | Ví dụ |
|-----|-----|-------|-------|
| A | `id` | Mã tour duy nhất | VNN401, VNC501CB |
| B | `title` | Tiêu đề tour đầy đủ | VNN401: Hanoi Sapa 4D3N |
| C | `subtitle` | Slogan thu hút | Discover the breathtaking beauty... |
| D | `description` | Mô tả ngắn gọn | Discover the breathtaking beauty... |
| E | `overview` | Tổng quan chi tiết tour | Experience the stunning landscapes... |
| F | `duration` | Thời gian tour | 4 Days 3 Nights, 14 Days 13 Nights |
| G | `departure` | Điểm khởi hành | Hanoi, Ho Chi Minh City |
| H | `destination` | Các điểm đến | Hanoi, Sapa, Da Nang |
| I | `transport` | Phương tiện di chuyển | Air-conditioned bus, Cable car |
| J | `region` | Vùng miền | Northern Vietnam, Central Vietnam |
| K | `city` | Thành phố chính | Hanoi, Sapa, Da Nang |

### **🏷️ L-O: MARKETING & SEO**
| Cột | Tên | Mô tả | Format | Ví dụ |
|-----|-----|-------|--------|-------|
| L | `hashtags` | Hashtags marketing | Cách nhau bằng `\|` | HanoiTour\|SapaTour\|Mountains |
| M | `highlights` | Điểm nổi bật tour | Text đơn | 3 special meals: Buffet Fansipan |
| N | `seo_keywords` | Từ khóa SEO | Cách nhau bằng `\|` | Hanoi\|Sapa\|Fansipan |
| O | `seo_meta_description` | Meta description | Text đơn | Experience the best of Northern... |

### **🗓️ P-BK: LỊCH TRÌNH 14 NGÀY (Itinerary)**

**PATTERN:** `dayX_meals`, `dayX_title`, `dayX_description` (X = 1-14)

#### **Ngày 1-5:**
| Cột | Tên | Mô tả | Format |
|-----|-----|-------|--------|
| P | `day1_meals` | Bữa ăn ngày 1 | B\|L\|D |
| Q | `day1_title` | Tiêu đề ngày 1 | Airport Transfer to Sapa |
| R | `day1_description` | Hoạt động ngày 1 | Pick up at airport... |
| S | `day2_meals` | Bữa ăn ngày 2 | B\|L\|D |
| T | `day2_title` | Tiêu đề ngày 2 | Fansipan Mountain |
| U | `day2_description` | Hoạt động ngày 2 | Fansipan Mountain... |
| ... | ... | ... | ... |

#### **Ngày 6-10:**
| Cột | Tên | Mô tả | Format |
|-----|-----|-------|--------|
| AD | `day6_meals` | Bữa ăn ngày 6 | B\|L\|D |
| AE | `day6_title` | Tiêu đề ngày 6 | Ho Chi Minh City Tour |
| AF | `day6_description` | Hoạt động ngày 6 | Visit War Museum... |
| ... | ... | ... | ... |

#### **Ngày 11-14:**
| Cột | Tên | Mô tả | Format |
|-----|-----|-------|--------|
| AU | `day11_meals` | Bữa ăn ngày 11 | B\|L\|D |
| AV | `day11_title` | Tiêu đề ngày 11 | Phu Quoc Island |
| AW | `day11_description` | Hoạt động ngày 11 | Cable car to Hon Thom... |
| ... | ... | ... | ... |
| BC | `day14_meals` | Bữa ăn ngày 14 | B\|L |
| BD | `day14_title` | Tiêu đề ngày 14 | Departure |
| BE | `day14_description` | Hoạt động ngày 14 | Free time - Airport transfer |

### **🏨 BF-BU: KHÁCH SẠN 10 THÀNH PHỐ**

**10 thành phố hỗ trợ:** Hanoi, Sapa, HCMC, Da Nang, Hoi An, Hue, Da Lat, Nha Trang, Phu Quoc, Ha Long

| Cột | Tên | Thành phố | Hạng sao | Format |
|-----|-----|-----------|----------|--------|
| BF | `hanoi_3star_hotels` | Hà Nội | 3 sao | CWD Hanoi Hotel 3*\|Quang Ba Hotel 3* |
| BG | `hanoi_4star_hotels` | Hà Nội | 4 sao | Thang Long Opera 4*\|Muong Thanh 4* |
| BH | `sapa_3star_hotels` | Sapa | 3 sao | Azure Sapa 3*\|Sapa Relax 3* |
| BI | `sapa_4star_hotels` | Sapa | 4 sao | Sapa Highland Resort 4* |
| BJ | `hcmc_3star_hotels` | TP.HCM | 3 sao | Liberty Central 3*\|Saigon Prince 3* |
| BK | `hcmc_4star_hotels` | TP.HCM | 4 sao | Rex Hotel 4*\|Caravelle 4* |
| BL | `danang_3star_hotels` | Đà Nẵng | 3 sao | Muong Thanh Da Nang 3* |
| BM | `danang_4star_hotels` | Đà Nẵng | 4 sao | Novotel Da Nang 4*\|Pullman 4* |
| BN | `hoian_3star_hotels` | Hội An | 3 sao | Moonlight Hoi An 3* |
| BO | `hoian_4star_hotels` | Hội An | 4 sao | Hoi An Historic 4*\|KOI Resort 4* |
| BP | `hue_3star_hotels` | Huế | 3 sao | Imperial Hue 3* |
| BQ | `hue_4star_hotels` | Huế | 4 sao | Indochine Palace 4* |
| BR | `dalat_3star_hotels` | Đà Lạt | 3 sao | (để trống nếu không dùng) |
| BS | `dalat_4star_hotels` | Đà Lạt | 4 sao | (để trống nếu không dùng) |
| BT | `nhatrang_3star_hotels` | Nha Trang | 3 sao | (để trống nếu không dùng) |
| BU | `nhatrang_4star_hotels` | Nha Trang | 4 sao | (để trống nếu không dùng) |
| BV | `phuquoc_3star_hotels` | Phú Quốc | 3 sao | (để trống nếu không dùng) |
| BW | `phuquoc_4star_hotels` | Phú Quốc | 4 sao | (để trống nếu không dùng) |
| BX | `halong_3star_hotels` | Hạ Long | 3 sao | (để trống nếu không dùng) |
| BY | `halong_4star_hotels` | Hạ Long | 4 sao | (để trống nếu không dùng) |

### **💰 BZ-CU: GIÁ TOUR (Pricing)**

#### **Khách sạn 3 sao (BZ-CJ):**
| Cột | Tên | Loại khách | Ví dụ |
|-----|-----|-----------|-------|
| BZ | `3star_single_supplement` | Phụ thu phòng đơn | 53 |
| CA | `3star_3pax` | 3 khách | 377 |
| CB | `3star_4pax` | 4 khách | 335 |
| CC | `3star_7pax` | 7 khách | 262 |
| CD | `3star_10_14pax` | 10-14 khách | 224 |
| CE | `3star_15_19pax` | 15-19 khách + 1 TL | 218 |
| CF | `3star_20_24pax` | 20-24 khách + 1 TL | 203 |
| CG | `3star_25_29pax` | 25-29 khách + 1 TL | 198 |
| CH | `3star_30_34pax` | 30-34 khách + 2 TL | 191 |
| CI | `3star_35_39pax` | 35-39 khách + 2 TL | 186 |
| CJ | `3star_40_42pax` | 40-42 khách + 2 TL | 182 |

#### **Khách sạn 4 sao (CK-CU):**
| Cột | Tên | Loại khách | Ví dụ |
|-----|-----|-----------|-------|
| CK | `4star_single_supplement` | Phụ thu phòng đơn | 73 |
| CL | `4star_3pax` | 3 khách | 427 |
| CM | `4star_4pax` | 4 khách | 385 |
| CN | `4star_7pax` | 7 khách | 312 |
| CO | `4star_10_14pax` | 10-14 khách | 274 |
| CP | `4star_15_19pax` | 15-19 khách + 1 TL | 268 |
| CQ | `4star_20_24pax` | 20-24 khách + 1 TL | 253 |
| CR | `4star_25_29pax` | 25-29 khách + 1 TL | 248 |
| CS | `4star_30_34pax` | 30-34 khách + 2 TL | 241 |
| CT | `4star_35_39pax` | 35-39 khách + 2 TL | 236 |
| CU | `4star_40_42pax` | 40-42 khách + 2 TL | 232 |

---

## 🔧 **HƯỚNG DẪN SỬ DỤNG**

### **1. Tạo Google Sheet:**
1. Copy template từ file `tour-template-14days.csv`
2. Import vào Google Sheets
3. Dòng 1: Headers (tên cột)
4. Dòng 2+: Dữ liệu tours

### **2. Quy tắc nhập liệu:**
- **Separator:** Dùng dấu `|` cho arrays (hashtags, hotels, meals, keywords)
- **Meals:** `B|L|D` (Breakfast|Lunch|Dinner)
- **Hotels:** `Hotel Name 3*|Another Hotel 3*`
- **Prices:** Chỉ số, đơn vị USD
- **Empty cells:** Để trống nếu không áp dụng

### **3. Ví dụ tour 14 ngày:**
```
VNX001 | 14D13N Grand Vietnam Discovery | Experience all regions | 
Day 1: Hanoi arrival | Day 7: Da Nang | Day 14: Departure HCMC
```

### **4. Apps Script Integration:**
- Function: `exportTourToJSON()`
- Tự động chuyển đổi Sheet → JSON
- Kết hợp với `default-terms.json`

---

## 🎯 **LỢI ÍCH CẤU TRÚC MỚI**

✅ **Hỗ trợ 14 ngày** thay vì 7 ngày  
✅ **10 thành phố** thay vì 4 thành phố  
✅ **Flexible pricing** cho nhiều nhóm khách  
✅ **SEO optimization** với keywords riêng  
✅ **Auto JSON export** qua Apps Script  
✅ **Consistent format** với website hiện tại  

---

## 📝 **LƯU Ý QUAN TRỌNG**

⚠️ **Không bắt buộc điền đầy đủ 14 ngày** - chỉ điền các ngày thực tế  
⚠️ **Khách sạn** - chỉ điền thành phố tour đi qua  
⚠️ **Pricing** - phải điền đầy đủ cả 3* và 4* nếu có cả 2 loại  
⚠️ **Separator** - nhất quán dùng `|` cho tất cả arrays  

---

**File template:** `tour-template-14days.csv`  
**Apps Script:** `apps-script-export.js`  
**Updated:** September 2025