# Guide to Adding New News - VN To You Asia

## 📋 Overview
This guide helps you add new news to the VN To You Asia website easily and consistently with the current interface.

## 📁 Directory Structure
```
news/
├── data/
│   ├── news.json                 # List of all news (UPDATE)
│   ├── [news-id].json           # New news detail file (CREATE NEW)
│   └── [image-name].jpg         # News thumbnail image (CREATE NEW)
└── details/
    └── news-detail.html         # Template (NO NEED TO EDIT)
```

## 🔄 Steps to Add New News

### Step 1: Prepare Image
1. **Image file name:** `news-[news-id].jpg`
   - Example: `news-promotion-tet-2026.jpg`
   
2. **Image size:** 
   - Recommended: 800x400px (2:1 ratio)
   - Format: JPG or PNG
   - Size: < 500KB

3. **Place image in:** `news/data/`

### Step 2: Create News Detail File

#### 📄 Create file: `news/data/[news-id].json`

**Basic template:**
```json
{
  "id": "news-id",
  "title": "News Title",
  "category": "Category",
  "date": "YYYY-MM-DD",
  "author": "Author Name",
  "summary": "Brief summary of the news",
  "content": [
    "First paragraph of the news...",
    "Second paragraph of the news...",
    "Third paragraph of the news..."
  ],
  "contact": {
    "phone": "+84 123 456 789",
    "email": "info@vntoyouasia.com",
    "note": "Contact note"
  }
}
```

### Step 3: Update News List

#### 📄 Edit file: `news/data/news.json`

Add new entry at the beginning of the array:
```json
[
  {
    "id": "new-news-id",
    "title": "New News Title",
    "summary": "New news summary",
    "date": "2025-09-20",
    "category": "Category",
    "image": "news/data/news-new-news-id.jpg",
    "dataFile": "data/new-news-id.json"
  },
  // ... old news
]
```

## 📝 News Types & Templates

### 1. 🎯 New Tours
```json
{
  "id": "tour-singapore-2026",
  "title": "New Singapore Tour - Modern Experience",
  "category": "New Tours",
  "date": "2025-10-01",
  "author": "VN To You Asia",
  "summary": "Explore Singapore with modern and unique experiences.",
  "content": [
    "Singapore is an ideal destination for business trips...",
    "Our new tour includes the hottest spots..."
  ],
  "highlights": [
    "Visit Gardens by the Bay",
    "Experience Marina Bay Sands",
    "Explore Chinatown",
    "Shopping at Orchard Road"
  ],
  "details": {
    "duration": "4 days 3 nights",
    "price": "From 15,000,000 VND",
    "departure": "Hanoi / Ho Chi Minh City",
    "season": "All year round"
  },
  "contact": {
    "phone": "+84 123 456 789",
    "email": "info@vntoyouasia.com",
    "note": "Contact us immediately for detailed consultation!"
  }
}
```

### 2. 🎁 Promotions
```json
{
  "id": "khuyen-mai-tet-2026",
  "title": "Tet 2026 Promotion - Massive Discounts",
  "category": "Promotions",
  "date": "2025-12-01",
  "author": "VN To You Asia",
  "summary": "Special promotion program for Tet Lunar New Year 2026.",
  "content": [
    "For Tet Lunar New Year 2026, VN To You Asia launches a big promotion...",
    "Program applies from 01/12/2025 to 15/01/2026..."
  ],
  "promotions": [
    "40% off for groups of 20+ people",
    "25% off for groups of 10+ people",
    "Free premium travel insurance",
    "Free 1 night at 4-star hotel"
  ],
  "applicable_tours": [
    "Thailand Tour 5N4D",
    "Singapore Tour 4N3D", 
    "Malaysia Tour 6N5D"
  ],
  "terms": [
    "Applies for tour bookings from 01/12/2025",
    "Departure from 16/01/2026 to 30/04/2026",
    "100% payment 20 days before departure"
  ],
  "contact": {
    "phone": "+84 123 456 789",
    "email": "promo@vntoyouasia.com",
    "note": "Limited quantity! Book now to not miss out!"
  }
}
```

