const router = require("express").Router();
const userController = require("../../controllers/userController");

router
    .route("/")
    .post(userController.create);

router
    .route("/:id")
    .delete(userController.remove);

router
    .route("/login")
    .post(userController.login);

router
    .route("/login")
    .get(userController.checkSession);

router
    .route("/logout")
    .post(userController.logout);

 router
    .route("/:id")
    .put(userController.update);

router
    .route("/:id")
    .get(userController.get);
    
module.exports = router;