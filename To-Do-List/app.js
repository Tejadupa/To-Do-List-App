let todo = [];
// let req = prompt("Enter the request");
// console.log("req")
let flag = false;
let name = 'Unknown';
while (flag) {
    let req = prompt("Enter the request")
    console.log(`Your request : ${req}`)
    switch (req) {
        case 'List':
            let i = 0;
            for (task of todo) {
                console.log(i, task);
                i += 1;
            }
            alert("check once all are listed below");
            break;

        case 'add':
            let newreq = prompt("Enter the task to be added : ")
            todo.unshift(newreq);
            console.log(`${newreq} is added`)
            break;
        case 'delete':
            let indx = Number(prompt("Enter indx : "));
            todo.splice(indx, 1);
            break;
        case 'quit':
            flag = false;
            break
        default:
            alert("Entered wrong request!")
    }
}