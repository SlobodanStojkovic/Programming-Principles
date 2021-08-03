export const printDate = (message) => log(message, new Date());

export const log = (message, timestamp) => console.log(`${timestamp.toString()}: ${message}`);

//we write export before function we want to export, then in file where we want to import this we write import 