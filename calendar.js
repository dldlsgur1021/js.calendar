document.addEventListener('DOMContentLoaded', function() {
  const makeCalendar = (date) => {
    const currentYear = new Date(date).getFullYear();
    const currentMonth = new Date(date).getMonth() + 1;

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const lastDay = new Date(currentYear, currentMonth, 0).getDate();

    const limitDay = firstDay + lastDay;
    const nextDay = Math.ceil(limitDay / 7) * 7;

    let htmlDummy = '';

    for (let i = 0; i < firstDay; i++) {
      htmlDummy += `<div class="noColor"></div>`;
    }

    for (let i = 1; i <= lastDay; i++) {    
      htmlDummy += `<div>${i}</div>`;
    }

    for (let i = limitDay; i < nextDay; i++) {
      htmlDummy += `<div class="noColor"></div>`;
    }

    document.querySelector('.dateBoard').innerHTML = htmlDummy;
    document.querySelector('.dateTitle').innerText = `${currentYear}년 ${currentMonth}월`;
  }

  const currentDate = new Date(); // 현재 날짜를 기준으로 설정
  makeCalendar(currentDate);

  // 이전달 이동
  document.querySelector(`.prevDay`).onclick = () => {
    const prevDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    makeCalendar(prevDate);
  }

  // 다음달 이동
  document.querySelector(`.nextDay`).onclick = () => {
    const nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    makeCalendar(nextDate);
  }
});