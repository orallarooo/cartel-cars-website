import "./LinkBink.scss"

const LinkBtn = ({text, vector}) => {
      return ( 
            <a href="#" className="link">
                  <span>
                        {text}
                  </span>
                  <img src={vector} alt="" />
            </a>
      );
}
 
export default LinkBtn;