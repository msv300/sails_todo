module.exports.routes = {

  "GET     /": { view: "homepage" },

  "POST    /todo": "TodoController.create",
  "GET     /todo": "TodoController.fetch",
  "PUT     /todo/:id": "TodoController.update",
  "GET     /todo/:id": "TodoController.findOne",
  "DELETE  /todo/:id": "TodoController.delete",

};
