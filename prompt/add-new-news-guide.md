# Hướng Dẫn Thêm Tin Tức Mới - VN To You Asia

## 📋 Tổng Quan
Hướng dẫn này giúp bạn thêm tin tức mới vào website VN To You Asia một cách dễ dàng và đồng nhất với giao diện hiện tại.

## 📁 Cấu Trúc Thư Mục
```
news/
├── data/
│   ├── news.json                 # Danh sách tất cả tin tức (CẬP NHẬT)
│   ├── [id-tin-tuc].json        # File chi tiết tin tức mới (TẠO MỚI)
│   └── [ten-anh].jpg            # Ảnh thumbnail tin tức (TẠO MỚI)
└── details/
    └── news-detail.html         # Template (KHÔNG CẦN SỬA)
```

## 🔄 Các Bước Thêm Tin Tức Mới

### Bước 1: Chuẩn Bị Ảnh
1. **Tên file ảnh:** `news-[id-tin-tuc].jpg`
   - Ví dụ: `news-promotion-tet-2026.jpg`
   
2. **Kích thước ảnh:** 
   - Khuyến nghị: 800x400px (tỷ lệ 2:1)
   - Định dạng: JPG hoặc PNG
   - Dung lượng: < 500KB

3. **Đặt ảnh vào:** `news/data/`

### Bước 2: Tạo File Chi Tiết Tin Tức

#### 📄 Tạo file: `news/data/[id-tin-tuc].json`

**Template cơ bản:**
```json
{
  "id": "id-tin-tuc",
  "title": "Tiêu Đề Tin Tức",
  "category": "Danh Mục",
  "date": "YYYY-MM-DD",
  "author": "Tên Tác Giả",
  "summary": "Tóm tắt ngắn gọn về tin tức",
  "content": [
    "Đoạn văn thứ nhất của tin tức...",
    "Đoạn văn thứ hai của tin tức...",
    "Đoạn văn thứ ba của tin tức..."
  ],
  "contact": {
    "phone": "+84 123 456 789",
    "email": "info@vntoyouasia.com",
    "note": "Ghi chú liên hệ"
  }
}
```

### Bước 3: Cập Nhật Danh Sách Tin Tức

#### 📄 Sửa file: `news/data/news.json`

Thêm entry mới vào đầu mảng:
```json
[
  {
    "id": "id-tin-tuc-moi",
    "title": "Tiêu Đề Tin Tức Mới",
    "summary": "Tóm tắt tin tức mới",
    "date": "2025-09-20",
    "category": "Danh Mục",
    "image": "news/data/news-id-tin-tuc-moi.jpg",
    "dataFile": "data/id-tin-tuc-moi.json"
  },
  // ... các tin tức cũ
]
```

## 📝 Các Loại Tin Tức & Template

### 1. 🎯 Tour Mới
```json
{
  "id": "tour-singapore-2026",
  "title": "Tour Singapore Mới - Trải Nghiệm Hiện Đại",
  "category": "Tour Mới",
  "date": "2025-10-01",
  "author": "VN To You Asia",
  "summary": "Khám phá Singapore với những trải nghiệm hiện đại và độc đáo.",
  "content": [
    "Singapore là điểm đến lý tưởng cho các chuyến du lịch doanh nghiệp...",
    "Tour mới của chúng tôi bao gồm những địa điểm hot nhất..."
  ],
  "highlights": [
    "Tham quan Gardens by the Bay",
    "Trải nghiệm Marina Bay Sands",
    "Khám phá khu phố Chinatown",
    "Shopping tại Orchard Road"
  ],
  "details": {
    "duration": "4 ngày 3 đêm",
    "price": "Từ 15,000,000 VND",
    "departure": "Hà Nội / TP.HCM",
    "season": "Quanh năm"
  },
  "contact": {
    "phone": "+84 123 456 789",
    "email": "info@vntoyouasia.com",
    "note": "Liên hệ ngay để được tư vấn chi tiết!"
  }
}
```

