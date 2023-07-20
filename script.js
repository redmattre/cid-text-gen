/// Add a variable to store the user's input
let userInput = '';

// Function to handle the click event on the "container" div
function handleContainerClick() {

    userInput = prompt('Scrivi il tuo messaggio anonimo:');

    console.log('User Input:', userInput);
}

// Wait for the DOM to load
$(document).ready(function() {
    // Get the "container" div using its ID and add a click event listener
    $('#click-area').click(handleContainerClick);
});

jQuery(function ($) {

    if ($('marquee').length == 0) {
        return;
    }
  
    $('marquee').each(function () {
        
        let direction = $(this).attr('direction');
        let scrollamount = $(this).attr('scrollamount');
        let scrolldelay = $(this).attr('scrolldelay');
  
        let newMarquee = $('<div class="new-marquee"></div>');
        $(newMarquee).html($(this).html());
        $(newMarquee).attr('direction',direction);
        $(newMarquee).attr('scrollamount',scrollamount);
        $(newMarquee).attr('scrolldelay',scrolldelay);
        $(newMarquee).css('white-space', 'nowrap');
  
        let wrapper = $('<div style="overflow:hidden"></div>').append(newMarquee);
        $(this).replaceWith(wrapper);
  
    });
  
    function start_marquee() {
  
        let marqueeElements = document.getElementsByClassName('new-marquee');
        let marqueLen = marqueeElements.length
        for (let k = 0; k < marqueLen; k++) {
  
            
            let space = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            let marqueeEl = marqueeElements[k];
  
            let direction = marqueeEl.getAttribute('direction');
            let scrolldelay = marqueeEl.getAttribute('scrolldelay') * 100;
            let scrollamount = marqueeEl.getAttribute('scrollamount');
  
            let marqueeText = marqueeEl.innerHTML;
  
            marqueeEl.innerHTML = marqueeText + space;
            marqueeEl.style.position = 'absolute'; 
  
            let width = (marqueeEl.clientWidth + 1);
            let i = (direction == 'rigth') ? width : 0;
            let step = (scrollamount !== undefined) ? parseInt(scrollamount) : 3;
  
            marqueeEl.style.position = '';
            marqueeEl.innerHTML = marqueeText + space + marqueeText + space;
  
            setInterval( function () {
  
                if ( direction.toLowerCase() == 'left') {
    
                    i = i < width ? i + step : 1;
                    marqueeEl.style.marginLeft = -i + 'px';
  
                } else {
  
                    i = i > -width ? i - step : width;
                    marqueeEl.style.marginLeft = -i + 'px';
  
                }
  
            }, scrolldelay);
  
        }
    }
  
    start_marquee ();
  });