const scrollTargets = {
  "#about-link": { target: "#about", duration: 30 },
  "#featured-link": { target: "#featured", duration: 30 },
  "#contact-link": { target: "#contact", duration: 30 },
  "#promo-link": { target: "#promo-btn", duration: 90 },
  "#promo-btn": { target: "#promotion", duration: 90 },
  "#back-to-services": { target: "#featured", duration: 30 },
};

for (const [selector, { target, duration }] of Object.entries(scrollTargets)) {
  document.querySelector(selector).addEventListener("click", function () {
    scrollToSection(target, duration);
  });
}

function scrollToSection(sectionId, distance) {
  const section = document.querySelector(sectionId);
  if (section) {
    let sectionPosition =
      section.getBoundingClientRect().top + window.pageYOffset - distance;
    let space = sectionPosition - distance;
    window.scrollTo({
      top: space,
      behavior: "smooth",
    });
  }
}

let menuToggle = document.querySelector(".menu-toggle");
let horizontalMenu = document.querySelector(".horizontal-menu");

menuToggle.onclick = function () {
  horizontalMenu.classList.toggle("active");
};

const coll = document.querySelector("#collapsible");
const list_wrapper = document.querySelector("#open");
const list = document.querySelector(".collapse-content");

coll.addEventListener("click", function () {
  if (list_wrapper.classList.contains("open")) {
    list_wrapper.classList.remove("open");
    list_wrapper.style.height = "0px";
    setTimeout(function () {
      list.style.opacity = 0;
    }, 300);
  } else {
    list.style.opacity = 1;
    list_wrapper.classList.add("open");
    list_wrapper.style.height = list.offsetHeight + "px";
  }
});

//to top button

let topButton = document.getElementById("topBtn");

topButton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

