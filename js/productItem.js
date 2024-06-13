const element = document.getElementById('productItem');

const arr = JSON.parse(localStorage.getItem('item'));
var sum = 0

const handleDelete = (index) => {
    arr.splice(index, 1);
    localStorage.setItem('item', JSON.stringify(arr))
    location.reload()
};

arr.forEach((p, index) => {
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    
    let img = document.createElement('img')
    let src = p.pathImg
    img.src = src

    let name = document.createTextNode(p.name);
    let price = document.createTextNode(p.price);
    let quantity = document.createTextNode(p.quantity);
    let dlt = document.createTextNode('X');

    td1.appendChild(name);
    td2.appendChild(price);
    td3.appendChild(quantity);
    td4.appendChild(dlt);
    td5.appendChild(img)

    console.log(td5)

    td4.id = `dlt${index}`;

    // Correct the event listener assignment
    td4.addEventListener('click', () => handleDelete(index));

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);

    element.appendChild(tr);

    sum = sum + parseInt(p.price) 
});

const s = document.createTextNode(sum)
document.getElementById('sum').appendChild(s)