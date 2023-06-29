import { contactsReducer } from "./contactsSlice";
import { userReducer } from "./userSlice";
import { persistReducer,} from 'redux-persist'
    import storage from 'redux-persist/lib/storage';

    const persistConfig = {
        key: 'auth',
        storage,
        whitelist:['token'],
      };
    
    
      const persistedReducer = persistReducer(persistConfig, userReducer);

export const reducer = {
    user: persistedReducer,
    contacts: contactsReducer,
}
