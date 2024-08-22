import "./RequirementBox.scss"

const RequirementBox = ({text}) => {
      return ( 
            <div className="page-requirement__box">
                <p>
                    {text}
                </p>
            </div>
       );
}
 
export default RequirementBox;