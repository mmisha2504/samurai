const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
      ]
}

const dialogsReducer = (state=initialState, action)=>{
let stateCopy;

    switch(action.type){
    
    case SEND_MESSAGE:
      let body= action.newMessageBody;

      return {...state,
        messages:[...state.messages, {id:6, message:body}]
      }
    default:    
    return state;
}
}

export const sendMessageCreator = (newMessageBody)=>({type: SEND_MESSAGE, newMessageBody}); 
export default dialogsReducer;