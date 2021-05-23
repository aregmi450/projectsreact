var navstatus = 0;

function openNav()
{
    if(!navstatus)
    {
        //access through classname use dot, access through id use hash
        $('.maindiv').css('width','100%')
        $('li').css('display','block')
        navstatus=1
    }
    //this is logic for closing navbar 
    else{
            $('.maindiv').css('width', '0%')
            $('li').css('display','none')
            navstatus=0
    }
}