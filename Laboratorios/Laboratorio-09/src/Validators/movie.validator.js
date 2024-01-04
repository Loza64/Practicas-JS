const { param, body,check } = require("express-validator");

const createMovieValidator = [
 check('title')
   .isString().withMessage("title should be a string")
   .trim()
   .isLength({ min: 2 }).withMessage("title should have at least 2 characters"),

 check('review')
   .isString().withMessage("review should be a string")
   .trim()
   .isLength({ min: 8, max: 240 })
   .withMessage("review should have between 8 and 240 characters"),

 check('cover')
   .isString().withMessage("cover should be a string")
   .isURL().withMessage("cover should be a valid URL"),

 check('stars')
   .isNumeric().withMessage("stars should be a number")
   .isInt({ min: 0, max: 5 }).withMessage("stars should be between 0 and 5"),

 check('favorite')
   .optional()
   .isBoolean().withMessage("favorite should be a boolean"),
];

const updateMovieValidator = [
 check('title')
   .optional()
   .isString().withMessage("title should be a string")
   .trim()
   .isLength({ min: 2 }).withMessage("title should have at least 2 characters"),

 check('review')
   .optional()
   .isString().withMessage("review should be a string")
   .trim()
   .isLength({ min: 8, max: 240 })
   .withMessage("review should have between 8 and 240 characters"),

 check('cover')
   .optional()
   .isString().withMessage("cover should be a string")
   .isURL().withMessage("cover should be a valid URL"),

 check('stars')
   .optional()
   .isNumeric().withMessage("stars should be a number")
   .isInt({ min: 0, max: 5 }).withMessage("stars should be between 0 and 5"),
];

const idInParams = [
 param("id")
   .notEmpty().withMessage("id field is required")
   .isMongoId().withMessage("id must be mongo id")
]

module.exports = { idInParams, createMovieValidator, updateMovieValidator };