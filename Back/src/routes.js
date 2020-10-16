const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");

routes.get("/ideas/remoto", UserController.showAllRemoteIdeas);
routes.get("/ideas", UserController.showAllIdeas);
routes.get("/ideas/:state", UserController.showIdeasPerState);

routes.get("/ideas/id/:id", UserController.showIdeaPerID);
routes.get("/ideas/:type/:category", UserController.showIdeaPerCategory);
routes.post(
  "/ideas",
  UserController.checkOptionalLinkIsEmpty,
  UserController.checkLocationsIsEmpty,
  UserController.createIdea
);
routes.delete("/ideas/:id", UserController.deleteIdea);

module.exports = routes;
