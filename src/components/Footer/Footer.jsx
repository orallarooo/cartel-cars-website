import "./Footer.scss"

import telegram from "./img/telegram.png";
import whatsup from "./img/whatsup.png";
import facebook from "./img/facebook.png";
import youtube from "./img/youtube.png";
import instagram from "./img/instagram.png";

import telegram_min from "./img/telegram-min.png";
import whatsup_min from "./img/whatsup-min.png";
import facebook_min from "./img/facebook-min.png";
import youtube_min from "./img/youtube-min.png";
import instagram_min from "./img/instagram-min.png";

import logo_img_big from "./img/footer_logo_png.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__contacts">
            <h2 className="footer__contacts-title">
              <span className="footer__contacts-title-span">
                Наши контакты:
              </span>
              <span className="footer__contacts-title-span-2">Контакты</span>
            </h2>
            <div className="footer__contacts-socials">
              <img src={telegram} alt="telegram" />
              <img src={whatsup} alt="whatsup" />
              <img src={facebook} alt="facebook" />
              <img src={youtube} al /* t */="youtube" />
              <img src={instagram} alt="instagram" />
            </div>

            <div className="footer__contacts-socials-min">
              <img src={telegram_min} alt="telegram" />
              <img src={whatsup_min} alt="whatsup" />
              <img src={facebook_min} alt="facebook" />
              <img src={youtube_min} al /* t */="youtube" />
              <img src={instagram_min} alt="instagram" />
            </div>

            <div className="footer__contacts-boxes">
              <div className="footer__contacts-box">
                <p>
                  Для получения дополнительной консультации свяжитесь с нами по
                  номеру:
                </p>
                <span>+7 (911) 123-45-67</span>
              </div>
              <div className="footer__contacts-box">
                <p>График работы:</p>
                <span>Пн-Вс: 10:00-22:00</span>
              </div>
              <div className="footer__contacts-box">
                <p>С предложением о сотрудничестве пишите на почту:</p>
                <span>work.work@gmail.com</span>
              </div>
              <div className="footer__contacts-box">
                <p>Cпособы оплаты:</p>
                <span>наличный и безналичный расчет, криптовалюта</span>
              </div>
            </div>
          </div>

          <div className="footer__map"></div>

          <div className="footer__logo">
            <img src={logo_img_big} alt="" />
          </div>

          <p className="footer__address">
            <p>Железнодорожный пр., 36,</p>
            <p>Санкт-Петербург, Россия, 123456</p>
          </p>
          <div className="footer__btn">
            <a href="#">БЫСТРАЯ БРОНЬ</a>
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
    </footer>
  );
};

export default Footer;
