import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { DileDateWithoutCalendar } from "../dile-date-without-calendar";
import '../dile-date-without-calendar.js';

import readme from '../README.md';
import { action } from '@storybook/addon-actions';

storiesOf('dile-date-without-calendar', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => html`<dile-date-without-calendar value="1977-11-15"></dile-date-without-calendar>`
    ,{ notes: { markdown: readme } })
  .add(
    'Disabled',
    () => html`<dile-date-without-calendar value="1977-11-15" disabled></dile-date-without-calendar>`
    ,{ notes: { markdown: readme } })
  .add(
    'Readonly',
    () => html`<dile-date-without-calendar value="1977-11-15" readonly></dile-date-without-calendar>`
    ,{ notes: { markdown: readme } })
  .add(
    'Show months names in Popup',
    () => html`<dile-date-without-calendar value="1977-11-15" options='{"monthsNames":true}'></dile-date-without-calendar>`
    ,{ notes: { markdown: readme } })
  .add(
    'Different language',
    () => html`<dile-date-without-calendar value="1977-11-15" options='{"monthsNames":true,"locale":{"months":["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],"daysTag":"D&iacute;as","monthsTag":"Meses","yearsTag":"Años"}}'></dile-date-without-calendar>`
    ,{ notes: { markdown: readme } })
  .add(
    'Customized',
    () => html`
        <style>
        
            .date1{
                
                /*Input*/
                
                --dileDateWithoutCalendar-InputboxFocus-border-color: #000;
                --dileDateWithoutCalendar-InputboxFocus-box-shadow: rgba(43,58,66,0.25);
                
                --dileDateWithoutCalendar-Inputbox-border-width: 2px; 
                --dileDateWithoutCalendar-Inputbox-border-color: #00C000;
                --dileDateWithoutCalendar-Inputbox-background-color: #000;
                --dileDateWithoutCalendar-Inputbox-text-color: #00C000;
                
                --dileDateWithoutCalendar-field-background-color: #00FF00;
                --dileDateWithoutCalendar-field-text-color: #000;
                
                
                --dileDateWithoutCalendar-field-color: #00FF00;
                
                --dileDateWithoutCalendar-buttons-color: #00FF00;
                
                --dileDateWithoutCalendar-InputboxFocus-box-shadow-width: .2rem;
                --dileDateWithoutCalendar-InputboxErr-box-shadow-width: .3rem;
                
                /*Popup*/
                
                --dileDateWithoutCalendar-PopupFieldMonth-text-align: left;
                --dileDateWithoutCalendar-Popup-background-color: #000;
                --dileDateWithoutCalendar-Popupfield-text-color: #00C000;
                --dileDateWithoutCalendar-PopupButtons-color: #00FF00;

                --dileDateWithoutCalendar-Popupfield-hover-background-color: #00C000;
                --dileDateWithoutCalendar-Popupfield-hover-text-color: #000;
                
                --dileDateWithoutCalendar-Popupfield-active-background-color: #00FF00;
                --dileDateWithoutCalendar-Popupfield-active-text-color: #000;
                
                --dileDateWithoutCalendar-PopupFieldBox-hover-border-color: #00FF00;            
                --dileDateWithoutCalendar-PopupFieldBox-hover-box-shadow: rgba(0,192,0,.25);
                --dileDateWithoutCalendar-PopupfieldTag-text-color: #00FF00;
                
                --dileDateWithoutCalendar-PopupFieldMonth-min-width: 87px;
                --dileDateWithoutCalendar-PopupFieldDay-min-width: 40px;
                
            }
        
        </style>
        <dile-date-without-calendar class="date1" value="1977-11-15" options='{"monthsNames":true}'></dile-date-without-calendar>
        
    `,{ notes: { markdown: readme } })
  .add(
    'Events, Change and Error',
    () => html `

        <dile-date-without-calendar 
            
           @dileDateWithoutCalendar-change=${(event) =>{
        
              action('dileDateWithoutCalendar-change')(event.detail)
              console.log(event.detail);  
        
        }} @dileDateWithoutCalendar-error=${(event)=>{

              action('dileDateWithoutCalendar-error')(event.detail)
              console.log(event.detail);
              
        }} value="1977-11-15" options='{"monthsNames":true}'></dile-date-without-calendar>
    `,{ notes: { markdown: readme } });

