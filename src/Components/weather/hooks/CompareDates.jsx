const CompareDates = (dateString) => {
    const currentDate = new Date();
    const targetDate = new Date(dateString);
  
    return (
      currentDate.getFullYear() === targetDate.getFullYear() &&
      currentDate.getMonth() === targetDate.getMonth() &&
      currentDate.getDate() === targetDate.getDate() &&
      currentDate.getTime() === targetDate.getTime()
    );
  }
  

export default CompareDates