### 2. 🎁 Khuyến Mãi
```json
{
  "id": "khuyen-mai-tet-2026",
  "title": "Khuyến Mãi Tết 2026 - Giảm Giá Sốc",
  "category": "Khuyến Mãi",
  "date": "2025-12-01",
  "author": "VN To You Asia",
  "summary": "Chương trình khuyến mãi đặc biệt nhân dịp Tết Nguyên Đán 2026.",
  "content": [
    "Nhân dịp Tết Nguyên Đán 2026, VN To You Asia tung ra chương trình ưu đãi lớn...",
    "Chương trình áp dụng từ ngày 01/12/2025 đến hết 15/01/2026..."
  ],
  "promotions": [
    "Giảm 40% cho nhóm từ 20 người",
    "Giảm 25% cho nhóm từ 10 người",
    "Tặng bảo hiểm du lịch cao cấp",
    "Miễn phí 1 đêm khách sạn 4 sao"
  ],
  "applicable_tours": [
    "Tour Thái Lan 5N4Đ",
    "Tour Singapore 4N3Đ", 
    "Tour Malaysia 6N5Đ"
  ],
  "terms": [
    "Áp dụng cho đặt tour từ 01/12/2025",
    "Khởi hành từ 16/01/2026 đến 30/04/2026",
    "Thanh toán 100% trước ngày khởi hành 20 ngày"
  ],
  "contact": {
    "phone": "+84 123 456 789",
    "email": "promo@vntoyouasia.com",
    "note": "Số lượng có hạn! Đặt ngay để không bỏ lỡ!"
  }
}
```

### 3. 🎪 Sự Kiện
```json
{
  "id": "hoi-thao-du-lich-2026",
  "title": "Hội Thảo Du Lịch Doanh Nghiệp 2026",
  "category": "Sự Kiện",
  "date": "2025-11-15",
  "author": "VN To You Asia",
  "summary": "Hội thảo chuyên đề về xu hướng du lịch doanh nghiệp năm 2026.",
  "content": [
    "VN To You Asia tổ chức hội thảo chuyên đề về xu hướng du lịch doanh nghiệp...",
    "Sự kiện quy tụ các chuyên gia hàng đầu trong ngành..."
  ],
  "event_details": {
    "date": "Thứ Bảy, 15/11/2025",
    "time": "09:00 - 17:00",
    "venue": "Khách sạn Lotte Hanoi",
    "address": "54 Liễu Giai, Ba Đình, Hà Nội",
    "dress_code": "Business Casual"
  },
  "agenda": [
    "09:00 - 09:30: Đăng ký và coffee",
    "09:30 - 10:30: Xu hướng du lịch 2026",
    "10:30 - 11:00: Giải lao",
    "11:00 - 12:00: Workshop thực hành",
    "14:00 - 16:00: Panel discussion",
    "16:00 - 17:00: Networking"
  ],
  "registration": {
    "deadline": "10/11/2025",
    "fee": "Miễn phí",
    "requirement": "Đại diện doanh nghiệp",
    "contact": "Ms. Lan - 0912.345.678"
  },
  "contact": {
    "phone": "+84 123 456 789",
    "email": "events@vntoyouasia.com",
    "note": "Đăng ký sớm để đảm bảo chỗ ngồi!"
  }
}
```

### 4. 📈 Xu Hướng
```json
{
  "id": "xu-huong-2026",
  "title": "Xu Hướng Du Lịch 2026 - Điểm Đến Mới",
  "category": "Xu Hướng",
  "date": "2025-10-15",
  "author": "VN To You Asia Research Team",
  "summary": "Phân tích xu hướng du lịch và những điểm đến nổi bật năm 2026.",
  "content": [
    "Năm 2026 sẽ chứng kiến sự thay đổi lớn trong ngành du lịch...",
    "Các doanh nghiệp ngày càng chú trọng đến du lịch bền vững..."
  ],
  "trending_destinations": [
    {
      "name": "Bhutan",
      "reason": "Du lịch carbon negative và văn hóa độc đáo",
      "best_time": "Tháng 3-5, 9-11"
    },
    {
      "name": "Albania",
      "reason": "Bờ biển đẹp và chi phí hợp lý",
      "best_time": "Tháng 5-9"
    }
  ],
  "travel_trends_2026": [
    "AI-powered travel planning",
    "Sustainable luxury travel",
    "Multi-generational trips",
    "Wellness & mental health focus"
  ],
  "business_travel_insights": [
    "Tích hợp wellness vào business travel",
    "Sử dụng VR cho virtual site visits",
    "Ưu tiên carbon-neutral transportation"
  ],
  "contact": {
    "phone": "+84 123 456 789",
    "email": "research@vntoyouasia.com",
    "note": "Tư vấn miễn phí về xu hướng du lịch!"
  }
}
```

