export default function toNextHoliday() {
    const now = new Date();
    const holidayName = "1st Mai";
    const holidayDate = new Date(now.getFullYear(), 4, 1); // May is month 4 (0 indexed)
    if (now > holidayDate) {
        holidayDate.setFullYear(now.getFullYear() + 1);
    }
    
    const diffInMs = Math.abs(holidayDate - now);
    const days = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffInMs / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diffInMs / (1000 * 60)) % 60);
    const seconds = Math.floor((diffInMs / 1000) % 60);

    return `The next holiday is ${holidayName}: after ${days} days, ${hours} hours ${minutes} minutes ${seconds} seconds.`;

}



