export interface IActionInitial { type: string }
export interface IActionWithData { type: string, payload: {[key:string]: any} }
export interface IActionBoolean { type: string, payload: boolean }
export interface IActionOnError { type: string, error: Error }