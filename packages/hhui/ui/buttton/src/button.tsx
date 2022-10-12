import { defineComponent ,ExtractPropTypes} from "vue";
import { btnProps ,BtnProps} from "./button-types";
import './button.scss';

export default defineComponent({

  name: "CButton",
  props: btnProps,
  setup(props:BtnProps) {
    return () => {
      return (<button class="hh-btn">{ props.text }</button>);
    }
  },

});
