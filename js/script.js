/* =========================================================
   VITASEA MUI NE
   Main JavaScript
========================================================= */


/* =========================================================
   BOOKING.COM CONFIGURATION

   IMPORTANT:
   Replace this with the actual Booking.com property ID.
========================================================= */

const BOOKING_PROPERTY_ID = "16790790";


/* =========================================================
   LANGUAGE
========================================================= */

const translations = {

  vi: {

    navRooms: "Phòng",
    navCollections: "Khoảnh khắc",
    navContact: "Liên hệ",

    heroEyebrow: "MŨI NÉ · VIỆT NAM",
    heroTitle: "Homestay Mũi Né gần biển, có hồ bơi",
    heroDescription:
      "VitaSea homestay Mũi Né là nơi lý tưởng để thư giãn, bơi lội và tận hưởng không gian yên bình.",

    checkIn: "Nhận phòng",
    checkOut: "Trả phòng",
    guests: "Số khách",
    checkAvailability: "Kiểm tra phòng trống",

    roomsEyebrow: "LƯU TRÚ CÙNG CHÚNG TÔI",
    roomsTitle: "Các loại phòng",
    roomsDescription:
      "Lựa chọn căn phòng phù hợp cho kỳ nghỉ của bạn tại Mũi Né.",

    popular: "Được yêu thích",

    room1Name: "Phòng tiêu chuẩn một giường đôi",
    room1Description:
      "Phòng thoải mái cho hai người với tầm nhìn đẹp ra sân vườn.",

    room2Name: "Phòng Đôi Superior với Bếp nhỏ",
    room2Description:
      "Phòng tiêu chuẩn hai người với bếp nhỏ riêng trong phòng",

    room3Name: "Phòng đôi hai người với ghế sofa",
    room3Description:
      "Phòng đôi với ghế sofa thoải mái cho hai người.",
    room4Name: "Phòng đôi hai người với phòng khách riêng",
    room4Description:
      "Phòng đôi với phòng khách riêng cho hai người.",
    room5Name: "Phòng gia đình với phòng khách riêng",
    room5Description:
      "Phòng gia đình 4 người với phòng khách riêng, phòng ngủ riêng và khu bếp nhỏ.",
    room6Name: "Phòng gia đình với một phần view biển",
    room6Description:
      "Phòng gia đình cho 4 người với tầm nhìn ra một phần biển.",
    room7Name: "Phòng gia đình với phòng khách riêng và view hồ bơi",
    room7Description:
      "Phòng gia đình dành cho 4 người với phòng khách riêng, bếp nhỏ và tầm nhìn hồ bơi.",
    room8Name: "Phòng gia đình lớn với 3 giường đôi và view hồ bơi",
    room8Description:
      "Phòng gia đình lớn với 3 giường đôi ở được 6 người và tầm nhìn hồ bơi.",
    room9Name: "Phòng gia đình lớn với 4 giường đôi và view hồ bơi",
    room9Description:
      "Phòng gia đình lớn với 4 giường đôi ở được 8 người và tầm nhìn hồ bơi.",

    perNight: "/ đêm",

    viewDetails: "Xem chi tiết",
    modalClose: "Đóng",
    modalPrev: "Ảnh trước",
    modalNext: "Ảnh tiếp theo",
    modalBedLabel: "Loại giường",
    modalGuestsLabel: "Sức chứa tối đa",
    modalBed1: "1 giường đôi",
    modalBed2: "2 giường",
    modalBed3: "3 giường",
    modalBed4: "4 giường",
    modalGuests2: "2 người",
    modalGuests4: "4 người",
    modalGuests6: "6 người",
    modalGuests8: "8 người",
    modalAmenities: "Tiện nghi cơ bản",
    facAc: "Điều hòa",
    facHotWater: "Nước nóng",
    facWifi: "Wifi miễn phí",
    facLaundry: "Máy giặt chung",
    facPool: "Hồ bơi chung",
    facKitchenShared: "Bếp chung",
    facKitchenPrivate: "Bếp nhỏ riêng trong phòng",
    modalBook: "Liên hệ đặt phòng ngay",
    modalBookHint: "Mở Messenger của fanpage VitaSea. Nội dung đặt phòng sẽ được sao chép sẵn để bạn dán vào tin nhắn.",
    modalCopied: "Đã sao chép nội dung đặt phòng. Hãy dán (Ctrl+V) vào khung chat Messenger rồi gửi cho chúng tôi nhé!",
    bookingMessage: "Chào VitaSea, mình muốn đặt phòng \"{room}\". Ngày nhận phòng: {checkIn}. Ngày trả phòng: {checkOut}. Bạn kiểm tra giúp mình phòng trống và giá nhé!",
    bookingMessageNoDates: "Chào VitaSea, mình muốn đặt phòng \"{room}\". Bạn kiểm tra giúp mình phòng trống và giá nhé!",
    from: "Giá chỉ từ",
    bookNow: "Facebook",

    amenitiesEyebrow: "TẬN HƯỞNG KỲ NGHỈ",
    amenitiesTitle: "Tiện ích",
    amenitiesDescription: "Những tiện ích cần thiết cho một kỳ nghỉ thoải mái và thư giãn tại Mũi Né.",

    amenityPoolTitle: "Hồ bơi",
    amenityPoolText: "Thư giãn, ngâm mình trong làn nước mát và tận hưởng không gian yên bình bên hồ bơi.",

    amenityKitchenTitle: "Bếp chung",
    amenityKitchenText: "Khu bếp chung tiện lợi để bạn tự chuẩn bị những món ăn yêu thích.",

    amenityBBQTitle: "Khu ăn uống & BBQ",
    amenityBBQText: "Cùng bạn bè và gia đình thưởng thức những bữa BBQ vui vẻ và đáng nhớ.",

    amenityRooftopTitle: "Sân thượng thư giãn",
    amenityRooftopText: "Thư giãn trên sân thượng, tận hưởng làn gió và không khí chill đặc trưng của Mũi Né.",

    servicesEyebrow: "DỊCH VỤ HỖ TRỢ",
    servicesTitle: "Dịch vụ",
    servicesDescription: "VitaSea hỗ trợ bạn chuẩn bị mọi thứ để kỳ nghỉ tại Mũi Né trở nên thuận tiện và trọn vẹn hơn.",

    jeepTourTitle: "Jeep Tour",
    jeepTourText: "Đặt Jeep tour xe ghép hoặc xe riêng theo lịch trình và nhu cầu của bạn.",

    motorbikeTitle: "Thuê xe máy",
    motorbikeText: "Thuê xe tay ga để tự do khám phá Mũi Né và các khu vực xung quanh.",

    busTicketTitle: "Hỗ trợ đặt vé xe khách",
    busTicketText: "Chúng tôi hỗ trợ đặt vé xe khách cho hành trình tiếp theo của bạn.",

    airportTransferTitle: "Xe riêng đưa đón sân bay",
    airportTransferText: "Hỗ trợ đặt xe riêng đưa đón sân bay thuận tiện và thoải mái.",

    speakerRentalTitle: "Thuê loa kẹo kéo",
    speakerRentalText: "Thưởng thức âm nhạc và karaoke cùng bạn bè, gia đình trong buổi tối.",

    contactForPrice: "Liên hệ",

    servicesCta: "Cần hỗ trợ đặt dịch vụ?",
    contactUs: "Liên hệ ngay",

    collectionsEyebrow: "KHOẢNH KHẮC",
    collectionsTitle: "Khoảnh khắc tại VitaSea",
    collectionsText:
      "Khám phá những khoảnh khắc đáng nhớ tại VitaSea Mui Ne Homestay & Pool.",

    viewRooms: "Xem phòng",

    contactEyebrow: "LIÊN HỆ",
    contactTitle: "Liên hệ VitaSea",
    phone: "Điện thoại",
    address: "Địa chỉ",
    addressDetails:
      "149 Nguyễn Đình Chiểu, khu phố Hàm Tiến 1, Phường Mũi Né, tỉnh Lâm Đồng, Việt Nam",

    allRights: "Bảo lưu mọi quyền.",

    pageTitle: "Homestay Mũi Né Giá Rẻ Gần Biển, Có Hồ Bơi | VitaSea",
    viewPhoto: "Xem ảnh",
    galleryAlt: "Ảnh VitaSea Mũi Né Homestay & Pool",

    infoBed1: "🛌🏻 1 giường đôi",
    infoBed2: "🛌🏻 2 giường đôi",
    infoBed3: "🛌🏻 3 giường đôi",
    infoBed4: "🛌🏻 4 giường đôi",
    infoGuests2: "👤 2 khách",
    infoGuests4: "👤 4 khách",
    infoGuests6: "👤 6 khách",
    infoGuests8: "👤 8 khách",
    infoGarden: "🌿 View vườn",
    infoKitchenette: "🍳 Bếp nhỏ",
    infoSofa: "🛋 Ghế sofa",
    infoLiving: "Phòng khách riêng",
    infoPool: "🏊 View hồ bơi",

    alertDates: "Vui lòng chọn ngày nhận phòng và ngày trả phòng.",
    alertOrder: "Ngày trả phòng phải sau ngày nhận phòng.",

    faqEyebrow: "GIẢI ĐÁP",
    faqTitle: "Câu hỏi thường gặp",
    faqDescription: "Những điều khách thường hỏi trước khi đặt phòng tại VitaSea Mũi Né.",

    faq1Q: "VitaSea Mui Ne Homestay & Pool ở đâu?",
    faq1A: "VitaSea nằm tại 149 Nguyễn Đình Chiểu, khu phố Hàm Tiến 1, Phường Mũi Né, tỉnh Lâm Đồng, gần biển Mũi Né.",
    faq2Q: "Homestay có hồ bơi không?",
    faq2A: "Có. VitaSea có hồ bơi để bạn thư giãn và bơi lội, một số phòng gia đình còn có tầm nhìn ra hồ bơi.",
    faq3Q: "Có bếp để tự nấu ăn và khu BBQ không?",
    faq3A: "Có. VitaSea có bếp chung để bạn tự chuẩn bị món ăn, cùng khu ăn uống và BBQ cho những bữa tối vui vẻ với bạn bè và gia đình.",
    faq4Q: "Giá phòng tại VitaSea là bao nhiêu?",
    faq4A: "Giá từ 300,000₫ mỗi đêm cho phòng tiêu chuẩn một giường đôi và từ 1,200,000₫ mỗi đêm cho phòng gia đình lớn 8 người. Hãy chọn ngày ở phần Kiểm tra phòng trống để xem giá và phòng trống chính xác.",
    faq5Q: "Có phòng cho gia đình và nhóm đông không?",
    faq5A: "Có. VitaSea có phòng đôi cho 2 khách, phòng gia đình cho 4 khách, phòng 3 giường đôi cho 6 khách và phòng 4 giường đôi cho 8 khách.",
    faq6Q: "VitaSea hỗ trợ jeep tour và thuê xe máy như thế nào?",
    faq6A: "Bạn có thể đặt Jeep tour xe ghép hoặc xe riêng với giá 200,000 – 600,000₫ tùy tour, và thuê xe tay ga giá 150,000₫ mỗi ngày ngay tại VitaSea.",
    faq7Q: "VitaSea có hỗ trợ đưa đón sân bay và đặt vé xe khách không?",
    faq7A: "Có. VitaSea hỗ trợ đặt xe riêng đưa đón sân bay và đặt vé xe khách cho hành trình tiếp theo của bạn. Hãy liên hệ để được báo giá.",
    faq8Q: "Đặt phòng như thế nào?",
    faq8A: "Chọn ngày và số khách ở đầu trang rồi bấm Kiểm tra phòng trống để đặt trên Booking.com. Bạn cũng có thể liên hệ trực tiếp qua Facebook, Zalo, WhatsApp hoặc gọi +84 378 874 148."

  },


  en: {

    navRooms: "Rooms",
    navCollections: "Collections",
    navContact: "Contact",

    heroEyebrow: "MUI NE · VIETNAM",
    heroTitle: "Mui Ne homestay near the sea, with a pool",
    heroDescription:
      "Vitasea Mui Ne Homestay & Pool: Relax, swim and enjoy the peaceful atmosphere of Mui Ne.",

    checkIn: "Check-in",
    checkOut: "Check-out",
    guests: "Guests",
    checkAvailability: "Check Availability",

    collectionsEyebrow: "COLLECTIONS",
    collectionsTitle: "Moments around VitaSea",
    collectionsText:
      "A glimpse of the peaceful moments, nature and memories created at VitaSea homestay & pool in Mui Ne.",

    roomsEyebrow: "STAY WITH US",
    roomsTitle: "Our Rooms",
    roomsDescription:
      "Choose your perfect room for a relaxing stay in Mui Ne.",

    popular: "Popular",

    room1Name: "Standard Double Room",
    room1Description:
      "Comfortable room for 2 guests with a beautiful view of the garden.",

    room2Name: "Superior Double Room with Kitchenette",
    room2Description:
      "A double room with a private kitchenette for 2 guests.",

    room3Name: "Double Room with Sofa",
    room3Description:
      "A double room with a comfortable sofa for 2 guests.",
    room4Name: "Double room with living room",
    room4Description:
      "Double room with separated living room and bedroom for 2 guests.",
    room5Name: "Family Room with Living Room",
    room5Description:
      "Family room for 4 guests with a separate living room, private bedroom and small kitchen.",
    room6Name: "Family Room with Sea View",
    room6Description:
      "Family room for 4 guests with a part of view to the sea.",
    room7Name: "Family Room with Separate Living Room and Pool View",
    room7Description:
      "Family room for 4 guests with a separate living room, kitchenette and pool view.",
    room8Name: "Large Family Room with 3 Double Beds and Pool View",
    room8Description:
      "Large family room with 3 double beds for 6 guests and a pool view.",
    room9Name: "Large Family Room with 4 Double Beds and Pool View",
    room9Description:
      "Large family room with 4 double beds for 8 guests and a pool view.",

    perNight: "/ night",

    viewDetails: "View details",
    modalClose: "Close",
    modalPrev: "Previous photo",
    modalNext: "Next photo",
    modalBedLabel: "Bed type",
    modalGuestsLabel: "Max capacity",
    modalBed1: "1 double bed",
    modalBed2: "2 beds",
    modalBed3: "3 beds",
    modalBed4: "4 beds",
    modalGuests2: "2 guests",
    modalGuests4: "4 guests",
    modalGuests6: "6 guests",
    modalGuests8: "8 guests",
    modalAmenities: "Basic amenities",
    facAc: "Air conditioning",
    facHotWater: "Hot water",
    facWifi: "Free wifi",
    facLaundry: "Shared washing machine",
    facPool: "Shared swimming pool",
    facKitchenShared: "Shared kitchen",
    facKitchenPrivate: "Private kitchenette in the room",
    modalBook: "Contact us to book now",
    modalBookHint: "Opens the VitaSea fanpage on Messenger. Your booking message is copied so you can paste it into the chat.",
    modalCopied: "Booking message copied. Paste it (Ctrl+V) into the Messenger chat and send it to us!",
    bookingMessage: "Hello VitaSea, I would like to book \"{room}\". Check-in: {checkIn}. Check-out: {checkOut}. Could you check availability and the price for me?",
    bookingMessageNoDates: "Hello VitaSea, I would like to book \"{room}\". Could you check availability and the price for me?",
    from: "From",
    bookNow: "Facebook",

    amenitiesEyebrow: "ENJOY YOUR STAY",
    amenitiesTitle: "Amenities",
    amenitiesDescription: "Everything you need for a relaxing and enjoyable stay in Mui Ne.",

    amenityPoolTitle: "Swimming Pool",
    amenityPoolText: "Take a refreshing swim and relax by the pool in a peaceful atmosphere.",

    amenityKitchenTitle: "Shared Kitchen",
    amenityKitchenText: "A convenient shared kitchen where you can prepare your favorite meals.",

    amenityBBQTitle: "BBQ & Dining Area",
    amenityBBQText: "Enjoy a fun BBQ evening and memorable meals with friends and family.",

    amenityRooftopTitle: "Chill Rooftop",
    amenityRooftopText: "Unwind on our rooftop, enjoy the breeze and soak up the relaxed Mui Ne vibe.",
    servicesEyebrow: "MORE FOR YOUR STAY",
    servicesTitle: "Services",
    servicesDescription: "Let us help you make your stay in Mui Ne easier and more enjoyable.",

    jeepTourTitle: "Jeep Tour",
    jeepTourText: "Join a shared Jeep tour or arrange a private Jeep for your own schedule.",

    motorbikeTitle: "Motorbike Rental",
    motorbikeText: "Rent a scooter and explore Mui Ne and the surrounding area at your own pace.",

    busTicketTitle: "Bus Ticket Assistance",
    busTicketText: "We can help arrange bus tickets for your next destination.",

    airportTransferTitle: "Private Airport Transfer",
    airportTransferText: "Private car transfer service to and from the airport.",

    speakerRentalTitle: "Portable Karaoke Speaker",
    speakerRentalText: "Enjoy music and karaoke with friends and family during your evening.",

    contactForPrice: "Contact us",

    servicesCta: "Need help arranging a service?",
    contactUs: "Contact Us",

    aboutEyebrow: "WELCOME TO VITASEA",
    aboutTitle: "A peaceful place in Mui Ne",
    aboutText:
      "VitaSea Mui Ne Homestay & Pool is a cozy place to relax and enjoy your holiday in Mui Ne. Our property offers comfortable rooms, a swimming pool and a peaceful atmosphere.",

    viewRooms: "View Rooms",

    contactEyebrow: "GET IN TOUCH",
    contactTitle: "Contact VitaSea",
    phone: "Phone",
    address: "Address",
    addressDetails: "149 Nguyen Dinh Chieu, Ham Tien 1, Mui Ne ward, Lam Dong province, Viet Nam",

    allRights: "All rights reserved.",

    pageTitle: "Mui Ne Homestay with Pool near the Beach | VitaSea",
    viewPhoto: "View photo",
    galleryAlt: "VitaSea Mui Ne Homestay & Pool photo",

    infoBed1: "🛌🏻 1 Double Bed",
    infoBed2: "🛌🏻 2 Double Beds",
    infoBed3: "🛌🏻 3 Double Beds",
    infoBed4: "🛌🏻 4 Double Beds",
    infoGuests2: "👤 2 Guests",
    infoGuests4: "👤 4 Guests",
    infoGuests6: "👤 6 Guests",
    infoGuests8: "👤 8 Guests",
    infoGarden: "🌿 Garden View",
    infoKitchenette: "🍳 Kitchenette",
    infoSofa: "🛋 Sofa",
    infoLiving: "Living Room",
    infoPool: "🏊 Pool View",

    alertDates: "Please select your check-in and check-out dates.",
    alertOrder: "Check-out must be after check-in.",

    faqEyebrow: "GOOD TO KNOW",
    faqTitle: "Frequently asked questions",
    faqDescription: "What guests usually ask before booking at VitaSea Mui Ne.",

    faq1Q: "Where is VitaSea Mui Ne Homestay & Pool?",
    faq1A: "VitaSea is at 149 Nguyen Dinh Chieu, Ham Tien 1, Mui Ne ward, Lam Dong province, close to Mui Ne beach.",
    faq2Q: "Is there a swimming pool?",
    faq2A: "Yes. VitaSea has a pool where you can relax and swim, and some family rooms have a pool view.",
    faq3Q: "Can I cook my own meals or have a BBQ?",
    faq3A: "Yes. We have a shared kitchen for preparing your own meals, plus a dining and BBQ area for fun evenings with friends and family.",
    faq4Q: "How much does a room cost?",
    faq4A: "Prices start from 300,000₫ per night for a standard double room and from 1,200,000₫ per night for the large family room for 8 guests. Choose your dates in Check Availability to see exact prices and availability.",
    faq5Q: "Do you have rooms for families and large groups?",
    faq5A: "Yes. We have double rooms for 2 guests, family rooms for 4 guests, a room with 3 double beds for 6 guests and a room with 4 double beds for 8 guests.",
    faq6Q: "Can you arrange jeep tours and motorbike rental?",
    faq6A: "Yes. You can book a shared or private Jeep tour for 200,000 – 600,000₫ depending on the tour, and rent a scooter for 150,000₫ per day right at VitaSea.",
    faq7Q: "Do you help with airport transfers and bus tickets?",
    faq7A: "Yes. We can arrange a private car to and from the airport and book bus tickets for your next destination. Contact us for a quote.",
    faq8Q: "How do I book?",
    faq8A: "Choose your dates and guests at the top of the page and press Check Availability to book on Booking.com. You can also contact us directly on Facebook, Zalo, WhatsApp or call +84 378 874 148."

  }

};

