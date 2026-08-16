/* =========================================================
   VITASEA MUI NE
   Main JavaScript
========================================================= */


/* =========================================================
   BOOKING.COM CONFIGURATION

   IMPORTANT:
   Replace this with the actual Booking.com property ID.
========================================================= */

const BOOKING_PROPERTY_ID = "YOUR_BOOKING_PROPERTY_ID";


/* =========================================================
   LANGUAGE
========================================================= */

const translations = {

  vi: {

    navRooms: "Phòng",
    navCollections: "Khoảnh khắc",
    navContact: "Liên hệ",

    heroEyebrow: "MŨI NÉ · VIỆT NAM",
    heroTitle: "Kỳ nghỉ bình yên gần biển với hồ bơi",
    heroDescription:
      "Thư giãn, bơi lội và tận hưởng không gian yên bình tại Mũi Né.",

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
      "Phòng gia đình cho 4 người với tầm nhìn một đẹp một phần ra biển.",
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
      "149 Nguyễn Đình Chiểu, khu phố Hàm Tiến 1, Phường Mũi Né,tỉnh Lâm Đồng, Việt Nam",

    visitors: "lượt truy cập",
    allRights: "Bảo lưu mọi quyền."

  },


  en: {

    navRooms: "Rooms",
    navCollections: "Collections",
    navContact: "Contact",

    heroEyebrow: "MUI NE · VIETNAM",
    heroTitle: "Your peaceful stay near the sea with pool",
    heroDescription:
      "Relax, swim and enjoy the peaceful atmosphere of Mui Ne.",

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
    addressDetails: "149 Nguyen Dinh Chieu, Ham Tien 1, Mui Ne ward,Lam Dong province, Viet Nam",

    visitors: "visitors",
    allRights: "All rights reserved."

  }

};

/* ================= ROOMS DATA ================= */

const rooms = [
  {
    id: "standard",
    nameKey: "room1Name",
    name: "Standard Double Room",

    image: "images/Standard double room/PES08440.jpg",
    alt: "Standard Double Room",

    info: [
      "🛌🏻 1 Double Bed",
      "👤 2 Guests",
      "🌿 Garden View"
    ],
    perNight:"perNight",
    descriptionKey: "room1Description",
    description:
      "Comfortable room with a beautiful view of the garden.",

    price: "400,000₫"
  },

  {
    id: "superior",
    nameKey: "room2Name",
    name: "Superior Double Room with Kitchenette",

    image:
      "images/Superior double room with kitchenette/PES08393.jpg",

    alt: "Superior Double Room with Kitchenette",

    info: [
      "🛌🏻 1 Double Bed",
      "👤 2 Guests",
      "🍳 Kitchenette"
    ],
    perNight:"perNight",
    descriptionKey: "room2Description",
    description:
      "A double room with a private kitchenette for 2 people.",

    price: "500,000₫"
  },

  {
    id: "double-sofa",
    nameKey: "room3Name",
    name: "Double Room with Sofa",

    image: "images/Double room with sofa/PES08584.jpg",

    alt: "Double Room with Sofa",

    info: [
      "🛌🏻 1 Double Bed",
      "👤 2 Guests",
      "🛋 Sofa"
    ],
    perNight:"perNight",
    descriptionKey: "room3Description",
    description:
      "A double room with a comfortable sofa for 2 guests.",

    price: "600,000₫"
  },
  {
    id: "double-living-room",
    nameKey: "room4Name",
    name: "Double Living Room",

    image: "images\\Double room with living room\\PES08593.jpg",

    alt: "Double Living Room",

    info: [
      "🛌🏻 1 Double Bed",
      "👤 2 Guests",
      "Living Room"
    ],
    perNight:"perNight",
    descriptionKey: "room4Description",
    description:
      "A double room with separated living room and bedroom for 2 guests.",

    price: "600,000₫"
  } ,
  {
    id: "family-room-living-room",
    nameKey: "room5Name",
    name: "Family Room with Living Room",

    image: "images\\Family room with living room and kitchen\\PES08467.jpg",

    alt: "Family Room with Living Room and kitchenette",

    info: [
      "🛌🏻 2 Double Bed",
      "👤 4 Guests",
      "Living Room"
    ],
    perNight:"perNight",
    descriptionKey: "room5Description",
    description:
      "Family room with separated living room and bedroom for 4 guests.",

    price: "700,000₫"
  },
  {
    id: "family-room-seaview",
    nameKey: "room6Name",
    name: "Family Room with a part of Sea View",

    image: "images\\Family room with sea view\\PES08514.jpg",

    alt: "Family Room with sofa and a part of Sea View",

    info: [
      "🛌🏻 2 Double Bed",
      "👤 4 Guests",
      "Living Room"
    ],
    perNight:"perNight",
    descriptionKey: "room6Description",
    description:
      "Family room with separated living room and bedroom for 4 guests.",

    price: "900,000₫"
  }
  ,
  {
    id: "family-house-pool-view",
    nameKey: "room7Name",
    name: "Family house with pool view",

    image: "images\\Family house with pool view\\PES08644.jpg",

    alt: "Family house for 4 guests with pool view",

    info: [
      "🛌🏻 2 Double Bed",
      "👤 4 Guests",
      "🏊 Pool View"
    ],
    perNight:"perNight",
    descriptionKey: "room7Description",
    description:
      "Family house with separated living room and bedroom for 4 guests and pool view.",

    price: "1,000,000₫"
  },
  {
    id: "family-room-3",
    nameKey: "room8Name",
    name: "Family room with 3 double beds",

    image: "images\\Family room 3 beds\\family-3-beds.jpg",

    alt: "Family room with 3 double beds",

    info: [
      "🛌🏻 3 Double Bed",
      "👤 6 Guests",
      "🏊 Pool View"
    ],
    perNight:"perNight",
    descriptionKey: "room8Description",
    description:
      "Family room with three double beds for up to six guests.",

    price: "1,100,000₫"
  }
  ,
  {
    id: "family-4-beds",
    nameKey: "room9Name",
    name: "Family room with 4 double beds",

    image: "images\\Family room 4 beds\\PES08718.jpg",

    alt: "Family room with 4 double beds",

    info: [
      "🛌🏻 4 Double Bed",
      "👤 8 Guests",
      "🏊 Pool View"
    ],
    perNight:"perNight",
    descriptionKey: "room9Description",
    description:
      "Family room with four double beds for up to eight guests.",

    price: "1,400,000₫"
  }
];

