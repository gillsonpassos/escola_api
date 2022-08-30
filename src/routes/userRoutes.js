import { Router } from "express";
import userController from "../controllers/UserController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Não deveria EXISTIR
// router.get("/", userController.index); // Lista usuários
//router.get("/:id", userController.show); // Lista usuário

router.post("/", userController.store);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;

/*
index --> lista todos os usuários. --> geralmente é GET
store/create --> cria um novo usuário --> POST
delete --> apaga um usuário. --> DELET
show --> mostra um usuário. --> GET
update --> atualiza um usuário. --> PATCH ou PUT.
*/
