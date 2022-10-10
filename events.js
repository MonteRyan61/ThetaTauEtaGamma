//This was gained and adapted from the tutorial on https://fullcalendar.io/docs/google-calendar
document.addEventListener('DOMContentLoaded', function() {
  let calendarInHtml = document.getElementById('calendar');

  let calendar = new FullCalendar.Calendar(calendarInHtml, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,listMonth'
    },

    //Created this google apiKey
    googleCalendarApiKey: 'AIzaSyBzKFWBmNN2Nopdrffg8bIR5NV5FTTLQ28',

    // Regent Calendar Id
    events: {
      googleCalendarId: 'regent@etagamma.org'
    },

    eventClick: function(arg) {
      // open the actually google calendar event
      window.open(arg.event.url, '_blank', 'width=700,height=600');

      // prevents the current tab from navigating
      arg.jsEvent.preventDefault();
    }

  });
  calendar.render();
});