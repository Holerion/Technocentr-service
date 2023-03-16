const navbarExpand = document.querySelector(".expand").innerHTML = `
<a href="/index.html"><img src="../src/img/logo_technocentr.svg" width="300px" alt="" /></a>
        <ul class="list tm-linkHover01">
          <li><a href="/index.html" class="effect-1 ">Головна</a></li>
          <li>
            <input type="checkbox" name="sec-flor" id="sec-flor" />
            <label class="effect-1" for="sec-flor" id="checkItemNav">Каталог <i class="fa-solid fa-chevron-down"></i></label>

            <ul class="sec-flor">
              <li>
                <input type="radio" name="thr-flor" id="1" />
                <label class="effect-1" for="1">Відновлення спецтехніки <i class="fa-solid fa-chevron-down"></i></label>
                <ul class="thr-flor">
                  <li>
                    <a class="effect-1" href="/restoration-of-special-equipment/Repair-of-large-sized-special-equipment.html"
                      >Ремонт великогабаритної спецтехніки</a
                    >
                  </li>
                  <li>
                    <a class="effect-1" href="/restoration-of-special-equipment/Restoration-of-hydraulic-systems.html"
                      >Відновлення гідравлічних систем</a
                    >
                  </li>
                  <li>
                    <a class="effect-1" href="/restoration-of-special-equipment/Restoration-of-technological-equipment.html"
                      >Відновлення технологічного обладнання</a
                    >
                  </li>
                  <li>
                    <a class="effect-1" href="/restoration-of-special-equipment/Agriculture.html">Сільське господарство</a>
                  </li>
                </ul>
              </li>

              <li>
                <input type="radio" name="thr-flor" id="2" />
                <label class="effect-1" for="2">Розробка та виготовлення <i class="fa-solid fa-chevron-down"></i></label>
                <ul class="thr-flor">
                  <li>
                    <a class="effect-1" href="/development-and-preparation/Attachments-for-special-equipment.html"
                      >Навісне обладнання для спецтехніки</a
                    >
                  </li>
                  <li>
                    <a class="effect-1" href="/development-and-preparation/Manufacturing-of-technological-equipment.html"
                      >Виготовлення технологічного обладнання</a
                    >
                  </li>
                  <li>
                    <a
                      class="effect-1"
                      href="/development-and-preparation/Production-of-metal-structures-according-to-customers-drawings.html"
                      >Виготовлення металоконструкцій згідно з кресленнями замовника</a
                    >
                  </li>
                  <li>
                    <a class="effect-1" href="/development-and-preparation/Equipment-for-agricultural-machinery.html"
                      >Обладнання для сільгосптехніки</a
                    >
                  </li>
                </ul>
              </li>

              <li>
                <input type="radio" name="thr-flor" id="3" />
                <label class="effect-1" for="3">Послуги <i class="fa-solid fa-chevron-down"></i></label>
                <ul class="thr-flor">
                  <li>
                    <a class="effect-1" href="/other/Surfacing-and-boring-operations.html">Наплавочно-розточувальні роботи</a>
                  </li>
                  <li><a class="effect-1" href="/other/Development-of-machine parts.html">Розробка деталей машин</a></li>
                  <li><a class="effect-1" href="/other/Lining.html">Футерування</a></li>
                  <li><a class="effect-1" href="/other/Sheet-metal-bending.html">Гнуття листового металу</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="./aboutUs.html" class="effect-1">Про нас</a></li>
          <li><a href="./contacts.html" class="effect-1">Контакти</a></li>
        </ul>
`;
const navbarHamburger = document.querySelector(".hamburger").innerHTML = `
<div class="menu">
<a href="/index.html"><img src="../src/img/logo_technocentr.svg" width="300px" alt="" /></a>
<ul class="list">

  <li><a href="/index.html" class="active">Головна</a></li>
  <li><a href="/aboutUs.html">Про нас</a></li>
  <li><a href="/contacts.html">Контакти</a></li>

  <li>
    <label for="1">Відновлення спецтехніки </label>
  </li>

  <li>
    <a href="/restoration-of-special-equipment/Repair-of-large-sized-special-equipment.html"
      >Ремонт великогабаритної спецтехніки</a
    >
  </li>
  <li>
    <a href="/restoration-of-special-equipment/Restoration-of-hydraulic-systems.html">Відновлення гідравлічних систем</a>
  </li>
  <li>
    <a href="/restoration-of-special-equipment/Restoration-of-technological-equipment.html"
      >Відновлення технологічного обладнання</a
    >
  </li>
  <li>
    <a href="/restoration-of-special-equipment/Agriculture.html">Сільське господарство</a>
  </li>

  <li>
    <label for="2">Розробка та виготовлення <i class="fa-solid fa-chevron-down"></i></label>
  </li>

  <li>
    <a href="/development-and-preparation/Attachments-for-special-equipment.html">Навісне обладнання для спецтехніки</a>
  </li>
  <li>
    <a href="/development-and-preparation/Manufacturing-of-technological-equipment.html"
      >Виготовлення технологічного обладнання</a
    >
  </li>
  <li>
    <a href="/development-and-preparation/Production-of-metal-structures-according-to-customers-drawings.html"
      >Виготовлення металоконструкцій згідно з кресленнями замовника</a
    >
  </li>
  <li>
    <a href="/development-and-preparation/Equipment-for-agricultural-machinery.html">Обладнання для сільгосптехніки</a>
  </li>

  <li>
    <label for="3">Послуги <i class="fa-solid fa-chevron-down"></i></label>
  </li>
  <li>
    <a href="/other/Surfacing-and-boring-operations.html">Наплавочно-розточувальні роботи</a>
  </li>
  <li><a href="/other/Development-of-machine parts.html">Розробка деталей машин</a></li>
  <li><a href="/other/Lining.html">Футерування</a></li>
  <li><a href="/other/Sheet-metal-bending.html">Гнуття листового металу</a></li>
</ul>
</div>

<div class="container">
<div class="menubtn btn1" data-menu="1">
  <div class="icon-left"></div>
  <div class="icon-right"></div>
</div>
</div>
`;


