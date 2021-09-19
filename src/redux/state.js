//import {rerenderTree} from './../render';

let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: "Hey, How you doing?", likes: 10},
                { id: 2, message: "It's my first post!", likes: 204 },
                { id: 3, message: "Nice to be there?", likes: 10 }
            ],
            newPostText: 'hello'
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dima'},
                { id: 2, name: 'Misha'},
                { id: 3, name: 'Tania'}
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How you doing" },
                { id: 3, message: "yo" },
                { id: 4, message: "yoyoyo" }
            ],
            newMessageText: "lalallaaa"
        }
    },
    _callSubscriber() {
        console.log("state changed");
    },
    getState(){
        return this._state;
    },
    addPostSt() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessageSt() {
        let newDialogMessage = {
            id: 1,
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newDialogMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);

    },

//subscribe is called -> observer comes; go out of function
// and looking for the function with the same name. When we fing
// the finction we initialize for this function observer, so this function
//is no longer perform her own body, but perform what was get
// from parameters - OBSERVER
    subscribe(observer) {
        this._callSubscriber = observer; //do not use let here

    }
}


export default store;
window.store = store;