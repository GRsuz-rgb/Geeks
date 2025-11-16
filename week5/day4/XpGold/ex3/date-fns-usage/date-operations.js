import { format, addDays } from 'date-fns';
function displayDate() {
    const currentDate = new Date();
    const futureDate = addDays(currentDate, 5);
    const formatted = format(futureDate, "yyyy/MM/dd HH:mm:ss");

    console.log("Formatted date in 5 days:", formatted);
}


export default displayDate; 


