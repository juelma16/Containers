var counter = 1;
        setInterval(function(){
            document.getElementById('radio' + counter).Checked=true;
            counter++;
            if(counter>4){
                counter=1;

            }
        }, 5000);