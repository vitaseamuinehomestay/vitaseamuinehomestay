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
    "https://wa.me/+84378874148"
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
// Thay đổi form check in date thành ngày hôm nay, check out date thành ngày mai, và không cho chọn ngày trong quá khứ.
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return year + "-" + month + "-" + day;
}

const today = new Date();

const tomorrow = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 1
);

const todayString = formatDate(today);
const tomorrowString = formatDate(tomorrow);

const checkInInput = document.getElementById("checkIn");
const checkOutInput = document.getElementById("checkOut");

/* Không cho chọn ngày trong quá khứ */
checkInInput.min = todayString;
checkOutInput.min = tomorrowString;

/* Mặc định: nhận phòng hôm nay, trả phòng ngày mai */
checkInInput.value = todayString;
checkOutInput.value = tomorrowString;

/* Khi đổi ngày nhận phòng: ngày trả phòng tối thiểu là hôm sau,
   và tự đẩy ngày trả phòng lên nếu nó đang nhỏ hơn hoặc bằng ngày nhận phòng */
checkInInput.addEventListener("change", function () {

  if (!this.value) return;

  const parts = this.value.split("-").map(Number);

  const nextDay = new Date(parts[0], parts[1] - 1, parts[2] + 1);

  const nextDayString = formatDate(nextDay);

  checkOutInput.min = nextDayString;

  if (!checkOutInput.value || checkOutInput.value < nextDayString) {
    checkOutInput.value = nextDayString;
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
const savedLanguage = getSavedLanguage();

setLanguage(savedLanguage);