/* =========================================================
   ROOMS

   Các thẻ phòng nằm trực tiếp trong index.html (thẻ <article class="room-card">)
   để Google và các công cụ tìm kiếm đọc được nội dung ngay, không cần chạy JavaScript.
   Muốn đổi giá, ảnh hay thêm phòng: sửa trong index.html.
   Tên phòng, mô tả và các dòng thông tin được dịch bằng các khóa
   (room1Name, room1Description, infoBed1...) trong bảng translations ở trên.
========================================================= */

function currentLanguage() {
  return document.documentElement.lang === "en" ? "en" : "vi";
}

function t(key) {
  return translations[currentLanguage()][key];
}

function getSavedLanguage() {
  try {
    const saved = localStorage.getItem("vitaseaLanguage");
    return translations[saved] ? saved : "vi";
  } catch (error) {
    return "vi";
  }
}

function setLanguage(language) {

  try {
    localStorage.setItem("vitaseaLanguage", language);
  } catch (error) {
    /* Trình duyệt chặn localStorage (ví dụ chế độ ẩn danh): bỏ qua */
  }

  document.documentElement.lang = language;

  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key = element.dataset.i18n;

      if (translations[language][key]) {
        element.textContent =
          translations[language][key];
      }

    });

  /* Dịch thuộc tính alt của ảnh */
  document
    .querySelectorAll("[data-i18n-alt]")
    .forEach(element => {

      const key = element.dataset.i18nAlt;

      if (translations[language][key]) {
        element.alt =
          translations[language][key];
      }

    });

  /* Dịch nhãn aria-label (nút đóng, nút chuyển ảnh...) */
  document
    .querySelectorAll("[data-i18n-label]")
    .forEach(element => {

      const key = element.dataset.i18nLabel;

      if (translations[language][key]) {
        element.setAttribute(
          "aria-label",
          translations[language][key]
        );
      }

    });

  /* Cập nhật popup phòng nếu đang mở */
  if (typeof refreshRoomModal === "function") {
    refreshRoomModal();
  }

  /* Tiêu đề tab trình duyệt */
  if (translations[language].pageTitle) {
    document.title = translations[language].pageTitle;
  }

  document.getElementById("viBtn")
    .classList.toggle("active", language === "vi");

  document.getElementById("enBtn")
    .classList.toggle("active", language === "en");
}

