# Hướng Dẫn Thêm Tour Mới - Hệ Thống Động (Cập Nhật 2025)

## 🚀 Tổng Quan
Website đã được nâng cấp sang **hệ thống dynamic loading** với JavaScript. Giờ thêm tour chỉ cần 2 bước đơn giản!

## ✅ Cách Thêm Tour Mới (Chỉ 2 Bước!)

### Bước 1: Thêm Tour Vào Danh Sách
**File:** `tours/data/tours.json`  
Thêm object mới vào array hiện tại:

```json
{
  "id": "tour-moi",
  "title": "Tour ABC 3 ngày 2 đêm: Tên tour",
  "region": "Miền Bắc",
  "days": 3,
  "description": "Mô tả ngắn gọn về tour...",
  "image": "tours/data/tour-moi.jpg",
  "dataFile": "data/tour-moi.json"
}
```

**Lưu ý:**
- `id`: Unique, chỉ dùng chữ thường, số, dấu gạch ngang
- `region`: Phải là "Miền Bắc", "Miền Trung", hoặc "Miền Nam"
- `days`: Số nguyên (filter sẽ dùng)
- `image`: Đường dẫn từ root tới ảnh đại diện
- `dataFile`: Đường dẫn tới file JSON chi tiết

### Bước 2: Tạo File Chi Tiết
**File:** `tours/data/tour-moi.json`  
Tạo file mới với format:

```json
{
  "id": 4,
  "title": "Tour ABC 3 ngày 2 đêm: Tên tour chi tiết",
  "region": "Miền Bắc",
  "days": 3,
  "description": "Mô tả chi tiết về tour, điểm đến, trải nghiệm...",
  "image": "tours/data/tour-moi.jpg",
  "itinerary": [
    "Ngày 1: Khởi hành - Tham quan điểm A, B. Nghỉ đêm tại khách sạn.",
    "Ngày 2: Khám phá điểm C, D. Trải nghiệm hoạt động X, Y.",
    "Ngày 3: Tham quan điểm E. Kết thúc chuyến đi."
  ],
  "includes": [
    "Xe du lịch điều hòa",
    "Hướng dẫn viên chuyên nghiệp",
    "Vé tham quan các điểm",
    "Bữa ăn theo chương trình",
    "Khách sạn 3-4 sao"
  ],
  "excludes": [
    "Vé máy bay khứ hồi",
    "Chi phí cá nhân",
    "Đồ uống ngoài bữa ăn",
    "Bảo hiểm du lịch",
    "Tip cho hướng dẫn viên"
  ],
  "terms": [
    "Đặt tour trước 7 ngày để có giá tốt nhất",
    "Hủy tour trước 3 ngày không mất phí",
    "Trẻ em dưới 2 tuổi miễn phí",
    "Cần mang CMND/Hộ chiếu còn hạn",
    "Lịch trình có thể thay đổi tùy thời tiết"
  ]
}
```

### Bước 3: Thêm Ảnh (Tùy Chọn)
- **Tên file**: Trùng với tour ID + extension (vd: `tour-moi.jpg`)
- **Đường dẫn**: `tours/data/tour-moi.jpg`
- **Kích thước**: 800x450px (tỷ lệ 16:9) khuyến nghị
- **Format**: JPG (ảnh thật) hoặc PNG (có background trong suốt)

**🎯 Quy Tắc Đặt Tên Ảnh:**
- ✅ Chữ thường, không dấu, dùng gạch ngang: `sapa.jpg`, `ha-long.jpg`
- ✅ Trùng với tour ID để dễ nhận diện
- ❌ Tránh dấu cách: `nha trang.jpg`
- ❌ Tránh tiếng Việt có dấu: `đà-nẵng.jpg`

## 🎉 Xong!
Tour mới sẽ **tự động xuất hiện** trong:
- ✅ Danh sách tour (`tour.html`) 
- ✅ Bộ lọc theo vùng và ngày
- ✅ Link chi tiết tự động: `tours/details/tour-detail.html?id=tour-moi`
- ✅ Layout responsive đẹp

## 🔗 Cấu Trúc Hoàn Chỉnh
```
tours/
├── data/
│   ├── tours.json          ← BƯỚC 1: Thêm tour vào đây
│   ├── tour-moi.json       ← BƯỚC 2: Tạo file chi tiết
│   ├── tour-moi.jpg        ← BƯỚC 3: Ảnh đại diện
│   ├── tour-danang.json    ← Tour có sẵn
│   └── nhatrang.json       ← Tour có sẵn
└── details/
    └── tour-detail.html    ← Không cần động vào
```

## 🛠️ Debug Nếu Có Lỗi
1. **Mở DevTools (F12) → Console**
2. **Refresh trang `tour.html`**
3. **Kiểm tra log:**
   - `Tours loaded: Array(4)` ← Số tour đã tăng
   - Nếu có lỗi: Check JSON syntax bằng jsonlint.com

## 📝 Tips Quan Trọng
- **Encoding UTF-8**: File JSON phải save UTF-8 để hiện tiếng Việt
- **Unique ID**: Mỗi tour phải có ID khác nhau
- **Consistent Data**: Đảm bảo `region` đúng chính tả
- **Path Chính Xác**: Image path từ root website
- **Tên Ảnh**: Đặt tên trùng với tour ID (vd: `sapa.jpg` cho tour ID `sapa`)
- **File Size**: Nén ảnh dưới 1MB để load nhanh

## 🗂️ Ví Dụ Thực Tế - Tour Sapa
**File 1:** `tours/data/tours.json` (thêm vào array)
```json
{
  "id": "sapa",
  "title": "Tour Sapa 2 ngày 1 đêm: Ruộng bậc thang",
  "region": "Miền Bắc", 
  "days": 2,
  "description": "Khám phá vẻ đẹp ruộng bậc thang Sapa, trekking và trải nghiệm văn hóa dân tộc.",
  "image": "tours/data/sapa.jpg",
  "dataFile": "data/sapa.json"
}
```

**File 2:** `tours/data/sapa.json` (tạo mới)
```json
{
  "id": 4,
  "title": "Tour Sapa 2 ngày 1 đêm: Ruộng bậc thang",
  "region": "Miền Bắc",
  "days": 2,
  "description": "Khám phá Sapa với ruộng bậc thang vàng óng, trekking qua các bản làng và trải nghiệm văn hóa H'Mông, Tày.",
  "itinerary": [
    "Ngày 1: Khởi hành từ Hà Nội - Sapa. Tham quan thị trấn Sapa. Trekking bản Cát Cát.",
    "Ngày 2: Trekking ruộng bậc thang Mường Hoa. Ghé thăm bản Tả Van. Về Hà Nội."
  ],
  "includes": [
    "Xe giường nằm Hà Nội - Sapa - Hà Nội",
    "Hướng dẫn viên địa phương",
    "Homestay 1 đêm",
    "Bữa ăn theo chương trình"
  ],
  "excludes": [
    "Chi phí cá nhân",
    "Đồ uống ngoài bữa ăn",
    "Bảo hiểm cá nhân"
  ],
  "terms": [
    "Cần giày trekking và áo ấm",
    "Hủy tour trước 2 ngày",
    "Phù hợp từ 16 tuổi trở lên"
  ]
}
```

➡️ **Result**: Tour Sapa sẽ xuất hiện ngay trong filter "Miền Bắc" và "1-3 Ngày"!