export function getCurrentTime(){
let d = new Date();
let hours = d.getHours();
 hours = hours > 9 ? d.getHours() : "0"+d.getHours;  
let min = d.getMinutes();
 min= d.getMinutes() > 9 ? d.getMinutes() : "0"+d.getMinutes();  

 return hours+":"+min;
}

export function getCurrentDate(){

}