/* ================= CONTACT / BOOKING ================= */

const WEBSITE_LINKS = {
  booking:
    "https://www.facebook.com/vitaseamuinehomestay",

  zalo:
    "https://zalo.me/+84378874148",

  whatsapp:
    "https://wa.me/+84378874148",

  /* Nút "Liên hệ đặt phòng ngay" trong popup phòng: mở Messenger của fanpage */
  messenger:
    "https://m.me/vitaseamuinehomestay"
};

/* Gắn link cho các nút Facebook / Zalo / WhatsApp trong thẻ phòng.
   Chỉ cần đổi link ở WEBSITE_LINKS ở trên là mọi nút đều cập nhật. */
document
  .querySelectorAll("[data-link]")
  .forEach(link => {
    link.href = WEBSITE_LINKS[link.dataset.link];
  });


/* =========================================================
   DATE VALIDATION
========================================================= */

/* Định dạng ngày theo giờ địa phương (YYYY-MM-DD), không dùng toISOString()
   vì nó đổi sang giờ UTC và có thể lệch một ngày ở Việt Nam. */
function formatDate(date) {

  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");

  return y + "-" + m + "-" + d;

}

const today = new Date();

const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const todayString = formatDate(today);
const tomorrowString = formatDate(tomorrow);

const checkInInput = document.getElementById("checkIn");
const checkOutInput = document.getElementById("checkOut");

