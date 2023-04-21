const base = "pages/";

const AboutUs = base + "AboutUs.html";
const OurWorks = base + "OurWorks.html";
const contacts = base + "Contacts.html";
const production = base + "Production/Production.html";



// Відновлення
const repairing = "restoration-of-special-equipment/";

// Ремонт великогабаритної спецтехніки
const RepairOfLargeSizedSpecialEquipment = base + repairing + "Repair-of-large-sized-special-equipment.html";
// Відновлення гідравлічних систем
const RestorationOfHydraulicSystems = base + repairing + "Restoration-of-hydraulic-systems.html";
// Технологічне обладнання
const RestorationOfTechnologicalEquipment = base + repairing + "Restoration-of-technological-equipment.html";
// Сільське господарство
const Agriculture = base + repairing + "Agriculture.html";






// РОЗРОБКА ТА ВИГОТОВЛЕННЯ
const development = "development-and-preparation/"

// Навісне обладнання
const AttachmentsForSpecialEquipment = base + development + "Attachments-for-special-equipment.html"
// Технологічне обладнання
const EquipmentForAgriculturalMachinery = base + development + "Equipment-for-agricultural-machinery.html"
// Виготовлення конструкцій з металу за кресленнями
const ManufacturingOfTechnologicalEquipment = base + development + "Manufacturing-of-technological-equipment.html"
// Сільське господарство
const ProductionOfMetalStructuresAccordingToCustomersDrawings = base + development + "Production-of-metal-structures-according-to-customers-drawings.html"






// ПОСЛУГИ

// Наплавочно-розточувальні роботи
// Розробка деталей машин
// Футерування
// Послуга гнуття листового металу








function header() {
  document.querySelector("header.navbar").innerHTML = `
    <nav class="normal-navbar">
    <a href="/"><img src="./src/img/logo_technocentr.svg" class="logo" alt="" /></a>
    <div class="link-list">
      <ul class="fast-contact">
        <li><span>+38 067 733 91 95</span></li>
        <li><span>cfifredko@gmail.com</span></li>
      </ul>

      <div>
        <ul class="pages">
          <li class="link"><a href=${AboutUs}>Про нас</a></li>
          <li class="expand-menu link"><span class="expand-btn" onclick="showTest()">Послуги</span></li>
          <li class="link"><a href=${OurWorks}>Наші роботи</a></li>
          <li class="link"><a href=${production}>Продукція</a></li>
          <li class="btn-primary"><a href=${contacts}>Контакти</a></li>
        </ul>

        <ul class="laguage">
          <li><a href=${AboutUs}>UK</a></li>
          <li><a href=${AboutUs}>EN</a></li>
        </ul>
      </div>
    </div>

    <ul class="second-list">
      <li class="sec-item">
        <span>Відновлення</span>
        <ul class="thrd-list">
          <li class="item"><a href=${RepairOfLargeSizedSpecialEquipment}>Ремонт великогабаритної спецтехніки</a></li>
          <li class="item"><a href=${RestorationOfHydraulicSystems}>Відновлення гідравлічних систем</a></li>
          <li class="item"><a href=${RestorationOfTechnologicalEquipment}>Технологічне обладнання</a></li>
          <li class="item"><a href=${Agriculture}>Сільське господарство</a></li>
        </ul>
      </li>

      <li class="sec-item">
        <span>РОЗРОБКА ТА ВИГОТОВЛЕННЯ</span>
        <ul class="thrd-list">
          <li class="item"><a href=${AboutUs}>Навісне обладнання</a></li>
          <li class="item"><a href=${AboutUs}>Технологічне обладнання</a></li>
          <li class="item"><a href=${AboutUs}>Виготовлення конструкцій з металу за кресленнями</a></li>
          <li class="item"><a href=${AboutUs}>Сільське господарство</a></li>
        </ul>
      </li>

      <li class="sec-item">
        <span>ПОСЛУГИ</span>
        <ul class="thrd-list">
          <li class="item"><a href=${AboutUs}>Наплавочно-розточувальні роботи</a></li>
          <li class="item"><a href=${AboutUs}>Розробка деталей машин</a></li>
          <li class="item"><a href=${AboutUs}>Футерування</a></li>
          <li class="item"><a href=${AboutUs}>Послуга гнуття листового металу</a></li>
        </ul>
      </li>
      <li>
        <img src="" width="70%" height="100%" alt="" />
      </li>
    </ul>
  </nav>

  <nav class="hamburger-navbar">
    <div class="menu">
      <div class="link-list">
        <ul class="pages">
          <li class="link"><a href="${AboutUs}">Про нас</a></li>
          <li class="expand-menu link"><span class="expand-btn" onclick="showTestHamburger()">Послуги</span></li>
          <li class="link"><a href="">Наші роботи</a></li>          
          <li class="link"><a href=${production}>Продукція</a></li>
          <li class="btn-primary"><a href="">Контакти</a></li>
        </ul>

        <div class="bottom-links">
          <ul class="laguage">
            <li><a href=${AboutUs}>UK</a></li>
            <li><a href=${AboutUs}>EN</a></li>
          </ul>

          <ul class="fast-contact">
            <li>067 555-49-00</li>
            <li>1tehnocentr@gmail.com</li>
          </ul>
        </div>
      </div>

      <ul class="second-list-hamburger">
        <li class="sec-item">
          <span>Відновлення</span>
          <ul class="thrd-list">
            <li class="item"><a href=${AboutUs}>Ремонт великогабаритної спецтехніки</a></li>
            <li class="item"><a href=${AboutUs}>Відновлення гідравлічних систем</a></li>
            <li class="item"><a href=${AboutUs}>Технологічне обладнання</a></li>
            <li class="item"><a href=${AboutUs}>Сільське господарство</a></li>
          </ul>
        </li>

        <li class="sec-item">
          <span>РОЗРОБКА ТА ВИГОТОВЛЕННЯ</span>
          <ul class="thrd-list">
            <li class="item"><a href=${AboutUs}>Навісне обладнання</a></li>
            <li class="item"><a href=${AboutUs}>Технологічне обладнання</a></li>
            <li class="item"><a href=${AboutUs}>Виготовлення конструкцій з металу за кресленнями</a></li>
            <li class="item"><a href=${AboutUs}>Сільське господарство</a></li>
          </ul>
        </li>

        <li class="sec-item">
          <span>ПОСЛУГИ</span>
          <ul class="thrd-list">
            <li class="item"><a href=${AboutUs}>Наплавочно-розточувальні роботи</a></li>
            <li class="item"><a href=${AboutUs}>Розробка деталей машин</a></li>
            <li class="item"><a href=${AboutUs}>Футерування</a></li>
            <li class="item"><a href=${AboutUs}>Послуга гнуття листового металу</a></li>
          </ul>
        </li>
        <li>
          <img src="" width="100%" height="100%" alt="" />
        </li>
      </ul>
    </div>

    <div class="nav-fixed">
      <div class="menu-icon" >
        <input class="menu-icon__cheeckbox" onclick='hamburgerClick(this)' type="checkbox" />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
      <img src="./src/img/logo_technocentr.svg" class="logo" width="70%" height="70px" alt="" />
    </div>
  </nav>
    `;
}

