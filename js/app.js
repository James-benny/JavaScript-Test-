
// Question One (1)
let quadEqu = equation(1, -6, 5)

function equation (i, j, k){
    let firstEqu = (-j + Math.sqrt(Math.pow(j, 2) - 4 * i * k)) / (2 * i);
    let secondEqu = (-j - Math.sqrt(Math.pow(j, 2) - 4 * i * k)) / (2 * i);
    // console.log(firstEqu)
    // console.log(secondEqu)

    let Equation = [firstEqu, secondEqu];
    console.log(Equation);
}
// End of Question One (1)


// Question Two (2)

let staffsData = [
    {name: 'Ogochukwu', gender: 'Male', role: 'Web-dev. Instructor', complexion: 'Chocolate'},
    {name: 'Joshua', gender: 'Male', role: 'Web-dev. Instructor', complexion: 'Dark'},
    {name: 'Kingsley', gender: 'Male', role: 'Android-dev. Instructor', complexion: 'Dark'},
    {name: 'Ihiechi', gender: 'Male', role: 'Project Manager', complexion: 'Chocolate'},
    {name: 'Ikechukwu', gender: 'Male', role: 'Android-dev. Instructor', complexion: 'Dark'},
    {name: 'Jacob', gender: 'Male', role: 'Data science Instructor', complexion: 'Dark'},
    {name: 'Imaobong', gender: 'Female', role: 'H.R', complexion: 'Fair'},
    
]
console.log(staffsData)

let kodehauz = ""
staffsData.forEach((staff) => {
    const {name, gender, role, complexion} = staff;
    kodehauz +=
    ` <div class="col-lg-4 col-md-6 col-sm-12 gy-4 box1">
    <div class="card border border-0">
        <div class="bg bg-dark text-light first ps-5">
        <h3 class="text-primary mt-3">${name}</h3>
            <p>${gender}</p>
            <p>${role}</p>
            <p>${complexion}</p>
    </div>
    </div>
</div>`;
    }); 
document.querySelector('.loop').innerHTML = kodehauz

// End of Question Two (2)




// Question Three (3)

let circleArea = radius(4)

function radius (r){
    let area = (Math.PI * Math.pow(r, 2))
    let answer = area
    console.log(answer) 
}

// End of Question Three (3)




//Question Four (4)
console.log(Math.pow(8,3))
//End of Question Four (4)




// Question Five (5)
function RanNumber(min, max) {
    let result = Math.floor(Math.random() * max - min) + min
    count.innerHTML = result
}
let count = document.querySelector("#display")

//End of Question Five (5)







