function createCalendar(selector, events) {
    var element = document.querySelector(selector);
    element.style.display = 'block';
    element.style.width = '1100px';
    var ul = document.createElement('ul');
    ul.style.listStyleType = 'none';
    element.appendChild(ul);
    var eventDate1 = events[0].date;
    var eventDate2 = events[1].date;

    function over() {
        this.style.backgroundColor = '#999999';
    }

    function out() {
        this.style.backgroundColor = '#CCCCCC';
    }
    
    function click() {
        this.style.backgroundColor = '#FFF';
    }

    for (var i = 1; i < 31; i++) {
        var div = document.createElement('div');
        div.style.position = 'relative';
        div.style.margin = '50px';
        div.style.marginLeft = '0';
        div.style.bottom = '50px';
        div.innerHTML += '&nbsp;';
        div.style.fontSize = '13px';
        if (i == eventDate1) {
            div.innerHTML += events[0].hour + ' ';
            div.innerHTML += events[0].duration + ' ';
            div.innerHTML += events[0].title;
        };
        if (i == eventDate2) {
            div.innerHTML += events[1].hour + ' ';
            div.innerHTML += events[1].duration + ' ';
            div.innerHTML += events[1].title;
        };
        var li = document.createElement('li');
        li.style.width = '140px';
        li.style.height = '20px';
        li.style.border = '1px solid black';
        li.style.backgroundColor = '#CCCCCC';
        li.style.textAlign = 'center';
        li.style.display = 'inline-block';
        switch (i) {
            case (1):
            case (8):
            case (15):
            case (22):
            case (29):
                li.innerHTML += "Sun " + i + " June 2014";
                break;
            case (2):
            case (9):
            case (16):
            case (23):
            case (30):
                li.innerHTML += "Mon " + i + " June 2014";
                break;
            case (3):
            case (10):
            case (17):
            case (24):
                li.innerHTML += "Tue " + i + " June 2014";
                break;
            case (4):
            case (11):
            case (18):
            case (25):
                li.innerHTML += "Wed " + i + " June 2014";
                break;
            case (5):
            case (12):
            case (19):
            case (26):
                li.innerHTML += "Thu " + i + " June 2014";
                break;
            case (6):
            case (13):
            case (20):
            case (27):
                li.innerHTML += "Fri " + i + " June 2014";
                break;
            case (7):
            case (14):
            case (21):
            case (28):
                li.innerHTML += "Sat " + i + " June 2014";
                break;
        }
        
        li.addEventListener('click', click, false);
        li.addEventListener('mouseover', over, false);
        li.addEventListener('mouseout', out, false);
        ul.appendChild(li);
        li.appendChild(div);
    };
}
