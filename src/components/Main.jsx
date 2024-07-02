import c_1_img from "../img/c-1.png";
import c_2_img from "../img/c-2.png";
import c_3_img from "../img/c-3.png";
import c_4_img from "../img/c-4.png";
import star_img from "../img/star.svg";
import img_group_cars from "../img/img-group-cars.png"
import vector_to_bottom from "../img/Vector-to-bottom.png"
import vector_gold_smaller from "../img/vec-gold-smaller.svg"
import vector_gold_bigger from "../img/vector-gold-bigger.svg"

import cars_black_smaller from "../img/cars-black-smaller.png"
import CarsCard from "./CarsCard";

const Main = () => {
  return (
    <main>
      <div className="first-page">
        <div className="container">
          <div className="first-page__inner">
            <div className="first-page__left">
              <p className="first-page__suptitle">
                Элитная аренда в Санкт-Петербурге
              </p>
              <h1 className="first-page__title">
                Прокат
                <img
                  className="small-img"
                  src={cars_black_smaller}
                  alt=""
                />
                <div className="title-box">
                  <span>
                    <img src={c_1_img} alt="cars" />
                  </span>
                  <span>
                    <img src={c_2_img} alt="cars" />
                  </span>
                  <span>
                    <img src={c_3_img} alt="cars" />
                  </span>
                  <span>
                    <img src={c_4_img} alt="cars" />
                  </span>
                </div>
                эксклюзивных автомобилей
              </h1>
              <p className="first-page__subtitle">
                <span>
                  <img src={star_img} alt="star" />
                </span>
                премиум-класса
              </p>
              <button className="first-page__btn">ЗАБРОНИРОВАТЬ</button>
              <a href="#" className="first-page__vector">
                <span>
                  <img src={vector_to_bottom} alt="vector" />
                  <img src={vector_to_bottom} alt="vector" />
                </span>
                <p>Листайте ниже, чтобы узнать больше</p>
              </a>
            </div>
            <div className="first-page__right">
              <img src={img_group_cars} alt="cars" />
              <a href="#">
                <p>Автопарк</p>
                <img src={vector_gold_smaller} alt="vector" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-page"></div>
      <div className="video-page">
        <div className="video-page__inner">
          <p>здесь будет видео</p>
        </div>
      </div>

      <div className="page-advantages">
        <div className="page-advantages__inner">
          <div className="page-advantages__top">
            <h3>Преимущества</h3>
          </div>
          <div className="page-advantages__bottom">
            <div className="container">
              <div className="page-advantages__boxes">
                <div className="page-advantages-box">
                  <p>Поддержка клиентов 24/7</p>
                  <h3>01</h3>
                </div>
                <div className="page-advantages-box">
                  <p>Страховка авто в стоимости аренды</p>
                  <h3>02</h3>
                </div>
                <div className="page-advantages-box">
                  <p>Без скрытых платежей</p>
                  <h3>03</h3>
                </div>
                <div className="page-advantages-box">
                  <p>Пробег до 200 км в день</p>
                  <h3>04</h3>
                </div>
                <div className="page-advantages-box">
                  <p>Скоростной лимит до 200 км/ч</p>
                  <h3>05</h3>
                </div>
                <div className="page-advantages-box">
                  <img src="@img/logo-adv-page.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="page-catalog">
        <div className="container">
          <div className="page-catalog__inner">
            <h2>Выберите свою будущую машину</h2>
            <div className="page-catalog__sub-box">
              <div className="sub-left">
                <img src={star_img} alt="star" />
                <p>
                  Нажмите на понравившуюся категорию авто, чтобы посмотреть:
                </p>
              </div>
              <div className="sub-right">
                <p>Модель</p>
                <span>·</span>
                <p>Фото</p>
                <span>·</span>
                <p>Характеристики</p>
                <span>·</span>
                <p>Описание</p>
                <span>·</span>
                <p>Цена</p>
              </div>
            </div>

            <div className="page-catalog__items">

              <CarsCard name="Внедорожники"/>
              <CarsCard name="Бизнес"/>
              <CarsCard name="Премиум"/>
              <CarsCard name="Спорткары"/>

              <CarsCard name="Комфорт"/>
              <CarsCard name="Купе"/>
              <CarsCard name="Минивэны"/>
              <CarsCard name="Кабриолеты"/>

            </div>

            
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
