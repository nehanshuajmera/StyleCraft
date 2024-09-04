import "./booknow-form.styles.scss";
import { AnimatedButton } from "../../universal.component/animated-button/animated-button.component";
import { FormStyle1 } from "../form-style-1/form-style-1.component";
import { FormStyle2 } from "../form-style-2/form-style-2.component";
import { FormStyle3 } from "../form-style-3/form-style-3.component";

export const BooknowForm = () => {
  return (
    <form className="booknow-form">
      <div className="booknow-form__container form-img--1">
        <FormStyle1 />
      </div>
      <div className="booknow-form__container form-img--2">
        <FormStyle2 />
      </div>
      <div className="booknow-form__container form-img--3">
        <FormStyle3 />
        {/* <AnimatedButton>Next Step &rarr;</AnimatedButton> */}
      </div>
    </form>
  );
};