### 3. 🎪 Events
```json
{
  "id": "hoi-thao-du-lich-2026",
  "title": "Business Travel Conference 2026",
  "category": "Events",
  "date": "2025-11-15",
  "author": "VN To You Asia",
  "summary": "Specialized conference on business travel trends in 2026.",
  "content": [
    "VN To You Asia organizes a specialized conference on business travel trends...",
    "The event brings together leading experts in the industry..."
  ],
  "event_details": {
    "date": "Saturday, 15/11/2025",
    "time": "09:00 - 17:00",
    "venue": "Lotte Hanoi Hotel",
    "address": "54 Lieu Giai, Ba Dinh, Hanoi",
    "dress_code": "Business Casual"
  },
  "agenda": [
    "09:00 - 09:30: Registration and coffee",
    "09:30 - 10:30: Travel trends 2026",
    "10:30 - 11:00: Break",
    "11:00 - 12:00: Practical workshop",
    "14:00 - 16:00: Panel discussion",
    "16:00 - 17:00: Networking"
  ],
  "registration": {
    "deadline": "10/11/2025",
    "fee": "Free",
    "requirement": "Business representative",
    "contact": "Ms. Lan - 0912.345.678"
  },
  "contact": {
    "phone": "+84 123 456 789",
    "email": "events@vntoyouasia.com",
    "note": "Register early to secure your seat!"
  }
}
```

### 4. 📈 Trends
```json
{
  "id": "xu-huong-2026",
  "title": "Travel Trends 2026 - New Destinations",
  "category": "Trends",
  "date": "2025-10-15",
  "author": "VN To You Asia Research Team",
  "summary": "Analysis of travel trends and prominent destinations in 2026.",
  "content": [
    "2026 will see major changes in the tourism industry...",
    "Businesses are increasingly focusing on sustainable tourism..."
  ],
  "trending_destinations": [
    {
      "name": "Bhutan",
      "reason": "Carbon negative tourism and unique culture",
      "best_time": "March-May, September-November"
    },
    {
      "name": "Albania",
      "reason": "Beautiful coastline and reasonable costs",
      "best_time": "May-September"
    }
  ],
  "travel_trends_2026": [
    "AI-powered travel planning",
    "Sustainable luxury travel",
    "Multi-generational trips",
    "Wellness & mental health focus"
  ],
  "business_travel_insights": [
    "Integrating wellness into business travel",
    "Using VR for virtual site visits",
    "Prioritizing carbon-neutral transportation"
  ],
  "contact": {
    "phone": "+84 123 456 789",
    "email": "research@vntoyouasia.com",
    "note": "Free consultation on travel trends!"
  }
}
```

## 🎨 News Categories

### Available categories:
- **"New Tours"** - Introducing new travel tours
- **"Promotions"** - Promotion programs, discounts
- **"Events"** - Company workshops, seminars, events
- **"Trends"** - Trend analysis, industry insights

### Adding new category:
If you want to add a new category, need to edit `news.html` in the section:
```html
<select class="form-select" id="category">
    <option value="all">All</option>
    <option value="New Tours">New Tours</option>
    <option value="Promotions">Promotions</option>
    <option value="Events">Events</option>
    <option value="Trends">Trends</option>
    <option value="New Category">New Category</option> <!-- ADD THIS LINE -->
</select>
```

## ⚠️ Important Notes

### 1. **News ID:**
- Must be unique (no duplicates)
- Only use lowercase letters, numbers, and hyphens
- Example: `tour-japan-2026`, `promotion-tet`

### 2. **Date format:**
- Format: `YYYY-MM-DD`
- Example: `2025-12-25`

### 3. **Image path:**
- Always start with `news/data/`
- Example: `news/data/news-tour-singapore.jpg`

### 4. **JSON file:**
- Must have correct syntax
- Use UTF-8 encoding
- Test JSON before deploying

## 🚀 Deployment

### After completion:
1. ✅ Upload image to `news/data/`
2. ✅ Create detailed JSON file
3. ✅ Update `news.json`
4. ✅ Test locally first
5. ✅ Deploy to server

### Check:
- News displays correctly on `/news.html`
- Click "Read More" opens detail page
- Filter and sort work normally
- Responsive on mobile

## 🆘 Error Handling

### News not displaying:
- Check JSON syntax
- Ensure image path is correct
- Check browser console for debugging

### Image not loading:
- Check file name and path
- Ensure image is in `news/data/` folder
- Check file access permissions

### Detail link error:
- Ensure `id` in `news.json` matches JSON file name
- Check `dataFile` path format is correct

---

## 💡 Tips for Writing Good News

1. **Title:** Concise, attractive, with keywords
2. **Summary:** 1-2 sentences summarizing main content
3. **Content:** Divide into short paragraphs, easy to read
4. **Call-to-action:** Always have clear contact information
5. **SEO-friendly:** Use keywords naturally in content

**Wish you success in creating news! 🎉**