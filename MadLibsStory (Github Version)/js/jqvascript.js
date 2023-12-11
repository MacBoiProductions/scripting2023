console.log("Is this working?")

function write() {
    console.log("Inside the write function")

    var one = document.getElementById('1').value; console.log(one);
    var two = document.getElementById('2').value; console.log(two);
    var three = document.getElementById('3').value; console.log(three);
    var four = document.getElementById('4').value; console.log(four);
    var five = document.getElementById('5').value; console.log(five);
    var six = document.getElementById('6').value; console.log(six);
    var seven = document.getElementById('7').value; console.log(seven);
    var eight = document.getElementById('8').value; console.log(eight);
    var nine = document.getElementById('9').value; console.log(nine);
    var ten = document.getElementById('10').value; console.log(ten);
    var eleven = document.getElementById('11').value; console.log(eleven);
    var twelve = document.getElementById('12').value; console.log(twelve);
    var twelvepointfive = document.getElementById('12.5').value; console.log(twelvepointfive);
    var fourteen = document.getElementById('14').value; console.log(fourteen);
    var fifteen = document.getElementById('15').value; console.log(fifteen);
    var sixteen = document.getElementById('16').value; console.log(sixteen);
    var seventeen = document.getElementById('17').value; console.log(seventeen);
    var eighteen = document.getElementById('18').value; console.log(eighteen);
    var nineteen = document.getElementById('19').value; console.log(nineteen);

    var choice;
    if (document.querySelector('input[name="choice"]:checked') !== null) {
      choice = document.querySelector('input[name="choice"]:checked').value;
    } else {
      choice = "";
    }
    console.log(choice);

    document.getElementById('output').innerHTML = "<p>One day, "+one+" went outside to "+two+" her "+three+". She walked down her "+four+" neighbourhood and noticed all of the "+five+" on the sidewalk. She walked near a "+six+" and saw lots of kids "+seven+" and she "+eight+" at the sight of them. As "+one+" continued her "+nine+" walk with her beloved pet, the ground cracked under her feet. “Oh no!” she "+ten+". “It's a/an "+eleven+"!” She picked up her pet, who was "+twelve+" due to noticing a change in the environment around them as the ground cracked under her feet. She grabbed her "+three+" in one arm and grabbed onto a "+twelvepointfive+" for dear life with her free hand as the wind tried to blow her away! This storm was not going to let up anytime soon. "+one+" prayed that she was going to "+fourteen+" the storm as she held onto the same "+twelvepointfive+". Just when she thought she wasn't going to make it, the storm suddenly "+fifteen+". She was very shaken, and sat down on the "+sixteen+" to recollect her senses. Her "+three+" whimpered in her "+seventeen+". She felt bad for the poor thing, and did her best to comfort "+choice+" despite feeling very scared herself. Later that day, when she got home, she watched the news, and saw that "+eighteen+" people had died in that storm. "+one+" considered herself very lucky to have survived such a "+nineteen+" event!</p>";
}
