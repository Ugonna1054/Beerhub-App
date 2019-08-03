import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
// import firebase from 'firebase';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    beers: null,
    isAuthenticated: false,
    name: null,
    user: null,
    favorites: [],
    beerDetails: null,
    isEmailRegistered : false,
    isPasswordCorrect:false
  },
  mutations: {
    setBeers(state, payload) {
      state.beers = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setName(state, payload) {
      state.name = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setFavorites(state, payload) {
      state.favorites = payload;
    },
    setBeerDetails(state, payload) {
      state.beerDetails = payload;
    },
    setIsEmailRegistered(state, payload) {
      state.isEmailRegistered = payload;
    },
    setIsPasswordCorrect(state, payload) {
      state.isPasswordCorrect = payload;
    }
  },
  actions: {
    async getBeerData ({ commit }) {
      try {
        let response = await fetch(
          "https://api.punkapi.com/v2/beers?page=1&per_page=39"
        );
        let data = await response.json();
        data.map(function(o) {
          o.isActive = false;
          return o;
        });
        console.log(data);
        commit("setBeers", data);
      } catch (err) {
        console.log(err);
      }
    },

    userSignUp({ commit }, { email, password, name }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit("setIsAuthenticated", true);
          router.push("/");
          // update displayName
          let currentUser = firebase.auth().currentUser;
          currentUser
            .updateProfile({
              displayName: name
            })
            .then(() => {
              console.log(user);
              commit("setName", `${user.user.displayName}!`);
              commit("setUser", user);
            });
        })
        .catch(err => {
          commit("setIsAuthenticated", false);
          commit("setName", "");
          console.log(err);
          if (err.code=="auth/email-already-in-use") {
            commit('setIsEmailRegistered', true)
          }
        });
    },

    userSignIn({ commit, state }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit("setIsAuthenticated", true);
          commit("setName", `${user.user.displayName}!`);
          commit("setUser", user);
          router.push("/");
          console.log(user);
          console.log(state.user);
        })
        .catch(err => {
          commit("setIsAuthenticated", false);
          commit("setName", "");
          commit("setUser", "");
          console.log(err.code);
          if (err.code=='auth/user-not-found') {
            commit('setIsEmailRegistered', true)
          }
          else if (err.code=='auth/wrong-password') {
            commit('setIsPasswordCorrect', true)
          }
          


        });
    },

    userSignOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setIsAuthenticated", false);
          commit("setName", "");
          router.push("/");
        })
        .catch(() => {
          commit("setIsAuthenticated", false);
        });
    },

    addFavorites({ state, dispatch }, item) {
      firebase
        .firestore()
        .collection(state.user.user.uid)
        .add({
          item
        })
        .then(function(docref) {
          console.log("Document successfully written:", docref.id);
          item.docId = docref.id;
          console.log(item);
          // dispatch('getFavorites');
          firebase
            .firestore()
            .collection(state.user.user.uid)
            .doc(docref.id)
            .set({ item })
            .then(function() {
              dispatch("getFavorites");
            });
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },

    getFavorites({ state, commit }) {
      firebase
        .firestore()
        .collection(state.user.user.uid)
        .get()
        .then(querySnapshot => {
          let newFav = [];
          querySnapshot.forEach(doc => {
            console.log(`${doc.id} => ${doc.data()}`);
            newFav.push(doc.data());
          });
          commit("setFavorites", newFav);
          console.log(state.favorites);
        });
    },

    delFavorites({ state, dispatch }, item) {
      firebase
        .firestore()
        .collection(state.user.user.uid)
        .doc(item)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
          dispatch("getFavorites");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    },

    beerDetails({ commit, state }, item) {
      router.push("/details");
      commit("setBeerDetails", item);
    }
  },
  getters: {
    beerData: state => {
      return state.beers;
    },

    beerDetails: state => {
      return state.beerDetails;
    }
  }
});
