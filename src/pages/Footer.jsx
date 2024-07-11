import telegram from "./img/telegram.png";
import whatsup from "./img/whatsup.png";
import facebook from "./img/facebook.png";
import youtube from "./img/youtube.png";
import instagram from "./img/instagram.png";

import logo_img_big from "./img/footer_logo_png.png";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__top">
            <div className="footer__contacts">
              <h2 className="footer__contacts-title">Наши контакты:</h2>
              <div className="footer__contacts-socials">
                <img src={telegram} alt="telegram" />
                <img src={whatsup} alt="whatsup" />
                <img src={facebook} alt="facebook" />
                <img src={youtube} al /* t */="youtube" />
                <img src={instagram} alt="instagram" />
              </div>

              <div className="footer__contacts-boxes">
                <div className="footer__contacts-box">
                  <p>
                    Для получения дополнительной консультации свяжитесь с нами
                    по номеру:
                  </p>
                  <span>+7 (911) 089-94-94</span>
                </div>
                <div className="footer__contacts-box">
                  <p>График работы:</p>
                  <span>Пн-Вс: 10:00-22:00</span>
                </div>
                <div className="footer__contacts-box">
                  <p>С предложением о сотрудничестве пишите на почту:</p>
                  <span>work.dm@gmail.com</span>
                </div>
                <div className="footer__contacts-box">
                  <p>Cпособы оплаты:</p>
                  <span>наличный и безналичный расчет, криптовалюта</span>
                </div>
              </div>
            </div>

            <div className="footer__map">
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__logo">
              <img src={logo_img_big} alt="" />
            </div>

            <p className="footer__adress">
              <p>Железнодорожный пр., 36,</p>
              <p>Санкт-Петербург, Россия, 192148</p>
            </p>
            <div className="footer__btn">
              <a href="#">
                БЫСТРАЯ БРОНЬ
              </a>
            </div>
            <div className="footer__info">
              <p>2023 © CartelCars</p>
              <p>Юридические документы</p>
              <p>Политика конфиденциальности</p>
            </div>
            <nav className="footer__nav">
              <ul className="footer__nav-items">
                <li className="footer__nav-item">
                  <a href="#" className="footer__nav-link">
                    Автопарк
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="#" className="footer__nav-link">
                    Условия аренды
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="#" className="footer__nav-link">
                    Контакты
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="#" className="footer__nav-link">
                    FAQ
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="#" className="footer__nav-link">
                    Отзывы
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
