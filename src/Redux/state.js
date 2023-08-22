import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
  dialogsPage: {
      dialogs: [
          {id: 1, name: 'Nick'},
          {id: 2, name: 'Lara'},
          {id: 3, name: 'Vikusik'},
          {id: 4, name: 'Tanyusha'},
          {id: 5, name: 'Sashka'}
        ],
      messages: [
          {id: 1, message: 'Hi there'},
          {id: 2, message: 'Hui vam'},
          {id: 3, message: 'Yo banny'}
        ],
        newMessageBody: ''
  },
  profilePage: {
      posts: [
          { id: 1, post: 'Hey, how are you?', likesCount: 10 },
          { id: 2, post: 'It is my first post!', likesCount: 12 }
         ], 
         newPostText: 'Kamasutra'
  },
  sidebar: {}        
},
_callSubscriber(){
  console.log ('state is changed')
},

getState() {
  return this._state;
},
subscribe(observer) {
  this._callSubscriber = observer;
  },
     
dispatch(action){

this._state.profilePage = profileReducer(this._state.profilePage, action);
this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
this._state.sidebar = sidebarReducer(this._state.sidebar, action);
  
this._callSubscriber(this._state);
  }

}






window.store= store; 

    export default store;
    
