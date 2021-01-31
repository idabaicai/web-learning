// 商品数据

let data = [{
        id: 1,
        name: '小米',
        price: 3999
    },
    {
        id: 2,
        name: '苹果',
        price: 6999
    },
    {
        id: 3,
        name: '华为',
        price: 4999
    },
    {
        id: 4,
        name: 'OPPO',
        price: 4999
    },
    {
        id: 5,
        name: 'VIVO',
        price: 2999
    },
    {
        id: 6,
        name: '苹果',
        price: 5999
    }
];
// 渲染数据 
// 1. 获取元素
let tbody = document.querySelector('tbody');

data.forEach(value => {
    // 方法1
    // let tr = '<tr><td>' + value.id + '</td><td>' + value.name + '</td><td>' + value.price + '</td></tr>'
    // tbody.insertAdjacentHTML('beforeend', tr);

    // 方法2
    let tr = document.createElement('tr');
    tr.innerHTML = '<td>' + value.id + '</td><td>' + value.name + '</td><td>' + value.price + '</td>'
    tbody.appendChild(tr);

});
setData(data);


// 渲染数据
function setData(data) {
    tbody.innerHTML = '';
    data.forEach(value => {
        let tr = document.createElement('tr');
        tr.innerHTML = '<td>' + value.id + '</td><td>' + value.name + '</td><td>' + value.price + '</td>'
        tbody.appendChild(tr);
    });
}


// 按价格查询
let searchPriceBtn = document.querySelector('.search button');
searchPriceBtn.addEventListener('click', () => {
    let minPrice = document.querySelector('#min-price').value || 0;
    let maxPrice = document.querySelector('#max-price').value || 999999;
    // 根据价格查询商品
    let newData = data.filter(value => {
            return value.price >= minPrice && value.price <= maxPrice;
        })
        // 重新渲染
    setData(newData);
})


// 按名称查询
let searchNameBtn = document.querySelector('.search-name button');
searchNameBtn.addEventListener('click', () => {
    let itemName = document.querySelector('#name').value;
    let new1Data = data.filter(value => {
        return value.name == itemName;
    });
    // 重新渲染
    setData(new1Data);
})