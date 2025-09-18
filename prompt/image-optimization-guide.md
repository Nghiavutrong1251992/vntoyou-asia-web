# 🚀 Hướng Dẫn Tối Ưu Hóa Ảnh Cho Vercel

## 📸 Tại Sao Cần Tối Ưu Hóa Ảnh?

- **Tăng tốc độ load website** (quan trọng cho SEO)
- **Tiết kiệm bandwidth** (100GB/tháng của Vercel)
- **Cải thiện trải nghiệm người dùng**
- **Tăng điểm Google PageSpeed**

## 🛠️ Công Cụ Tối Ưu Hóa Ảnh

### 1. **TinyPNG** (Khuyến Nghị)
- Website: https://tinypng.com/
- Nén PNG/JPG/WebP
- Giảm 50-80% kích thước file
- Miễn phí 500 ảnh/tháng

### 2. **ImageOptim** (Mac)
- Download: https://imageoptim.com/
- Tối ưu hóa lossless
- Hỗ trợ nhiều format

### 3. **Online Tools**
- **CompressJPEG**: https://compressjpeg.com/
- **Optimizilla**: https://optimizilla.com/
- **Squoosh**: https://squoosh.app/

## 📋 Checklist Tối Ưu Hóa

### ✅ Trước Khi Upload:
- [ ] Resize ảnh về kích thước phù hợp (max 1920px width)
- [ ] Nén ảnh bằng TinyPNG/ImageOptim
- [ ] Chuyển sang WebP nếu có thể
- [ ] Đặt tên file có ý nghĩa (tour-danang.jpg)

### ✅ Trong Code HTML:
- [ ] Sử dụng `loading="lazy"` cho ảnh không quan trọng
- [ ] Thêm `alt` text mô tả ảnh
- [ ] Sử dụng `srcset` cho responsive images

### ✅ Trong CSS:
- [ ] Sử dụng CSS sprites nếu có nhiều icon nhỏ
- [ ] Lazy load background images

## 🎯 Mục Tiêu Tối Ưu Hóa

| Loại Ảnh | Kích Thước Tối Đa | Format Khuyến Nghị |
|----------|-------------------|-------------------|
| Logo | 100KB | PNG/WebP |
| Banner/Slide | 500KB | JPG/WebP |
| Tour Images | 300KB | JPG/WebP |
| Icons | 50KB | SVG/PNG |

## 📊 Kết Quả Mong Đợi

- **Thời gian load**: Giảm 2-3 giây
- **Bandwidth**: Tiết kiệm 60-80%
- **SEO Score**: Tăng 20-30 điểm
- **User Experience**: Cải thiện đáng kể

## 🔧 Vercel Image Optimization

Vercel tự động:
- ✅ Serve ảnh qua CDN
- ✅ Thêm HTTP/2
- ✅ Cache thông minh
- ✅ WebP conversion (tự động)

## 📝 Lưu Ý Quan Trọng

1. **Backup ảnh gốc** trước khi nén
2. **Test trên mobile** sau khi tối ưu
3. **Monitor performance** bằng Google PageSpeed
4. **Cập nhật alt text** cho accessibility

## 🚀 Next Steps

1. Tối ưu hóa tất cả ảnh hiện tại
2. Thêm lazy loading cho carousel
3. Implement responsive images
4. Monitor performance improvements