checkInInput.min = todayString;
checkOutInput.min = tomorrowString;

/* Mặc định: nhận phòng hôm nay, trả phòng ngày mai */
checkInInput.value = todayString;
checkOutInput.value = tomorrowString;

checkInInput.addEventListener("change", function () {

  if (!this.value) {
    return;
  }

  const next = new Date(this.value + "T00:00:00");
  next.setDate(next.getDate() + 1);

  const nextString = formatDate(next);

  checkOutInput.min = nextString;

  /* Nếu ngày trả phòng đang trống hoặc không còn hợp lệ thì đặt lại là ngày hôm sau */
  if (!checkOutInput.value || checkOutInput.value < nextString) {
    checkOutInput.value = nextString;
  }

});

  /* =========================================================
   VITASEA COLLECTIONS LIGHTBOX
========================================================= */


/* IMAGE LIST */

const galleryImages = [

  "images/collections/collection_01.jpg",

  "images/collections/collection_02.jpg",

  "images/collections/collection_03.jpg",

  "images/collections/collection_04.jpg",

  "images/collections/collection_05.jpg",

  "images/collections/collection_06.jpg",

  "images/collections/collection_07.jpg",

  "images/collections/collection_08.jpg",

  "images/collections/collection_09.jpg",

  "images/collections/collection_10.jpg"

];


