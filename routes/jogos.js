const express = require("express");
const router = express.Router();

const gameController =
  require("../controllers/gameController");

  router.get(
  "/",
  gameController.game_list
);

router.get(
  "/novo",
  gameController.game_create_get
);

router.post(
  "/novo",
  gameController.game_create_post
);

router.get(
  "/:id/editar",
  gameController.game_update_get
);

router.post(
  "/:id/editar",
  gameController.game_update_post
);

router.get(
  "/empresas/nova",
  gameController.company_create_get
);

router.post(
  "/empresas/nova",
  gameController.company_create_post
);

router.get(
  "/empresas/:id/editar",
  gameController.company_update_get
);

router.post(
  "/empresas/:id/editar",
  gameController.company_update_post
);

module.exports = router;