const setActive=(index,index2,index3)=>{
  
const expandLinkList = document.querySelectorAll("nav.expand li")
const hamburgerLinkList = document.querySelectorAll("nav.hamburger li")

  try {
    expandLinkList[index].classList.add('active')
hamburgerLinkList[index].classList.add('active')

expandLinkList[index2].classList.add('active')
hamburgerLinkList[index2].classList.add('active')

expandLinkList[index3].classList.add('active')
hamburgerLinkList[index3].classList.add('active')
  
} catch (error) {
  
}

console.log('linkList[index]: ', expandLinkList);
console.log('linkList[index]: ', hamburgerLinkList);
}










const heder = document.querySelector("header");
const checkItemNav = document.querySelector("#checkItemNav");

let prevHeight = scrollY;

const hederOut = (heder) => {
  heder.classList.remove("hadeIn");
  heder.classList.add("hadeOut");
};
const hederIn = (heder) => {
  heder.classList.remove("hadeOut");
  heder.classList.add("hadeIn");
};

const slideBG = (herBG) => {
  herBG.style.backgroundPosition = scrollY / 25 + 10 + "%";
};

window.addEventListener("scroll", function () {
  slideBG(document.querySelector(".hero"));

  if (prevHeight > scrollY) {
    hederIn(heder);
    prevHeight = scrollY;
  } else {
    hederOut(heder);
    prevHeight = scrollY;
  }

  retFalse();
});

const retFalse = () => {
  const radioItemsNav = document.querySelectorAll('input[name="thr-flor"]');
  radioItemsNav.forEach((e) => {
    e.checked = false;
  });
};

checkItemNav.addEventListener("click", () => {
  retFalse();
});

try {
  const prevslide = document.querySelector("#prevslide");
  const nextslide = document.querySelector("#nextslide");
  const slide = document.querySelector(".slide");

  const slideMove = (x) => {
    const translete = +slide.style.transform.replace("translateX(", "").replace("vw)", "") + x;

    const slideWidth = slide.childElementCount * 100;

    translete <= slideWidth * -1
      ? (slide.style.transform = `translateX(${0}vw)`)
      : translete > 0
      ? (slide.style.transform = `translateX(${slideWidth * -1 + x}vw)`)
      : (slide.style.transform = `translateX(${translete}vw)`);
  };
  prevslide.addEventListener("click", () => {
    slideMove(100);
  });
  nextslide.addEventListener("click", () => {
    slideMove(-100);
  });

  setInterval(() => {
    slideMove(-100);
  }, 5000);
} catch (error) {}

document.querySelector(".menubtn").addEventListener("click", function () {
  this.classList.toggle("open");
  document.querySelector(".menu").classList.toggle("show");
});