let currentImage = 0;


/* =========================================================
   OPEN LIGHTBOX
========================================================= */

function openLightbox(index) {

  currentImage = index;

  const lightbox =
    document.getElementById("lightbox");

  lightbox.classList.add("active");

  document.body.style.overflow = "hidden";

  updateLightbox();

}


/* =========================================================
   CLOSE LIGHTBOX
========================================================= */

function closeLightbox() {

  const lightbox =
    document.getElementById("lightbox");

  lightbox.classList.remove("active");

  document.body.style.overflow = "";

}


/* =========================================================
   UPDATE IMAGE
========================================================= */

function updateLightbox() {

  const image =
    document.getElementById("lightboxImage");

  const counter =
    document.getElementById("lightboxCounter");


  image.src =
    galleryImages[currentImage];


  image.alt =
    t("galleryAlt") + " " +
    (currentImage + 1);


  counter.textContent =
    (currentImage + 1) +
    " / " +
    galleryImages.length;

}


/* =========================================================
   NEXT / PREVIOUS
========================================================= */

function changeImage(direction) {

  currentImage += direction;


  if (
    currentImage >=
    galleryImages.length
  ) {

    currentImage = 0;

  }


  if (currentImage < 0) {

    currentImage =
      galleryImages.length - 1;

  }


  updateLightbox();

}


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
  "keydown",
  function(event) {

    const lightbox =
      document.getElementById("lightbox");


    if (
      !lightbox.classList.contains("active")
    ) {

      return;

    }


    if (event.key === "Escape") {

      closeLightbox();

    }


    if (event.key === "ArrowRight") {

      changeImage(1);

    }


    if (event.key === "ArrowLeft") {

      changeImage(-1);

    }

  }
);


