function createImagesPreviewer(selector, items) {
    var element = document.querySelector(selector);
    var leftDiv = document.createElement('div');
    // leftDiv.style.float = 'right';
    element.appendChild(leftDiv);
    element.style.width = '200px';
    element.style.height = '350px';
    element.style.marginLeft = '350px';
    element.style.overflowY = 'scroll';
    var animals = items;
    var div = document.createElement('div');
    var search = document.createElement('input');
    search.setAttribute('placeholder', 'Filter')
    div.style.overflow = 'auto';
    for (var i in animals) {
        var span = document.createElement('span');
        span.style.listStyleType = 'none';
        span.style.margin = '5px';
        span.style.display = 'block';
        span.style.width = '150px';
        span.style.height = '150px';
        span.style.position = 'relative';
        span.style.textAlign = 'center';
        span.innerHTML = animals[i].title;
        var img = document.createElement('img');
        img.src = animals[i].url;
        img.style.width = '100px';
        img.style.height = '100px';
        img.style.borderRadius = '10px';
        img.style.position = 'absolute';
        img.style.left = '30px';
        img.style.top = '20px';
        span.appendChild(img);
        div.appendChild(span);
    }
    div.addEventListener('mouseover', function(ev) {
        var event = ev.target;
        event.style.backgroundColor = '#C9CBD2';
    })
    div.addEventListener('mouseout', function(ev) {
        var event = ev.target;
        event.style.backgroundColor = '#FFF';
    });
    div.addEventListener('click', function(ev) {
        var event = ev.target;
        var clone = event.cloneNode();
        var evText = event.parentNode.innerText;
        console.log(event.parentNode.innerText);
        if (clone instanceof HTMLImageElement) {
            leftDiv.innerHTML = '';
            clone.style.width = '300px';
            clone.style.height = '300px';
            clone.style.border = '1px solid #CACACA';
            clone.style.marginTop = '30px';
            clone.innerHTML = event.innerHTML;
            var title = document.createElement('h2');
            title.innerHTML = evText;
            leftDiv.appendChild(clone);
            leftDiv.appendChild(title);
        };
    });
    element.appendChild(search);
    element.appendChild(div);
}
