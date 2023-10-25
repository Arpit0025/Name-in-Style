var cubes = 'ARPIT';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: yellow; color: red";
    console.log("%c" + cubes[i], styles);}