/* =========================================================
   CLICK OUTSIDE IMAGE TO CLOSE
========================================================= */

document
  .getElementById("lightbox")
  .addEventListener(
    "click",
    function(event) {

      if (
        event.target === this
      ) {

        closeLightbox();

      }

    }
  );


/* =========================================================
   CHECK AVAILABILITY
========================================================= */

function checkAvailability() {

  const checkIn =
    document.getElementById("checkIn").value;

  const checkOut =
    document.getElementById("checkOut").value;

  const guests =
    document.getElementById("guests").value;


  if (!checkIn || !checkOut) {

    alert(t("alertDates"));

    return;
  }


  if (new Date(checkOut) <= new Date(checkIn)) {

    alert(t("alertOrder"));

    return;
  }


  /*
    Booking.com URL

    Replace YOUR_BOOKING_PROPERTY_ID
    with the actual Booking.com hotel ID.
  */

  const bookingURL =
    "https://www.booking.com/hotel/vn/vitasea-mui-ne-homestay-amp-pool.vi.html"
    + "?checkin=" + encodeURIComponent(checkIn)
    + "&checkout=" + encodeURIComponent(checkOut)
    + "&group_adults=" + encodeURIComponent(guests)
    + "&no_rooms=1";


  window.open(
    bookingURL,
    "_blank"
  );
}


/* =========================================================
   YEAR
========================================================= */

document.getElementById("year")
  .textContent = new Date().getFullYear();


/* =========================================================
   INITIAL LANGUAGE
========================================================= */

/* Mặc định tiếng Việt (khớp với <html lang="vi">, title và description).
   Nếu khách đã chọn ngôn ngữ trước đó thì dùng lại lựa chọn đó. */

/* =========================================================
   POPUP CHI TIẾT PHÒNG

   Bấm vào ảnh/thẻ phòng (thẻ có thuộc tính data-room="roomN") để mở popup.
   Tên, mô tả lấy từ bảng translations (roomNName, roomNDescription).

   >>> THÊM ẢNH CHO TỪNG PHÒNG: thêm đường dẫn ảnh vào mảng "images" bên dưới.
       Ảnh đầu tiên là ảnh bìa. Nếu chỉ có 1 ảnh, popup tự ẩn mũi tên và dải ảnh nhỏ.
   >>> bed    : số giường (1-4)      -> khóa dịch modalBed1..modalBed4
   >>> guests : sức chứa tối đa      -> khóa dịch modalGuests2/4/6/8
   >>> kitchen: "shared" = bếp chung, "private" = bếp nhỏ riêng trong phòng
========================================================= */

