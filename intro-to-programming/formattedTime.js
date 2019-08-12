const formattedTime = (num) => {
    const iter = (hours, mins) => {
        if (mins < 60) {
            const formattedHours = hours > 9 ? hours : `0${hours}`;
            const formattedMinutes = mins > 9 ? mins : `0${mins}`;
            return `${formattedHours}:${formattedMinutes}`;
        }
        return iter(hours + 1, mins - 60);
    }
    
    return iter(0, num);
}