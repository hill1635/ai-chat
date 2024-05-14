import axios from "axios";

export default {
    create: function(userData) {
        return axios.post("api/users/", userData);
    },
    get: function(id) {
        return axios.get("api/users/" + id);
    },
    delete: function(id) {
        return axios.delete("api/users/" + id);
    },
    login: function(userData) {
        return axios.post("/api/users/login", userData);
    },
    logout: function() {
        return axios.post("/api/users/logout");
    },
    checkSession: function() {
        return axios.get("/api/users/login");
    },
    update: function(id, userData) {
        return axios.put("/api/users/" + id, userData);
    }
};