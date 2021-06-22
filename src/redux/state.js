import {rerenderTree} from './../render';


let state = {

    profilePage: {
        posts: [
            { id: 1, message: "Hey, How you doing?", likes: 10},
            { id: 2, message: "It's my first post!", likes: 204 },
            { id: 3, message: "Nice to be there?", likes: 10 }
        ]
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
        ]
    }
}

export let addPostSt = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likes: 0
    };

    state.profilePage.posts.push(newPost);
     rerenderTree(state);
}

export let addMessageSt = (dialogMessage) => {
    let newDialogMessage = {
        id: 1,
        message: dialogMessage
    };

    let newDialogUser = {
        id: 5, 
        name: 'Dima'
    }

    state.dialogsPage.messages.push(newDialogMessage);
    state.dialogsPage.dialogs.push(newDialogUser);
    rerenderTree(state);
    
}

//rerenderTree(state);

export default state;