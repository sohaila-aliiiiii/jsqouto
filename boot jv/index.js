var arr=['Be yourself everyone else is already taken',' So many books so little time.',
'You only live once, but if you do it right, once is enough','Be the change that you wish to see in the world.',
' If you tell the truth, you dont have to remember anything.',
'A friend is someone who knows all about you and still loves you.',
'To live is the rarest thing in the world. Most people exist, that is all.',
'Without music, life would be a mistake.',
'I am so clever that sometimes I dont understand a single word of what I am saying'
]
function New()
{
var x=document.getElementById("quo").innerHTML
var random=Math.floor(Math.random()* arr.length)  
 while(arr[random]===x)
    {
        random=Math.floor(Math.random()* arr.length)
    }


 document.getElementById("quo").innerHTML=arr[random]


}