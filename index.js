const calcButton = document.querySelector('#calcButton')

function autoSetTodayDate(){
  let myDate = document.querySelector('#secondDateInput');
  let today = new Date();
  myDate.value = today.toISOString().substring(0, 10); 
}

function calculateReturn(event){
  event.preventDefault();
  showOutputfield()
 
  const firstDate = document.querySelector('#firstDateInput').value;
  const secondDate = document.querySelector('#secondDateInput').value;
  const minWeeksInput = document.querySelector('#minWeeks').value;
  const maxWeeksInput = document.querySelector('#maxWeeks').value
  let firstDateValue = new Date(firstDate);
  let secondDateValue = new Date(secondDate);
  let datesSpanMilliseconds = secondDateValue.getTime() - firstDateValue.getTime();
  let seconds = datesSpanMilliseconds/1000;
  let minutes = seconds/60;
  let hours = minutes/60;
  let days = hours/24;
  let weeks = days/7;
  let entireWeeks = Math.trunc(weeks);
  let remainOfWeek = weeks - entireWeeks;
  let remainOfWeekToDays = remainOfWeek * 7;
     
  let minDays = weekToDays(minWeeksInput);
  let maxDays = weekToDays(maxWeeksInput);
  
  let minReturnDate = new Date(firstDate)
  minReturnDate.setDate(minReturnDate.getDate() + minDays);
  
  let maxReturnDate = new Date(secondDate)
  maxReturnDate.setDate(maxReturnDate.getDate() + maxDays);
  
  const outputField = document.querySelector('#outputField');
  outputField.innerHTML = `<p>Se Passaram <span class="outputHighlightNumber">${entireWeeks}</span> semana(s) e <span class="outputHighlightNumber">${Math.round(remainOfWeekToDays)}</span> dia(s) desde a ultima menstruação.
  O ultrason deve ser agendado entre os dias <span class="outputHighlightNumber">${minReturnDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'})}</span> e <span class="outputHighlightNumber">${maxReturnDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'})}.</span></p>` 
}

function weekToDays(weeks){
  return weeks * 7;
}

function hideOutputField(){
  const outputField = document.querySelector('#outputField');
  outputField.classList.add('hideOutputField');
}

function showOutputfield(){
  const outputField = document.querySelector('#outputField');
  outputField.classList.remove('hideOutputField');
}