//SLIDERS

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    810: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1250: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1500: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// extended massages info
const massages = [
  {
    type: "Masaż głowy",
    name: "Masaż intensywnie liftingujący BelViso",
    description:
      "BelViso to nieinwazyjna alternatywa dla zabiegów medycyny estetycznej. Jest to niezwykle przyjemny i intensywny masaż, dzięki któremu uzyskujemy świetny efekt liftingu i rozświetlenia. Z czasem prowadzi do zniwelowania napięć mięśniowych powodujących zmarszczki mimiczne, zmniejszenia efektów starzenia, odzyskania efektu młodej twarzy, szybszej regeneracji, naturalnego blasku – oczyszczenia skóry, usunięcia toksyn, zanieczyszczeń i martwych komórek skóry, zniwelowania nadmiernego napięcia w okolicach szyi, klatki piersiowej i owalu twarzy.",
    duration: 75,
    price: 200,
    image: "./images/facemassage.jpg",
  },
  {
    type: "Masaż głowy",
    name: "Masaż transbukalny",
    description:
      "Masaż transbukalny – nowe spojrzenie na modelowanie i odmładzanie twarzy w sposób naturalny. Żaden inny masaż powierzchowny nie jest w stanie pracować tak głęboko z tkankami i mięśniami, zapewniając całkowite uwolnienie od napięć. Już po pierwszym zastosowaniu masażu transbukkalnego widoczna jest estetyczna poprawa całego owalu twarzy, lifting środkowej i dolnej części twarzy oraz spłycanie zmarszczek wokół ust i bruzd nosowo-wargowych. Podczas stosowania w celach terapeutycznych masaż ten doskonale poprawia asymetrię twarzy – na przykład u osób po przebytych wylewach lub gdy pojawia się jednostronny hipertonus, a druga strona twarzy jest rozluźniona. Idealnie sprawdza się w przypadku osób cierpiących na bruksizm oraz noszących aparaty ortodontyczne. Znajduje również zastosowanie w przypadku przewlekłej limfostazy (obrzęku limfatycznego), ponieważ powoduje drenaż skutecznie likwidujący powstałe limfatyczne zastoiny.",
    duration: 75,
    price: 200,
    image: "./images/head-massage.jpg",
  },
  {
    type: "Masaż głowy",
    name: "Kinesiotaping estetyczny",
    description:
      "To technika terapeutyczna wykorzystująca specjalne elastyczne taśmy samoprzylepne. Są one stosowane pomiędzy zabiegami w celu przyspieszenia procesu zdrowienia. Taping estetyczny odnosi się do aplikowania plastrów kinesiotapingu w okolicy twarzy, aby tym samym uzyskać efekt odmłodzonej, napiętej i odżywionej skóry.",
    duration: 60,
    price: 60,
    image: "./images/kinesiotaping.jpeg",
  },
  {
    type: "Masaż ciała",
    name: "Masaż Lomi Lomi Nui",
    description:
      "Lomi Lomi Nui to ceremonia, to coś więcej niż relaks i przyjemność. To czułość w najczystszej postaci. Lomi Lomi Nui to hawajski masaż, który w naturalny i łagodny sposób wpływa na psychikę pacjenta. Podczas masażu zostaje uwolnione nagromadzone w mięśniach napięcie oraz energia emocjonalna. Lomi Lomi jest hawajskim słowem określającym w dosłownym tłumaczeniu dotyk aksamitną łapą zadowolonego kota. Inne znaczenie słowa „lomi” to naciskanie, pocieranie i uwaga poświęcona zarówno zewnętrznej, jak wewnętrznej sferze człowieka. Natomiast „nui” oznacza „ważny, wyjątkowy, podniosły, święty”. Jest to rytuał, który poprzez dotyk głęboko oczyszcza duchowo i fizycznie, a także przywraca równowagę. Masaż Lomi Lomi Nui charakterystyczne pełne gracji ruchy taneczne wykonywane przez terapeutę, a także masowanie przedramionami, dłońmi oraz łokciami. Ruchy masażysty przechodzą przez ciało płynnie i delikatnie. Pozwala to masowanemu na niezwykłe odprężenie i poddanie się całemu zabiegowi. Lomi Lomi Nui jest jedną z technik, dzięki którym można znacząco wpłynąć na poprawę zdrowia fizycznego, zwiększyć harmonię duchową i stabilność psychiczną, pomaga nam odczuć uzdrawiającą siłę Miłości.",
    duration: 90,
    price: 200,
    image: "./images/lomi-lomi-nui.jpeg",
  },
  {
    type: "Masaż ciała",
    name: "Masaż relaksacyjny",
    description:
      "Jest to zabieg na bazie masażu klasycznego. Poprzez zastosowanie technik tonizujących i odruchowych wpływa on na regulację napięcia mięśniowo – nerwowego. Przyśpiesza wypoczynek i osiągnięcie równowagi psychofizycznej.",
    duration: 60,
    price: 120,
    image: "./images/relaxing.jpg",
  },
  {
    type: "Masaż ciała",
    name: "Masaż relaksacyjno-leczniczy",
    description:
      "Jest to doskonała terapia dla osób mających problemy z kręgosłupem, potrzebujących relaksu i odpoczynku. Zabieg zaczyna się leczniczym masażem pleców a następnie wykonywany jest wyciszający masaż relaksujący.",
    duration: 60,
    price: 150,
    image: "./images/health-relaxing.jpg",
  },
  {
    type: "Masaż ciała",
    name: "Masaż leczniczy",
    description:
      "Jest to odmiana masażu klasycznego likwidująca zaburzenia i dolegliwości narządów ruchu (w obrębie mięśni, stawów obwodowych i kręgosłupa). Jednakże podczas masażu zostaje użyty większy nacisk na masowane tkanki.",
    duration: 60,
    price: 180,
    image: "./images/health.jpg",
  },
  {
    type: "Masaż ciała",
    name: "Masaż bańką",
    description:
      "Masaż bańką chińską opiera się na metodzie próżniowego zasysania skóry i tkanki podskórnej. Podciśnienie, które wytwarza się w bańce przez usunięcie z niej powietrza, powoduje zassanie skóry i tkanek leżących pod bańką, powodując intensywne przekrwienie oraz wyraźną poprawę stanu skóry. Rozszerzenie naczyń krwionośnych i odpowiednie ukrwienie powoduje lepsze odżywienie tkanek oraz zapobiega tworzeniu się cellulitu.",
    duration: 60,
    price: 180,
    image: "./images/bubble.jpg",
  },
  {
    type: "Masaż ciała",
    name: "Masaż stóp",
    description:
      "Już Starożytni Chińczycy uważali, że wszystkie części naszego ciała mają swój odpowiednik na stopach a ich masaż wpływa na poszczególne z nich. Dodatkowo jest to metoda relaksacyjna, wywodząca się z masażu klasycznego, której celem jest rozluźnienie i uruchomienie stawów stopy. Przyjdź do nas i poczuj odprężenie i relaks.",
    duration: 30,
    price: 60,
    image: "./images/feet.jpg",
  },
  {
    type: "Masaż ciała",
    name: "Masaż izometryczny",
    description:
      "Jest to intensywna i głęboka terapia dla tkanki podskórnej i mięśni. Pobudza ukrwienie oraz metabolizm tkankowy, dzięki czemu nasze ciało szybciej spala nadmiar tłuszczu a sylwetka przybiera bardziej szczupły wygląd.",
    duration: 45,
    price: 150,
    image: "./images/izometric.jpg",
  },
];
function changeMassageContent(massageName) {
  const selectedMassage = massages.find(
    (massage) => massage.name === massageName
  );
  document.querySelector("#title-to-change").innerHTML = selectedMassage.name;
  document.querySelector("#description-to-change").innerHTML =
    selectedMassage.description;
  document.querySelector("#time-to-change").innerHTML =
    Math.floor(selectedMassage.duration / 60) +
    " godz. " +
    (selectedMassage.duration % 60) +
    " min.";
  document.querySelector("#price-to-change").innerHTML =
    selectedMassage.price + "zł";
  document.querySelector("#img-to-change").style.backgroundImage =
    "url(" + selectedMassage.image + ")";
}
const massages_listeners = {
  "#face-massage-1": "Masaż intensywnie liftingujący BelViso",
  "#face-massage-2": "Masaż transbukalny",
  "#face-massage-3": "Kinesiotaping estetyczny",
  "#body-massage-1": "Masaż Lomi Lomi Nui",
  "#body-massage-2": "Masaż relaksacyjny",
  "#body-massage-3": "Masaż relaksacyjno-leczniczy",
  "#body-massage-4": "Masaż leczniczy",
  "#body-massage-5": "Masaż bańką",
  "#body-massage-6": "Masaż stóp",
  "#body-massage-7": "Masaż izometryczny",
};

for (const [id, name] of Object.entries(massages_listeners)) {
  document.querySelector(id).addEventListener("click", function () {
    changeMassageContent(name, 40);
    scrollToSection("#service-details", 40);
  });
}
