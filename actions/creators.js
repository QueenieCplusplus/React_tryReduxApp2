//2020, 7/21, pm3:40
// use Actions Creator to create Actions;

import {ADD_ON, ADD_LINE, REVIEW, STOP, CONTINUE} from "./types";

export const add_on = ((name)=>{return{ type:ADD_ON, data: name}})();

export const add_line = ((line)=>{return{type: ADD_LINE, data: line}})();

export const read = ((id)=>{return{type: REVIEW, data: id}})();

export const pause = (()=>{return{type: STOP, data:{}}})();

export const keep = (()=>{return{type: CONTINUE, data:{}}})();