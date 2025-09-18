# Guide to Adding New Tour - Dynamic System (Updated 2025)

## 🚀 Overview
Website has been upgraded to **dynamic loading system** with JavaScript. Now adding tours only takes 2 simple steps!

## ✅ How to Add New Tour (Only 2 Steps!)

### Step 1: Add Tour to List
**File:** `tours/data/tours.json`  
Add new object to current array:

```json
{
  "id": "new-tour",
  "title": "Tour ABC 3 days 2 nights: Tour name",
  "region": "Northern Vietnam",
  "days": 3,
  "description": "Brief description of the tour...",
  "image": "tours/data/new-tour.jpg",
  "dataFile": "data/new-tour.json"
}
```

**Notes:**
- `id`: Unique, only use lowercase letters, numbers, hyphens
- `region`: Must be "Northern Vietnam", "Central Vietnam", or "Southern Vietnam"
- `days`: Integer (filter will use this)
- `image`: Path from root to representative image
- `dataFile`: Path to detailed JSON file

### Step 2: Create Detail File
**File:** `tours/data/new-tour.json`  
Create new file with format:

```json
{
  "id": 4,
  "title": "Tour ABC 3 days 2 nights: Detailed tour name",
  "region": "Northern Vietnam",
  "days": 3,
  "description": "Detailed description of the tour, destinations, experiences...",
  "image": "tours/data/new-tour.jpg",
  "itinerary": [
    "Day 1: Departure - Visit point A, B. Overnight at hotel.",
    "Day 2: Explore point C, D. Experience activity X, Y.",
    "Day 3: Visit point E. End of trip."
  ],
  "includes": [
    "Air-conditioned tourist vehicle",
    "Professional guide",
    "Entrance tickets to sites",
    "Meals as per program",
    "3-4 star hotel"
  ],
  "excludes": [
    "Round-trip flight tickets",
    "Personal expenses",
    "Beverages outside meals",
    "Travel insurance",
    "Guide tips"
  ],
  "terms": [
    "Book tour 7 days in advance for best price",
    "Cancel tour 3 days in advance with no fee",
    "Children under 2 years old free",
    "Bring valid ID/Passport",
    "Itinerary may change depending on weather"
  ]
}
```

### Step 3: Add Image (Optional)
- **File name**: Same as tour ID + extension (e.g.: `new-tour.jpg`)
- **Path**: `tours/data/new-tour.jpg`
- **Size**: 800x450px (16:9 ratio) recommended
- **Format**: JPG (real photo) or PNG (transparent background)

**🎯 Image Naming Rules:**
- ✅ Lowercase, no accents, use hyphens: `sapa.jpg`, `ha-long.jpg`
- ✅ Same as tour ID for easy identification
- ❌ Avoid spaces: `nha trang.jpg`
- ❌ Avoid Vietnamese accents: `da-nang.jpg`

## 🎉 Done!
New tour will **automatically appear** in:
- ✅ Tour list (`tour.html`) 
- ✅ Filter by region and days
- ✅ Auto detail link: `tours/details/tour-detail.html?id=new-tour`
- ✅ Beautiful responsive layout

## 🔗 Complete Structure
```
tours/
├── data/
│   ├── tours.json          ← STEP 1: Add tour here
│   ├── new-tour.json       ← STEP 2: Create detail file
│   ├── new-tour.jpg        ← STEP 3: Representative image
│   ├── tour-danang.json    ← Existing tour
│   └── nhatrang.json       ← Existing tour
└── details/
    └── tour-detail.html    ← Don't touch this
```

## 🛠️ Debug If Error Occurs
1. **Open DevTools (F12) → Console**
2. **Refresh `tour.html` page**
3. **Check logs:**
   - `Tours loaded: Array(4)` ← Number of tours increased
   - If error: Check JSON syntax at jsonlint.com

## 📝 Important Tips
- **UTF-8 Encoding**: JSON files must be saved as UTF-8 to display Vietnamese
- **Unique ID**: Each tour must have different ID
- **Consistent Data**: Ensure `region` is spelled correctly
- **Exact Path**: Image path from website root
- **Image Name**: Name same as tour ID (e.g.: `sapa.jpg` for tour ID `sapa`)
- **File Size**: Compress images under 1MB for fast loading

## 🗂️ Real Example - Sapa Tour
**File 1:** `tours/data/tours.json` (add to array)
```json
{
  "id": "sapa",
  "title": "Sapa Tour 2 days 1 night: Terraced fields",
  "region": "Northern Vietnam", 
  "days": 2,
  "description": "Explore the beauty of Sapa terraced fields, trekking and experiencing ethnic culture.",
  "image": "tours/data/sapa.jpg",
  "dataFile": "data/sapa.json"
}
```

**File 2:** `tours/data/sapa.json` (create new)
```json
{
  "id": 4,
  "title": "Sapa Tour 2 days 1 night: Terraced fields",
  "region": "Northern Vietnam",
  "days": 2,
  "description": "Explore Sapa with golden terraced fields, trekking through villages and experiencing H'Mong, Tay culture.",
  "itinerary": [
    "Day 1: Departure from Hanoi - Sapa. Visit Sapa town. Trekking Cat Cat village.",
    "Day 2: Trekking Muong Hoa terraced fields. Visit Ta Van village. Return to Hanoi."
  ],
  "includes": [
    "Sleeper bus Hanoi - Sapa - Hanoi",
    "Local guide",
    "1 night homestay",
    "Meals as per program"
  ],
  "excludes": [
    "Personal expenses",
    "Beverages outside meals",
    "Personal insurance"
  ],
  "terms": [
    "Need trekking shoes and warm clothes",
    "Cancel tour 2 days in advance",
    "Suitable for 16 years old and above"
  ]
}
```

➡️ **Result**: Sapa tour will immediately appear in "Northern Vietnam" and "1-3 Days" filter!