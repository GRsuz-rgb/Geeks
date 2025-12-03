export default function minutesLived(birthDate) {
    const birth = new Date(birthDate);
    const now = new Date();

    const diffInMs = Math.abs(now - birth);
    const minutesLived = Math.floor(diffInMs / (1000 * 60));

    return `You have lived approximately ${minutesLived} minutes.`;
}



