import { defineStore } from 'pinia';

export const useUser = defineStore('app', {
    state: () => ({
        mode: null,
        // user: null,
        // isLoggedIn: false,
        active: null,
    }),
    actions: {
        setMode(newMode) {
            this.mode = newMode;
        },
        // setUser(newUser){ 
        //     this.user = newUser;
        // },
        clearUser(){
            this.mode = null;
            // this.user = null;
            // this.isLoggedIn = false;
        },
        setActive(status){
            this.active = status;
        }
    },
    persist: true
});