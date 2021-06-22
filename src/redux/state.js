import {rerenderTree} from './../render';


let state = {

    profilePage: {
        posts: [
            { id: 1, message: "Hey, How you doing?", likes: 10},
            { id: 2, message: "It's my first post!", likes: 204 },
            { id: 3, message: "Nice to be there?", likes: 10 }
        ],
        newPostText: 'neconeco'
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
}

export let addPostSt = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
     rerenderTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderTree(state);
}

export let addMessageSt = () => {
    let newDialogMessage = {
        id: 1,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(newDialogMessage);
    state.dialogsPage.newMessageText = '';
    rerenderTree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderTree(state);

}



export default state;