header();

function footer() {
  document.querySelector("footer").innerHTML = `
    <ul class="links">
    <li>
      <ul class="link-list">
        <li>
          <ul>
            <li class="link"><span>Головна</span></li>
            <li class="link"><a href=${AboutUs}>Про нас</a></li>
            <li class="link"><a href=${AboutUs}>Наші роботи</a></li>            
            <li class="link"><a href=${production}>Продукція</a></li>
            <li class="link"><a href=${AboutUs}>Контакти</a></li>
          </ul>
        </li>

        <li>
          <ul>
            <li class="link"><span>Відновлення</span></li>
            <li class="link"><a href=${AboutUs}>Ремонт великогабаритної спецтехніки</a></li>
            <li class="link"><a href=${AboutUs}>Відновлення гідравлічних систем</a></li>
            <li class="link"><a href=${AboutUs}>Технологічне обладнання</a></li>
            <li class="link"><a href=${AboutUs}>Сільське господарство</a></li>
          </ul>
        </li>

        <li>
          <ul>
            <li class="link"><span>РОЗРОБКА ТА ВИГОТОВЛЕННЯ</span></li>
            <li class="link"><a href=${AboutUs}>Навісне обладнання</a></li>
            <li class="link"><a href=${AboutUs}>Технологічне обладнання</a></li>
            <li class="link"><a href=${AboutUs}>Виготовлення конструкцій з металу за кресленнями</a></li>
            <li class="link"><a href=${AboutUs}>Сільське господарство</a></li>
          </ul>
        </li>

        <li>
          <ul>
            <li class="link"><span>ПОСЛУГИ</span></li>
            <li class="link"><a href=${AboutUs}>Наплавочно-розточувальні роботи</a></li>
            <li class="link"><a href=${AboutUs}>Розробка деталей машин</a></li>
            <li class="link"><a href=${AboutUs}>Футерування</a></li>
            <li class="link"><a href=${AboutUs}>Послуга гнуття листового металу</a></li>
          </ul>
        </li>

        <ul class="span">

          <li>
            <ul class="social">
              <li class="link"><span>Слідкуйте за нами</span></li>
              <ul class="social-links">
                <li class="link"><a href=${AboutUs}><i class="fa-brands fa-facebook"></i></a></li>
                <li class="link"><a href=${AboutUs}><i class="fa-brands fa-instagram"></i></a></li>
              </ul>
            </ul>
          </li>
          

          <li>
            <ul class="contacts">
              <li class="link"><span>Контакти</span></li>
              <li class="link">067 555-49-00</li>
              <li class="link">1tehnocentr@gmail.com</li>
              <li class="link">03067, Київ, Солом’янський район, вул. Полковника Шутова 16, офіс 215.</li>
            </ul>
          </li>
        </ul>
      </ul>
    </li>

    <li>
      <img src="./src/img/iso-9001-2015.png" alt="" />
    </li>
  </ul>

  <ul class="company">
    <li><i class="fa-solid fa-compress"></i></li>
    <li><i class="fa-solid fa-compress"></i></li>
    <li><i class="fa-solid fa-compress"></i></li>
    <li><i class="fa-solid fa-compress"></i></li>
    <li><i class="fa-solid fa-compress"></i></li>
  </ul>

  <ul class="bottom">
    <li>Copyrights © 2023 Technocentr S.A. All rights reserved</li>
    <li>UI/UX Design &amp; developed by Alex Red</li>
  </ul>
    `;
}

footer();

function createArticle(info) {
  return `
      <li class='product-item' id=${info.id} > 
        <img src=${info.imgUrl} alt=${info.Name} height="200" width="300"  />

        <div class="text">
        <div class="title-left">
        <h2>${info.Name}</h2>
        <div class="separator"></div>
        </div>
        <p class="item-text">${info.text}</p>
        </div>
        <button class="item-price">${info.Price}</button>
      </li>
    `;
}
