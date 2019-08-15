import { html, render } from 'lit-html';
import '../dile-date-without-calendar.js';

render(html`

        <style>
        
            .date3 {
                --dileDateWithoutCalendar-PopupFieldDay-text-align: left;
            }
        
        </style>
    
        <dile-date-without-calendar id="date1" value="1977-11-15" disabled></dile-date-without-calendar>
        <dile-date-without-calendar id="date2" value="1977-11-15" readonly></dile-date-without-calendar>
        
        <dile-date-without-calendar class="date3" value="1977-11-15"></dile-date-without-calendar>

    
`, document.querySelector('#demo'));
