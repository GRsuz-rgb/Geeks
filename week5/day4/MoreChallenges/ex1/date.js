
export default function amountOfTime(date){
    const today = new Date(date);
    const nextDate = new Date (today.getFullYear() + 1, 0, 1);

    const diffInMs = Math.abs(nextDate - today);
    
    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffInMs / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diffInMs / (1000 * 60)) % 60);
    const seconds = Math.floor((diffInMs / 1000) % 60);

    return `The time left until 1st January is ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`;
}