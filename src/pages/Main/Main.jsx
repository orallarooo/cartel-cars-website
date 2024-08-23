import "./Main.scss"

import c_1_img from "../../img/c-1.png";

import c_2_img from "../../img/c-2.png";
import c_3_img from "../../img/c-3.png";
import c_4_img from "../../img/c-4.png";
import star_img from "../../img/star.svg";
import img_group_cars from "../../img/img-group-cars.png";
import vector_to_bottom from "../../img/Vector-to-bottom.png";
import vector_gold_smaller from "../../img/vec-gold-smaller.svg";
// import vector_gold_bigger from "./img/vector-gold-bigger.svg";
import benefits_page_img from "../../img/benefits-page-right-bg.png";
import cars_black_smaller from "../../img/cars-black-smaller.png";

import CarsCard from "../../components/CarsCard/CarsCard";
import ConsultationBox from "../../components/ConsultationBox/ConsultationBox";
import RequirementBox from "../../components/RequirementBox/RequirementBox";
import LinkBtn from "../../components/LinkBtn/LinkBink";
import Accordion from "../../components/Accordion/Accordion";

const faqList = [
  {
    question: "Как я могу забронировать автомобиль?",
    answer: "Для того, чтобы забронировать авто, нажмите на кнопку ”забронировать”, и наши менеджеры свяжутся с Вами для уточнения деталей",
  },
  {
    question: "Какие документы необходимы для аренды автомобиля?",
    answer: "Для того, чтобы забронировать авто, нажмите на кнопку ”забронировать”, и наши менеджеры свяжутся с Вами для уточнения деталей",
  },
  {
    question: "Можно ли арендовать автомобиль на несколько дней?",
    answer: "Для того, чтобы забронировать авто, нажмите на кнопку ”забронировать”, и наши менеджеры свяжутся с Вами для уточнения деталей",
  },
  {
    question: "Что произойдет, если я задержу возврат автомобиля?",
    answer: "Для того, чтобы забронировать авто, нажмите на кнопку ”забронировать”, и наши менеджеры свяжутся с Вами для уточнения деталей",
  },
  {
    question: "Можно ли превышать суточный лимит по пробегу",
    answer: "Для того, чтобы забронировать авто, нажмите на кнопку ”забронировать”, и наши менеджеры свяжутся с Вами для уточнения деталей",
  },
  {
    question: "Можно ли выезжать на арендованном авто в другие города/государства?",
    answer: "Для того, чтобы забронировать авто, нажмите на кнопку ”забронировать”, и наши менеджеры свяжутся с Вами для уточнения деталей",
  },
]

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
                <img className="small-img" src={cars_black_smaller} alt="" />
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
              <CarsCard name="Внедорожники" />
              <CarsCard name="Бизнес" />
              <CarsCard name="Премиум" />
              <CarsCard name="Спорткары" />

              <CarsCard name="Комфорт" />
              <CarsCard name="Купе" />
              <CarsCard name="Минивэны" />
              <CarsCard name="Кабриолеты" />
            </div>
          </div>
        </div>
      </div>

      <div className="page-consultation">
        <div className="page-consultation__inner">
          <ConsultationBox
            title="Запишитесь на консультацию к менеджеру"
            sub_1="Подбор авто"
            sub_2="Расчет стоимости"
            sub_3="Подписание договора online"
            submit="СВЯЗАТЬСЯ С МЕНЕДЖЕРОМ"
          />
        </div>
      </div>

      <div className="page-benefints">
        <div className="container">
          <div className="page-benefints__inner">
            <div className="page-benefints__inner-left">
              <h2 className="page-benefints__title">
                Для тех, кто ценит заботливый сервис
              </h2>
              <p className="page-benefints__subtitle">
                Перед каждой арендой автомобиль проходит комплексный детейлинг,
                что позволяет подготовить его к эксплуатации.
              </p>
              <p className="page-benefints__subtitle">
                Мы осуществляем проверку всех жидкостей и технического состояния
                автомобиля.
              </p>
              <div className="page-benefints__sub-box">
                <p>
                  Наши квалифицированные специалисты регулярно проводят ТО,
                  чтобы гарантировать безопасность на дорогах и предотвратить
                  возможные неприятности во время эксплуатации
                </p>
              </div>
            </div>
            <div className="page-benefints__inner-right">
              <div className="page-benefints__right-box">
                <img src={benefits_page_img} alt="" />
              </div>
              <div className="page-benefints__right-text">
                <img src={star_img} alt="" />
                <p>
                  Наши автомобили и подход оставят незабываемые впечатления от
                  аренды.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-requirement">
        <div className="container">
          <div className="page-requirement__inner">
            <h2 className="page-requirement__title">
              Наши требования при аренде авто
            </h2>
            <div className="page-requirement__boxes">
              <RequirementBox text="Регистрация или прописка на территории РФ" />
              <RequirementBox text="Возраст водителя от 23 лет" />
              <RequirementBox text="Стаж вождения от 3-х лет" />
              <RequirementBox text="Суточный пробег до 200 км" />
            </div>
          </div>
        </div>
      </div>
      <div className="page-rent">
        <div className="page-rent__inner">
          <ConsultationBox
            title="Быстрая
            аренда авто
            в течение дня"
            sub_1="Консультация"
            sub_2="Подписание договора"
            sub_3="Доставка авто в течение дня"
            submit="ЗАБРОНИРОВАТЬ"
          />
        </div>
      </div>
      <div className="page-questions">
        <div className="page-questions__container">
          <div className="page-questions__left">
            <h2 className="page-questions__title page-questions__title-first">Вопрос -ответ</h2>
            <p className="page-questions__subtitle">
              Если у вас остались вопросы, которых нет в списке,
              <span> вы всегда можете связаться с нашими менеджерами</span>
            </p>
            <LinkBtn text="ЗАДАТЬ ВОПРОС" vector={vector_gold_smaller} />
          </div>
          <div className="page-questions__right">
            <h2 className="page-questions__title page-questions__title-second">
              Вопрос-ответ
            </h2>
            <Accordion faqList={faqList}/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
