const registerUser = () => {
    db.collection("customerinfofinal").add({
            name: prompt('Enter Name', 'h'),
            email: prompt('Enter email', 'rashisaxena@uheui.com'),
            ident: parseInt(prompt('Enter Id', 1212)),
            balance: parseInt(prompt('Enter Balance', 1212))
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

};




db.collection("customerinfofinal").get().then((querySnapshot) => {

    querySnapshot.forEach((doc) => {
        i = doc.data().ident - 1;
        let r = doc.data();
        document.querySelector('#t' + (i + 1) + ' td:nth-child(' + (1) + ')').innerHTML = (r.ident);

        document.querySelector('#t' + (i + 1) + ' td:nth-child(' + (2) + ')').innerHTML = (r.name);

        document.querySelector('#t' + (i + 1) + ' td:nth-child(' + (3) + ')').innerHTML = (r.email);

        document.querySelector('#t' + (i + 1) + ' td:nth-child(' + (4) + ')').innerHTML = (r.balance);



        console.log(doc.id)
        console.log(r.name)
        console.log(r.ident)
    });
});
var p1id, p2id, b1, b2;
const arr = ["03mwHHARdwyPrCR2FkA2", "0BPVd94WLka2pSFWta7u", "0w43zVks5WGJ1zOGcQmN", "EbfKwcUXqVUIfNOXeNpp", "J7vYEkyGm1sJ9TJkPYFf", "K4W06XenhIiWhbu6HAl1", "Osi9UC3DJHMlNdSxA9gn", "Q92leoSWIV3WM3kYA1RP", "ZxEO3YBV8nEjNEDU6DOD", "sdVgY1aFXI8aQXwfOAu7"]
var balance_initial
const startTransaction = (cid) => {
    var parentElementid = '#t' + cid;
    balance_initial = parseInt(document.querySelector(parentElementid + ' td:nth-child(4)').innerHTML)
    console.log(parentElementid)
    console.log(balance_initial)
    var iddd = arr[parseInt(cid) - 1];
    console.log(iddd)

    document.getElementById('tabl').style.display = 'none';
    document.getElementById('h111').style.display = 'none';
    document.getElementById('table1').style.display = 'none';
    document.getElementById('transaction').style.display = 'block';
    document.getElementById('from').style.display = 'block';
    document.getElementById('from').innerHTML = 'from   ' + document.querySelector(parentElementid + ' td:nth-child(2)').innerHTML;


    p1id = iddd



};
func = (ihtm, id) => {
    mt = parseInt(prompt('Enter money to be given'))
    console.log(ihtm, arr[id])
    p2id = arr[id];
    db.collection("customerinfofinal").doc(p2id).update({
        balance: parseInt(document.querySelector('#t' + (id + 1) + ' td:nth-child(' + (4) + ')').innerHTML) + mt

    });
    db.collection("customerinfofinal").doc(p1id).update({
        balance: balance_initial - mt

    });

    setInterval(() => {
        location.reload();
    }, 2500);

};