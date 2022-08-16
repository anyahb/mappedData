/*
const mappedData = [
    {
        title: "Книги",
        products: [
                {
                    "name": "Алгоритмы. Построение и анализ. Т. Кормен, Ч. Лейзерсон, Р. Ривест, К. Штайн.",
                    "price": "158",
                }
        ]
    },
    {
        title: "Еда",
        products: [
                {
                    "name": "Овся",
                    "price": 85,
                },
                {
                    "name": "Салат",
                    "price": "5.5",
                },
        ]
    },
    {
        title: "Сувениры",
        products: [
                {
                    "name": "Ручка",
                    "price": "1.55",
                }
        ]
    }
]*/

const goods = [ // товары на складе
    {
        "C": 158,
        "G": 1, // groupId
        "T": 1 // productId
    },
    {
        "C": 85,
        "G": 2,
        "T": 1
    },
    {
        "C": 5.5,
        "G": 2,
        "T": 126
    },
    {
        "C": 1.55,
        "G": 15,
        "T": 64
    }
]

/*const mappedData = goods.map((product) => {
    for (let j = 0; j < product.length; j++){
        console.log(product[j])
    }
})

console.log(mappedData)*/






const names = { // товары которые вообще существуют в каталоге
    "1": {
        "G": "Книги",
        "B": {
            "1": {
                "N": "Алгоритмы. Построение и анализ. Т. Кормен, Ч. Лейзерсон, Р. Ривест, К. Штайн.",
            },
            "7": {
                "N": "Совершенный код. Стив Макконнелл.",
            },
            "3": {
                "N": "JavaScript. Подробное руководство. Дэвид Флэнаган.",
            }
        }
    },
    "2": {
        "G": "Еда",
        "C": 2,
        "B": {
            "1": {
                "N": "Овсяные пирожные с шоколадной прослойкой",
            },
            "126": {
                "N": "Салат из морепродуктов, с огурцами, рукколой и оливками",
            }
        }
    },
    "10": {
        "G": "Запчасти для машин",
        "C": 3,
        "B": {
            "191": {
                "N": "Амортизатор задний CX-5 ",
                "T": 3
            },
            "196": {
                "N": "Фильтр АКПП",
                "T": 3
            }
        }
    },
    "15": {
        "G": "Сувениры",
        "C": 2,
        "B": {
            "64": {
                "N": "Ручка-стилус шариковая",
            },
        }
    }
}

const mappedData = goods.map((item) => {
    const groupId = item.G
    const productId = item.T
    const price = item.C
    const list = names[groupId]
    const produce = list.B[productId].N

    return {
        title: list.G,
        products: [
            {
                "name": produce,
                "price": price
            }
        ]
    }

})
console.log(mappedData)



for(let i = 0; i < mappedData.length; i++){
    const newArr = []
    const newObj = {}
    if (mappedData[i].title.includes("Еда")){
        const arrays = mappedData[i].products
        const findObjects = arrays.find(item => item)
        console.log(findObjects)
        }

}

/*const arr1 = [1,2,3]
const findElem1 = (arr,elem) => {
    return arr.includes(elem)
}

console.log(findElem1(arr1,1))*/

/*const findElem1 = (arr, elem) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === elem){
            return true
        } else {
            return false
        }
    }
}

console.log(findElem1(arr1,1))*/
/*
const arr2 = ['cat', 'kek']

const findElem2 = (arr, elem) => {
    return arr.includes(elem)
}

console.log(findElem2(arr2,"kek"))*/
/*
const arr3 = [
    {
        title: 'Еда'
    },
    {
        title: 'Канцтовары'
    },
]

const findElem3 = (arr, elem) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i].title === elem){
            return true
        } else {
            return false
        }
    }

}
console.log(findElem3(arr3,'Еда'))*/


/*const arr4 = [
    {
        title: 'Еда',
        products: [
            {
                name: 'Салат'
            },
        ]
    },
    {
        title: 'Канцтовары',
        products: [
            {
                name: 'Ручка'
            },
        ]
    },
]*/

/*const arr4 = [
    {
        title: 'Еда',
        products: [
            {
                name: 'Салат'
            },
        ]
    },
    {
        title: 'Канцтовары',
        products: [
            {
                name: 'Ручка'
            },
        ]
    },
]

const emptyList4 = [
    {
        title: 'Еда',
        products: [
            {
                name: 'Краб'
            },
        ]
    },

]*/

// если в emptyList4 есть title: "еда", то добавляем салат в products Еды
/*
const findElem4 = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++){
        if (arr2.some(item => item.title === arr1[i].title)){
            const obj = arr2.find(item => item.title === arr1[i].title)
            obj.products.push(arr1[i].products[i])
        } else {
            arr2.push(arr1[i])
        }
    }
    return arr2
}
console.log(findElem4(arr4, emptyList4));// true
*/







/*const final = mappedData.map((item) => {
    console.log(item.title)

})

console.log(final)*/






/*
const obj = {
        "C": 158,
        "G": 1, // groupId
        "T": 1 // productId
}*/
// Example:
// {
//         title: "Еда",
//         products: [
//                 {
//                     "name": "Овся",
//                     "price": 85,
//                 },
//                 {
//                     "name": "Салат",
//                     "price": "5.5",
//                 },
//         ]
//     }

/*
const findProductInfo = (product) => {
    const groupId = product.G
    const productId = product.T
    const price = product.C

    const list = names[groupId]
    const produce = list.B[productId].N


        return {
            title: list.G,
            products: [
                {
                    "name": produce,
                    "price": price
                }
            ]
        }



})
*/

// console.log("result2", findProductInfo(obj))