const roomDetails = {

  room1: {
    images: [
      "images/Standard%20double%20room/PES08453.jpg"
      , "images/Standard%20double%20room/PES08402.jpg",
      "images/Standard%20double%20room/PES08462.jpg",
      "images/Standard%20double%20room/PES08463.jpg",
      "images/Standard%20double%20room/PES08466.jpg"
    ],
    bed: 1, guests: 2, kitchen: "shared"
  },

  room2: {
    images: [
      "images/Superior%20double%20room%20with%20kitchenette/PES08407.jpg"
    ],
    bed: 1, guests: 2, kitchen: "private"
  },

  room3: {
    images: [
      "images/Double%20room%20with%20sofa/PES08578.jpg"
    ],
    bed: 1, guests: 2, kitchen: "shared"
  },

  room4: {
    images: [
      "images/Double%20room%20with%20living%20room/PES08594.jpg"
    ],
    bed: 1, guests: 2, kitchen: "shared"
  },

  room5: {
    images: [
      "images/Family%20room%20with%20living%20room%20and%20kitchen/PES08468.jpg"
    ],
    bed: 2, guests: 4, kitchen: "private"
  },

  room6: {
    images: [
      "images/Family%20room%20with%20sea%20view/PES08516.jpg"
    ],
    bed: 2, guests: 4, kitchen: "shared"
  },

  room7: {
    images: [
      "images/Family%20house%20with%20pool%20view/PES08648.jpg"
    ],
    bed: 2, guests: 4, kitchen: "private"
  },

  room8: {
    images: [
      "images/Family%20room%203%20beds/family-3-beds.jpg"
    ],
    bed: 3, guests: 6, kitchen: "shared"
  },

  room9: {
    images: [
      "images/Family%20room%204%20beds/PES08725.jpg"
    ],
    bed: 4, guests: 8, kitchen: "shared"
  }

};

/* Danh sách tiện nghi cơ bản: [biểu tượng Font Awesome, khóa dịch] */
function roomAmenities(details) {

  return [
    ["fa-snowflake", "facAc"],
    ["fa-shower", "facHotWater"],
    ["fa-wifi", "facWifi"],
    ["fa-jug-detergent", "facLaundry"],
    ["fa-person-swimming", "facPool"],
    details.kitchen === "private"
      ? ["fa-kitchen-set", "facKitchenPrivate"]
      : ["fa-kitchen-set", "facKitchenShared"]
  ];

}

const roomModal = document.getElementById("roomModal");

let roomModalState = {
  key: null,
  index: 0,
  card: null,
  trigger: null
};

function roomModalIsOpen() {
  return roomModal && roomModal.classList.contains("active");
}

function openRoomModal(card, trigger) {

  const key = card.dataset.room;
  const details = roomDetails[key];

  if (!details || !roomModal) {
    return;
  }

  roomModalState = { key: key, index: 0, card: card, trigger: trigger || null };

  renderRoomModal();

  roomModal.classList.add("active");
  roomModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  document.getElementById("roomModalNote").textContent = "";

  /* Chờ popup hiện ra rồi mới đưa focus vào nút đóng */
  setTimeout(function () {
    if (roomModalIsOpen()) {
      document.getElementById("roomModalClose").focus();
    }
  }, 30);

}

function closeRoomModal() {

  if (!roomModalIsOpen()) {
    return;
  }

  roomModal.classList.remove("active");
  roomModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  const trigger = roomModalState.trigger;
  roomModalState.key = null;

  if (trigger && typeof trigger.focus === "function") {
    trigger.focus();
  }

}

function renderRoomModal() {

  const key = roomModalState.key;
  const details = roomDetails[key];

  if (!details) {
    return;
  }

  const card = roomModalState.card;

  document.getElementById("roomModalTitle").textContent = t(key + "Name");
  document.getElementById("roomModalDesc").textContent = t(key + "Description");

  document.getElementById("roomModalBed").textContent = t("modalBed" + details.bed);
  document.getElementById("roomModalGuests").textContent = t("modalGuests" + details.guests);

  /* Tiện nghi */
  const list = document.getElementById("roomModalAmenities");
  list.innerHTML = "";

  roomAmenities(details).forEach(function (item) {

    const li = document.createElement("li");
    const icon = document.createElement("i");
    const label = document.createElement("span");

    icon.className = "fa-solid " + item[0];
    icon.setAttribute("aria-hidden", "true");
    label.textContent = t(item[1]);

    li.appendChild(icon);
    li.appendChild(label);
    list.appendChild(li);

  });

  /* Giá: lấy từ thẻ phòng nên chỉ cần sửa giá ở một nơi */
  const priceEl = card.querySelector(".price strong");
  const perEl = card.querySelector(".price small");

  document.getElementById("roomModalPrice").textContent =
    priceEl ? priceEl.textContent.replace(/\s+/g, " ").trim() : "";
  document.getElementById("roomModalPer").textContent =
    perEl ? perEl.textContent.trim() : "";

  /* Thư viện ảnh */
  const thumbs = document.getElementById("roomModalThumbs");
  thumbs.innerHTML = "";

  details.images.forEach(function (src, i) {

    const button = document.createElement("button");
    const img = document.createElement("img");

    button.type = "button";
    button.dataset.index = i;
    button.setAttribute("aria-label", t(key + "Name") + " " + (i + 1));

    img.src = src;
    img.alt = "";
    img.loading = "lazy";

    button.appendChild(img);
    thumbs.appendChild(button);

  });

  document
    .getElementById("roomModalGallery")
    .classList.toggle("single", details.images.length < 2);

  showRoomImage(roomModalState.index);

}

