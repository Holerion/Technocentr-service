const base = 'pages/' 

const AboutUs =  base + 'AboutUs.html'
const OurWorks = base + 'OurWorks.html'
const contacts = base + 'OurWorks.html'





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
          <li class="btn-primary"><a href=${contacts}>Контакти</a></li>
        </ul>

        <ul class="laguage">
          <li><a href="">UK</a></li>
          <li><a href="">RU</a></li>
        </ul>
      </div>
    </div>

    <ul class="second-list">
      <li class="sec-item">
        <span>Відновлення</span>
        <ul class="thrd-list">
          <li class="item"><a href="">Ремонт великогабаритної спецтехніки</a></li>
          <li class="item"><a href="">Відновлення гідравлічних систем</a></li>
          <li class="item"><a href="">Технологічне обладнання</a></li>
          <li class="item"><a href="">Сільське господарство</a></li>
        </ul>
      </li>

      <li class="sec-item">
        <span>РОЗРОБКА ТА ВИГОТОВЛЕННЯ</span>
        <ul class="thrd-list">
          <li class="item"><a href="">Навісне обладнання</a></li>
          <li class="item"><a href="">Технологічне обладнання</a></li>
          <li class="item"><a href="">Виготовлення конструкцій з металу за кресленнями</a></li>
          <li class="item"><a href="">Сільське господарство</a></li>
        </ul>
      </li>

      <li class="sec-item">
        <span>ПОСЛУГИ</span>
        <ul class="thrd-list">
          <li class="item"><a href="">Наплавочно-розточувальні роботи</a></li>
          <li class="item"><a href="">Розробка деталей машин</a></li>
          <li class="item"><a href="">Футерування</a></li>
          <li class="item"><a href="">Послуга гнуття листового металу</a></li>
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
          <li class="btn-primary"><a href="">Контакти</a></li>
        </ul>

        <div class="bottom-links">
          <ul class="laguage">
            <li>UK</li>
            <li>RU</li>
          </ul>

          <ul class="fast-contact">
            <li>+38 067 733 91 95</li>
            <li>cfifredko@gmail.com</li>
          </ul>
        </div>
      </div>

      <ul class="second-list-hamburger">
        <li class="sec-item">
          <span>Відновлення</span>
          <ul class="thrd-list">
            <li class="item"><a href="">Ремонт великогабаритної спецтехніки</a></li>
            <li class="item"><a href="">Відновлення гідравлічних систем</a></li>
            <li class="item"><a href="">Технологічне обладнання</a></li>
            <li class="item"><a href="">Сільське господарство</a></li>
          </ul>
        </li>

        <li class="sec-item">
          <span>РОЗРОБКА ТА ВИГОТОВЛЕННЯ</span>
          <ul class="thrd-list">
            <li class="item"><a href="">Навісне обладнання</a></li>
            <li class="item"><a href="">Технологічне обладнання</a></li>
            <li class="item"><a href="">Виготовлення конструкцій з металу за кресленнями</a></li>
            <li class="item"><a href="">Сільське господарство</a></li>
          </ul>
        </li>

        <li class="sec-item">
          <span>ПОСЛУГИ</span>
          <ul class="thrd-list">
            <li class="item"><a href="">Наплавочно-розточувальні роботи</a></li>
            <li class="item"><a href="">Розробка деталей машин</a></li>
            <li class="item"><a href="">Футерування</a></li>
            <li class="item"><a href="">Послуга гнуття листового металу</a></li>
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
            <li class="link"><a href="">Контакти</a></li>
            <li class="link"><a href="">Наші роботи</a></li>
          </ul>
        </li>

        <li>
          <ul>
            <li class="link"><span>Відновлення</span></li>
            <li class="link"><a href="">Ремонт великогабаритної спецтехніки</a></li>
            <li class="link"><a href="">Відновлення гідравлічних систем</a></li>
            <li class="link"><a href="">Технологічне обладнання</a></li>
            <li class="link"><a href="">Сільське господарство</a></li>
          </ul>
        </li>

        <li>
          <ul>
            <li class="link"><span>РОЗРОБКА ТА ВИГОТОВЛЕННЯ</span></li>
            <li class="link"><a href="">Навісне обладнання</a></li>
            <li class="link"><a href="">Технологічне обладнання</a></li>
            <li class="link"><a href="">Виготовлення конструкцій з металу за кресленнями</a></li>
            <li class="link"><a href="">Сільське господарство</a></li>
          </ul>
        </li>

        <li>
          <ul>
            <li class="link"><span>ПОСЛУГИ</span></li>
            <li class="link"><a href="">Наплавочно-розточувальні роботи</a></li>
            <li class="link"><a href="">Розробка деталей машин</a></li>
            <li class="link"><a href="">Футерування</a></li>
            <li class="link"><a href="">Послуга гнуття листового металу</a></li>
          </ul>
        </li>

        <ul class="span">
          <li>
            <ul class="social">
              <li class="link"><span>Слідкуйте за нами</span></li>
              <ul class="social-links">
                <li class="link"><i class="fa-brands fa-facebook"></i></li>
                <li class="link"><i class="fa-brands fa-instagram"></i></li>
              </ul>
            </ul>
          </li>

          <li>
            <ul class="contacts">
              <li class="link"><span>Контакти</span></li>
              <li class="link">+38 067 733 91 95</li>
              <li class="link">cfifredko@gmail.com</li>
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
