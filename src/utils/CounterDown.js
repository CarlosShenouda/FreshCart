export function CalcTimeLeft(targetDate){
    if(!targetDate) // If no target date is provided, default to the end of today
        targetDate = new Date().setHours(23, 59, 59,999); // Default to end of today if no target date is provided
    const timeLeft = targetDate - new Date().getTime(); // Calculate the time left in milliseconds

    const One_Hour_Ms = 1000 * 60 * 60; // 1 hour in milliseconds
    const One_Minute_Ms = 1000 * 60; // 1 minute in milliseconds
    const One_Second_Ms = 1000; // 1 second in milliseconds

    if(timeLeft > 0) {  
        const hours = Math.trunc(timeLeft / One_Hour_Ms);   
    const minutes = Math.trunc((timeLeft % One_Hour_Ms) / One_Minute_Ms);
    const seconds = Math.trunc((timeLeft % One_Minute_Ms) / One_Second_Ms);

    return { hours , minutes, seconds };
}
else {
    return { hours: 0, minutes: 0, seconds: 0 };
}
}