/* Gọi từ setLanguage để popup đang mở đổi ngôn ngữ ngay */
function refreshRoomModal() {

  if (roomModalIsOpen() && roomModalState.key) {
    renderRoomModal();
  }

}

function showRoomImage(index) {

  const details = roomDetails[roomModalState.key];
  const total = details.images.length;

  roomModalState.index = (index + total) % total;

  const img = document.getElementById("roomModalImage");

  img.src = details.images[roomModalState.index];
  img.alt = t(roomModalState.key + "Name");

  document.getElementById("roomModalCounter").textContent =
    (roomModalState.index + 1) + " / " + total;

  document
    .querySelectorAll("#roomModalThumbs button")
    .forEach(function (button, i) {
      button.classList.toggle("active", i === roomModalState.index);
      button.setAttribute("aria-current", i === roomModalState.index ? "true" : "false");
    });

}

/* Ngày dạng YYYY-MM-DD -> dd/mm/yyyy */
function formatDisplayDate(value) {

  const parts = value.split("-");

  return parts[2] + "/" + parts[1] + "/" + parts[0];

}

function buildBookingMessage() {

  const room = t(roomModalState.key + "Name");
  const checkIn = document.getElementById("checkIn").value;
  const checkOut = document.getElementById("checkOut").value;

  if (checkIn && checkOut && checkOut > checkIn) {

    return t("bookingMessage")
      .replace("{room}", room)
      .replace("{checkIn}", formatDisplayDate(checkIn))
      .replace("{checkOut}", formatDisplayDate(checkOut));

  }

  return t("bookingMessageNoDates").replace("{room}", room);

}

/* Messenger không cho điền sẵn nội dung qua link, nên sao chép tin nhắn vào
   clipboard rồi mở chat với fanpage để khách chỉ cần dán và gửi. */
function bookRoomViaMessenger() {

  const message = buildBookingMessage();
  const note = document.getElementById("roomModalNote");

  /* window.open phải chạy ngay trong sự kiện bấm để không bị chặn popup */
  window.open(WEBSITE_LINKS.messenger, "_blank", "noopener");

  note.textContent = t("modalCopied");

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(message).catch(function () {});
    }
  } catch (error) {
    /* Không sao chép được: khách vẫn vào được Messenger và tự nhập tin nhắn */
  }

}

if (roomModal) {

  /* Bấm vào thẻ phòng (trừ các nút Facebook/Zalo/WhatsApp) để mở popup */
  const roomsGrid = document.getElementById("roomsGrid");

  roomsGrid.addEventListener("click", function (event) {

    if (event.target.closest(".room-buttons")) {
      return;
    }

    const card = event.target.closest(".room-card[data-room]");

    if (card) {
      openRoomModal(card, card.querySelector(".room-image") || card);
    }

  });

  /* Bàn phím: Enter / Space trên ảnh phòng */
  roomsGrid.addEventListener("keydown", function (event) {

    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const image = event.target.closest(".room-image");

    if (image && event.target === image) {
      event.preventDefault();
      openRoomModal(image.closest(".room-card[data-room]"), image);
    }

  });

  document.getElementById("roomModalClose")
    .addEventListener("click", closeRoomModal);

  roomModal.addEventListener("click", function (event) {
    if (event.target === roomModal) {
      closeRoomModal();
    }
  });

  document.getElementById("roomModalPrev")
    .addEventListener("click", function () {
      showRoomImage(roomModalState.index - 1);
    });

  document.getElementById("roomModalNext")
    .addEventListener("click", function () {
      showRoomImage(roomModalState.index + 1);
    });

  document.getElementById("roomModalThumbs")
    .addEventListener("click", function (event) {

      const button = event.target.closest("button[data-index]");

      if (button) {
        showRoomImage(Number(button.dataset.index));
      }

    });

  document.getElementById("roomModalBook")
    .addEventListener("click", bookRoomViaMessenger);

  /* Vuốt trái / phải trên ảnh (điện thoại) */
  let touchStartX = null;
  const stage = document.querySelector(".room-modal-stage");

  stage.addEventListener("touchstart", function (event) {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  stage.addEventListener("touchend", function (event) {

    if (touchStartX === null) {
      return;
    }

    const diff = event.changedTouches[0].clientX - touchStartX;
    touchStartX = null;

    if (Math.abs(diff) > 50) {
      showRoomImage(roomModalState.index + (diff < 0 ? 1 : -1));
    }

  }, { passive: true });

  /* Phím tắt + giữ focus trong popup */
  document.addEventListener("keydown", function (event) {

    if (!roomModalIsOpen()) {
      return;
    }

    if (event.key === "Escape") {
      closeRoomModal();
      return;
    }

    if (event.key === "ArrowLeft") {
      showRoomImage(roomModalState.index - 1);
      return;
    }

    if (event.key === "ArrowRight") {
      showRoomImage(roomModalState.index + 1);
      return;
    }

    if (event.key === "Tab") {

      const focusable = Array.from(
        roomModal.querySelectorAll("button, a[href], [tabindex]:not([tabindex='-1'])")
      ).filter(function (el) {
        return el.offsetParent !== null && !el.disabled;
      });

      if (!focusable.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }

    }

  });

}

const savedLanguage = getSavedLanguage();

setLanguage(savedLanguage);
