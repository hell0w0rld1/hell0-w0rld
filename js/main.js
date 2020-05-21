'use strict';
{
    const ttl = document.getElementById('maintitle');
    // const diary = document.getElementsByClassName('diary');
    const hr = document.getElementsByTagName('hr');

    window.onload = function() {
        // hr.classList.add('changehr');
        ttl.classList.add('changemain');
    }
    window.addEventListener('mousemove', () => {
        
        // diary.classList.add('chgdiary');
    });
}