var name0=new Array(3);
var name1=new Array(3);
for(var i=0;i<=2;i++)
{
    name0[i]=window.prompt("Enter your name");
}
for(var i=0;i<=2;i++)
{
    name1[i]=parseFloat(name0[i]);
    document.writeln(name1[i]);
}