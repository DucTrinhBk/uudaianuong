import {combineReducers } from 'redux';
import homeReducer from './home_reducer';
import categoryReducer from './category_reducer';
import menuReducer from './menu_reducer';
import searchReducer from './search_reducer';
import tagReducer from './tag_reducer';
import detailReducer from './detail_reducer';
import metaTagsReducer from './metatags_reducer';
export default combineReducers({
   home: homeReducer,
   category: categoryReducer,
   menu: menuReducer,
   search:searchReducer,
   tag:tagReducer,
   detail: detailReducer,
   metaTags: metaTagsReducer
});