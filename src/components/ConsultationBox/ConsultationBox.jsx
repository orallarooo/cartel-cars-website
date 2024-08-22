import star_img from "../../img/star.svg";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./ConsultationBox.scss"

const ConsultationBox = ({ title, sub_1, sub_2, sub_3, submit }) => {
  return (
    <div className="consultation-box__inner">
      <div className="consultation-box__left">
        <h2 className="consultation-box__left-title">{title}</h2>

        <div className="consultation-box__left-subtitles">
          <div className="consultation-box__left-subtitle">
            <img src={star_img} alt="star" />
            <p>{sub_1}</p>
          </div>
          <div className="consultation-box__left-subtitle">
            <img src={star_img} alt="star" />
            <p>{sub_2}</p>
          </div>
          <div className="consultation-box__left-subtitle">
            <img src={star_img} alt="star" />
            <p>{sub_3}</p>
          </div>
        </div>
      </div>

      <div className="consultation-box__right">
        <form className="consultation-box__right-form" id="form1">
          <input
            type="text"
            placeholder="Ваше имя"
            className="consultation-box__right-input"
          />

          <input
            type="number"
            placeholder="+77712121212"
            className="consultation-box__right-input"
          />      

          {/* <PhoneInput
            placeholder="+7 (999) 999-99-99"
            className="consultation-box__right-phone"
            country={"us"}
            // value={this.state.phone}
            // onChange={phone => this.setState({ phone })}
            inputStyle={{
              backgroundColor: "#202020",
              padding: "",
              outline: "none",
              border: "1px solid transparent",
              color: "#fff",
            }}
            


            buttonStyle={{
              backgroundColor: "#202020",
              outline: "none",
              border: "1px solid transparent",
              color: "#fff",
              height: "50px",
              marginTop: "8px",
            }}
            dropdownStyle={{
              backgroundColor: "#202020",
              marginTop: "9px",
            }}
          /> */}
          <input
            type="text"
            placeholder="Дополнительный комментарий"
            className="consultation-box__right-input"
          />
        </form>
        <button
          type="submit"
          form="form1"
          className="consultation-box__right-btn"
        >
          {submit}
        </button>
      </div>
    </div>
  );
};

export default ConsultationBox;