/* ================= RENDER ROOMS ================= */

function renderRooms() {

  const container = document.getElementById("roomsGrid");

  if (!container) return;

  container.innerHTML = rooms.map(room => `

    <article class="room-card">

      <div class="room-image">

        <img
          src="${room.image}"
          alt="${room.alt}"
          loading="lazy"
        >

      </div>


      <div class="room-content">

        <h3 data-i18n="${room.nameKey}">
          ${room.name}
        </h3>


        <div class="room-info">

          ${room.info.map(item => `
            <span>${item}</span>
          `).join("")}

        </div>


        <p data-i18n="${room.descriptionKey}">
          ${room.description}
        </p>


        <div class="room-bottom">

          <div class="price">

            <strong>
              From ${room.price}
            </strong>

            <small data-i18n="${room.perNight}">
              ${translations[savedLanguage][room.perNight]}
            </small>

          </div>


          <div class="room-buttons">

            <a
              class="book-btn"
              href="${WEBSITE_LINKS.booking}"
              target="_blank"
              rel="noopener noreferrer"
              data-i18n="bookNow"
            >
              Facebook
            </a>

            <a
              class="zalo-btn"
              href="${WEBSITE_LINKS.zalo}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zalo
            </a>
            <a
              class="whatsapp-btn"
              href="${WEBSITE_LINKS.whatsapp}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>

          </div>

        </div>

      </div>

    </article>

  `).join("");
}


/* Render khi trang load */

document.addEventListener("DOMContentLoaded", renderRooms);

function setLanguage(language) {

  localStorage.setItem("vitaseaLanguage", language);

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


/* =========================================================
   DATE VALIDATION
========================================================= */

const today = new Date();

const todayString =
  today.toISOString().split("T")[0];

document.getElementById("checkIn").min =
  todayString;

document.getElementById("checkOut").min =
  todayString;


document.getElementById("checkIn")
  .addEventListener("change", function () {

    const checkInDate =
      new Date(this.value);

    checkInDate.setDate(
      checkInDate.getDate() + 1
    );

    document.getElementById("checkOut").min =
      checkInDate.toISOString().split("T")[0];

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
    "VitaSea collection photo " +
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

    alert(
      "Please select your check-in and check-out dates."
    );

    return;
  }


  if (new Date(checkOut) <= new Date(checkIn)) {

    alert(
      "Check-out must be after check-in."
    );

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


/* =====================================================
   VITASEA VISITOR COUNTER
===================================================== */

async function updateVisitorCount() {

  const visitorElement =
    document.getElementById("visitorCount");

  if (!visitorElement) return;


  try {

    const counter = new Counter({
      workspace: "vitasea-muine"
    });


    // Check last visit
    const lastVisit =
      localStorage.getItem(
        "vitasea_last_visit"
      );


    const now = Date.now();

    const ONE_DAY =
      24 * 60 * 60 * 1000;


    const isNewVisitor =
      !lastVisit ||
      now - Number(lastVisit) > ONE_DAY;


    // Count visitor
    if (isNewVisitor) {

      await counter.up(
        "website-visitors"
      );


      localStorage.setItem(
        "vitasea_last_visit",
        now.toString()
      );

    }


    // Get current number
    const result =
      await counter.get(
        "website-visitors"
      );


    visitorElement.textContent =
      Number(
        result.value || 0
      ).toLocaleString();


  } catch (error) {

    console.error(
      "Visitor counter error:",
      error
    );

  }

}


document.addEventListener(
  "DOMContentLoaded",
  updateVisitorCount
);


/* =========================================================
   YEAR
========================================================= */

document.getElementById("year")
  .textContent = new Date().getFullYear();


/* =========================================================
   INITIAL LANGUAGE
========================================================= */

const savedLanguage =
  localStorage.getItem("vitaseaLanguage") || "en";

setLanguage(savedLanguage);


/* =========================================================
   START VISITOR COUNTER
========================================================= */

updateVisitorCounter();