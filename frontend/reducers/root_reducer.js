import { combineReducers } from "redux";
import UserReducer from "./user_reducer";
import ErrorsReducer from "./errors_reducer";
import EntitiesReducer from "./entities_reducer";
import SessionReducer from "./session_reducer";
import ReviewReducer from "./review_reducer";
import ModalReducer from "./modal_reducer";


const rootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  reviews: ReviewReducer,
  modal: ModalReducer,
  users: UserReducer
})

export default rootReducer;