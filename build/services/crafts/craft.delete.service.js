"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCraftService = void 0;
const errors_1 = require("../../validation/errors");
const CraftModel = require("../../models/crafts/craft.model");
//Remove craft service
const deleteCraftService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield CraftModel.findByIdAndRemove(id);
    }
    catch (error) {
        throw new Error(errors_1.CRAFT_ERRORS.DELETE_ERROR);
    }
});
exports.deleteCraftService = deleteCraftService;