## 🎨 Danh Mục Tin Tức

### Các danh mục có sẵn:
- **"Tour Mới"** - Giới thiệu các tour du lịch mới
- **"Khuyến Mãi"** - Các chương trình ưu đãi, giảm giá
- **"Sự Kiện"** - Hội thảo, workshop, event của công ty
- **"Xu Hướng"** - Phân tích xu hướng, insights ngành

### Thêm danh mục mới:
Nếu muốn thêm danh mục mới, cần sửa file `news.html` ở phần:
```html
<select class="form-select" id="category">
    <option value="all">Tất Cả</option>
    <option value="Tour Mới">Tour Mới</option>
    <option value="Khuyến Mãi">Khuyến Mãi</option>
    <option value="Sự Kiện">Sự Kiện</option>
    <option value="Xu Hướng">Xu Hướng</option>
    <option value="Danh Mục Mới">Danh Mục Mới</option> <!-- THÊM DÒNG NÀY -->
</select>
```

## ⚠️ Lưu Ý Quan Trọng

### 1. **ID tin tức:**
- Phải unique (không trùng lặp)
- Chỉ dùng chữ thường, số, và dấu gạch ngang
- Ví dụ: `tour-nhat-ban-2026`, `khuyen-mai-tet`

### 2. **Định dạng ngày:**
- Format: `YYYY-MM-DD`
- Ví dụ: `2025-12-25`

### 3. **Đường dẫn ảnh:**
- Luôn bắt đầu bằng `news/data/`
- Ví dụ: `news/data/news-tour-singapore.jpg`

### 4. **File JSON:**
- Phải có đúng syntax
- Sử dụng UTF-8 encoding
- Test JSON trước khi deploy

## 🚀 Triển Khai

### Sau khi tạo xong:
1. ✅ Upload ảnh vào `news/data/`
2. ✅ Tạo file JSON chi tiết
3. ✅ Cập nhật `news.json`
4. ✅ Test trên local trước
5. ✅ Deploy lên server

### Kiểm tra:
- Tin tức hiển thị đúng trên trang `/news.html`
- Click vào "Đọc Thêm" có mở được trang chi tiết
- Filter và sort hoạt động bình thường
- Responsive trên mobile

## 🆘 Xử Lý Lỗi

### Tin tức không hiển thị:
- Kiểm tra syntax JSON
- Đảm bảo đường dẫn ảnh đúng
- Xem console browser để debug

### Ảnh không load:
- Kiểm tra tên file và đường dẫn
- Đảm bảo ảnh có trong thư mục `news/data/`
- Kiểm tra quyền truy cập file

### Link chi tiết bị lỗi:
- Đảm bảo `id` trong `news.json` khớp với tên file JSON
- Kiểm tra `dataFile` path đúng format

---

## 💡 Tips Viết Tin Tức Hay

1. **Tiêu đề:** Ngắn gọn, hấp dẫn, có từ khóa
2. **Summary:** 1-2 câu tóm tắt nội dung chính
3. **Content:** Chia thành đoạn ngắn, dễ đọc
4. **Call-to-action:** Luôn có thông tin liên hệ rõ ràng
5. **SEO-friendly:** Dùng từ khóa tự nhiên trong nội dung

**Chúc bạn tạo tin tức thành công! 🎉**