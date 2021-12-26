/* Rutas de eventos / Events
host + /api/events */

const { Router } = require("express");
const { check } = require("express-validator");

const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
	getEventos,
	crearEventos,
	actualizarEventos,
	eliminarEventos,
} = require("../controllers/events");

const router = Router();

// Todas tiene que pasar por la validadcion del token
router.use(validarJWT);

// obtener eventos

//      router.get("/", validarJWT, getEventos);
router.get("/", getEventos);

// craer nuevos  eventos

router.post(
	"/",

	[
		check("title", "El titulo es obligatorio").not().isEmpty(),
		check("start", "Fecha de inicio es obligatoria").custom(isDate),
		check("end", "Fecha de finalización es obligatoria").custom(isDate),
		validarCampos,
	],
	crearEventos
);

// actualizar  eventos

router.put(
	"/:id",

	[
		check("title", "El titulo es obligatorio").not().isEmpty(),
		check("start", "Fecha de inicio es obligatoria").custom(isDate),
		check("end", "Fecha de finalización es obligatoria").custom(isDate),
		validarCampos,
	],
	actualizarEventos
);

// eliminar  eventos

router.delete("/:id", eliminarEventos);

module.exports = router;
