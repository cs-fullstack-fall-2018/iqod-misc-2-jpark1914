

function charPercentage() {
    var str = "Hallow World".toLowerCase();
    var arr = str.split('');
    var current = null;
    var count = 0;


    for (var i = 0; i <=arr.length; i++)
    {
        if (arr[i] == " ")
        {
            console.log("")
        }
        else if (arr[i] != current)
        {
            if (count > 0)
            {
                console.log(current + ' is ' + Math.round(((count/arr.length)*100)) + '%');
            }
            current = arr[i];
            count = 1;
        }

        else
        {
            console.log("We have reached the else");
            count++;
        }
    }

}
charPercentage();
