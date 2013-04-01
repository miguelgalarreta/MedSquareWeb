/* 
 * Tests for the MedSquare Web
 */
test( "test true", function() {
ok( 1 == "1", "Passed!" );
});

test("sliceIndex",function(){
    //sliceIndex(x, y, ny, nx, gap, volumDimens)
    ok(sliceIndex(0, 0, 3, 3, -1, 10)==0,"Passed!");
    ok(sliceIndex(2, 2, 3, 3, -1, 10)==9,"Passed!");
    ok(sliceIndex(1, 0, 3, 3, 1, 10)==1,"Passed!");
    ok(sliceIndex(2, 0, 3, 3, 1, 10)==2,"Passed!");
    ok(sliceIndex(2, 3, 4, 3, -1, 10)==9,"Passed!");
    ok(sliceIndex(4, 2, 4, 3, 1, 12)==10,"Passed!");
})


test("loadParammeters",function(){
    sessionStorage.setItem("test", "testValue");    
    sessionStorage.setItem("test2", 12345);    
    ok(loadParammeter("test2")=="12345","Passed!");
    ok(loadParammeter("test")==="testValue","Passed!");    
})

test("loadWebFile",function(){
    loadWebFile("path");
    ok(loadParammeter("volumePath")=="path","Passed!")
})


test( "load file", function(){
    var file='http://x.babymri.org/?vol.nrrd'
    loadWebFile(file); 
    ok( file==sessionStorage.getItem("volumePath") ,"Passed!");
});

//não pode ser criado porque para criar um render precisa de um container (GUI)
//test("create Renderer",function()
//{ 
//    volumet = new X.volume();
//    create2DRender
//});