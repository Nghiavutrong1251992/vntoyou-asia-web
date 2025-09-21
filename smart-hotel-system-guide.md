# 🏨 SMART HOTEL AUTO-FILL SYSTEM
## Hệ thống tự động điền khách sạn thông minh cho VN To You Asia

---

## 🎯 **MỤC TIÊU**
Giảm thiểu 90% thời gian nhập liệu khách sạn bằng cách tự động điền dựa trên thành phố được chọn.

---

## ⚡ **TÍNH NĂNG CHÍNH**

### **1. 🤖 Auto-Fill Hotels**
- **Input:** Chỉ cần nhập `cities_visited` (VD: `hanoi|sapa|danang`)
- **Output:** Tự động điền tất cả khách sạn 3*, 4*, 5* cho các thành phố đó
- **Trigger:** Chọn mode `AUTO` và chạy function `autoFillHotels()`

### **2. 📋 Smart Validation**
- **Cities dropdown:** Gợi ý thành phố có sẵn trong database
- **Mode selection:** `AUTO` hoặc `MANUAL`
- **Error prevention:** Chỉ cho phép thành phố hợp lệ

### **3. 📊 Enhanced Export**
- Bỏ qua các cột helper (`cities_visited`, `hotel_selection_mode`)
- Hỗ trợ đầy đủ 13 thành phố và 5 sao
- Tự động tạo file JSON với tên tour

---

## 🏙️ **13 THÀNH PHỐ HỖ TRỢ**

| Mã | Tên thành phố | 3⭐ | 4⭐ | 5⭐ |
|---|---|---|---|---|
| `hanoi` | Hà Nội | ✅ | ✅ | ❌ |
| `sapa` | Sa Pa | ✅ | ✅ | ❌ |
| `hcmc` | TP. Hồ Chí Minh | ❌ | ✅ | ❌ |
| `danang` | Đà Nẵng | ✅ | ✅ | ✅ |
| `hoian` | Hội An | ❌ | ✅ | ❌ |
| `hue` | Huế | ❌ | ✅ | ❌ |
| `dalat` | Đà Lạt | ❌ | ✅ | ❌ |
| `nhatrang` | Nha Trang | ❌ | ✅ | ❌ |
| `phuquoc` | Phú Quốc | ❌ | ✅ | ❌ |
| `halong` | Hạ Long | ✅ | ✅ | ❌ |
| `muine` | Mũi Né | ❌ | ✅ | ❌ |
| `tamdao` | Tam Đảo | ❌ | ✅ | ❌ |
| `ninhbinh` | Ninh Bình | ❌ | ✅ | ❌ |

---

## 📋 **CẤU TRÚC GOOGLE SHEET MỚI**

### **🆕 Cột mới được thêm:**

| Cột | Tên | Mô tả | Ví dụ |
|-----|-----|-------|-------|
| AV | `cities_visited` | Danh sách thành phố (cách nhau bằng \|) | hanoi\|sapa\|danang |
| AW | `hotel_selection_mode` | Chế độ: AUTO hoặc MANUAL | AUTO |

### **🏨 Cột khách sạn (AX-CQ):**
- **Pattern:** `{city}_{star}` 
- **Cities:** 13 thành phố
- **Stars:** 3star, 4star, 5star
- **Total:** 39 cột khách sạn (13 × 3)

### **💰 Cột giá (CR-DR):**
- **3 Star:** CR-DB (20 cột)
- **4 Star:** DC-DV (20 cột) 
- **5 Star:** DW-EP (20 cột)
- **Total:** 60 cột giá (3 × 20)

---

## 🔧 **HƯỚNG DẪN SỬ DỤNG**

### **Bước 1: Setup ban đầu**
1. Import `tour-template-optimized.csv` vào Google Sheets
2. Copy code từ `smart-hotel-autofill.js` vào Apps Script
3. Chạy function `initialSetup()` một lần
4. Reload sheet để thấy menu "🏨 VN To You Hotel Manager"

### **Bước 2: Tạo tour mới**
1. **Nhập thông tin cơ bản:** id, title, description, v.v.
2. **Chọn thành phố:** Nhập vào cột `cities_visited`
   ```
   Ví dụ: hanoi|sapa|danang|hoian
   ```
3. **Chọn mode:** Đặt `hotel_selection_mode` = `AUTO`
4. **Auto-fill:** Chạy menu "🏨 Auto Fill Hotels"
5. **Kiểm tra:** Xem các cột khách sạn đã được điền tự động

### **Bước 3: Điều chỉnh (nếu cần)**
- **Thêm khách sạn:** Thêm vào cuối danh sách với separator `|`
- **Bớt khách sạn:** Xóa khách sạn không mong muốn
- **Mode MANUAL:** Đặt mode = `MANUAL` để tự nhập khách sạn

### **Bước 4: Export JSON**
1. Chạy function `exportTourToJSON()`
2. File JSON sẽ được tạo trong Google Drive
3. Download và copy vào folder `tours/data/`

---

## 💡 **VÍ DỤ THỰC TẾ**

### **Input:**
```
cities_visited: hanoi|sapa|danang
hotel_selection_mode: AUTO
```

### **Auto-fill result:**
```
hanoi_3star: CWD Hanoi Hotel 3*|Quang Ba Trade Union Hotel 3*
hanoi_4star: Thang Long Opera Hotel 4*|Muong Thanh Central Hotel 4*|Super Candle Hanoi Hotel 4*|Lacasa Hanoi Hotel 4*
hanoi_5star: (empty)

sapa_3star: Azure Sapa 3*|Sapa Relax Hotel 3*
sapa_4star: Sapa Highland Resort & Spa 4*|Charm Sapa Hotel 4*|Hotel De Sapa 4*
sapa_5star: (empty)

danang_3star: Sepon Blue Hotel 3*|Pandora Danang Hotel 3*
danang_4star: Luxtery Da Nang 4*|Nhu Minh Danang 4*
danang_5star: Golden Bay Danang Hotel 5*|Muong Thanh Luxury Danang 5*
```

---

## 🎯 **LỢI ÍCH**

### **⚡ Tốc độ:**
- **Trước:** 5-10 phút nhập khách sạn cho 1 tour
- **Sau:** 30 giây với auto-fill

### **📊 Chính xác:**
- Database chuẩn hóa từ `hotel-list.text`
- Không có lỗi chính tả
- Consistent format

### **🔄 Linh hoạt:**
- Mode AUTO cho tours tiêu chuẩn
- Mode MANUAL cho tours đặc biệt
- Dễ dàng chỉnh sửa sau khi auto-fill

### **📈 Mở rộng:**
- Dễ thêm thành phố mới
- Dễ cập nhật danh sách khách sạn
- Support tới 5 sao

---

## 🛠️ **MAINTENANCE**

### **Thêm thành phố mới:**
1. Update `HOTELS_DATABASE` in Apps Script
2. Update `hotels-database.json`
3. Add columns in sheet template

### **Cập nhật khách sạn:**
1. Sửa `data/hotel-list.text`
2. Update `HOTELS_DATABASE`
3. Chạy lại auto-fill cho tours cũ

---

## 📁 **FILES QUAN TRỌNG**

| File | Mục đích |
|------|----------|
| `data/hotels-database.json` | Database khách sạn chuẩn hóa |
| `tour-template-optimized.csv` | Template Google Sheet tối ưu |
| `smart-hotel-autofill.js` | Apps Script auto-fill thông minh |
| `google-sheets-14days-guide.md` | Hướng dẫn chi tiết |

---

**🎉 Kết quả: Giảm 90% thời gian nhập liệu khách sạn!**