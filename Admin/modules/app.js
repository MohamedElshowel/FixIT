// $(function () {
    var requests = [];
    requests.push({
        type: "Windows",
        quantity: 7,
        address: ""
    });

    requests.push({
        type: "Doors",
        quantity: 2,
        address: ""
    });

    requests.push({
        type: "Curtain Walls",
        quantity: 1,
        address: ""
    })





    // var loader = new THREE.OBJLoader();

    // loader.load('D:/HackZurich/Junction2019/FixIT/Admin/models/teapot.obj', function (gltf) {
    //     scene.add(gltf.scene);
    // }, undefined, function (error) {
    //     console.error(error);
    // });


    // Fill the requests list
    $("#requestsList").kendoListView({
        dataSource: requests,
        template: kendo.template($("#reqTemplate").html())
    });

// });