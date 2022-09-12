function doitien() {
    let tien = document.getElementById("tien").value;
    let FromC = document.getElementById("from").value;
    let To = document.getElementById("to").value;
    let doi;
    if( FromC == 'USD' && To == 'VND'){
        doi = 'Số tiền sau khi đổi là: ' + (tien*23000) + 'Đ';
    }
    else if(FromC == 'VND' && To == 'EUR'){
        doi = 'Số tiền sau khi đổi là: ' + (tien/15000) + '€';
    }
    else if(FromC == 'EUR' && To == 'USD'){
        doi = 'Số tiền sau khi đổi là: ' + (tien*0.5) + '$';
    }     
    else if(FromC == 'EUR' && To == 'VND'){
        doi = 'Số tiền sau khi đổi là: ' + (tien*15000) + 'Đ';
    }     
    else if(FromC == 'VND' && To == 'USD'){
        doi = 'Số tiền sau khi đổi là: ' + (tien/23000) + '$';
    }     
    else if(FromC == 'USD' && To == 'EUR'){
        doi = 'Số tiền sau khi đổi là: ' + (tien/0,5) + '€';
    }     
    
    else if(FromC == 'VND'){
        doi = 'Số tiền sau khi đổi là: ' + tien + 'Đ'
    }
    else if(FromC == 'USD'){
        doi = 'Số tiền sau khi đổi là: ' + tien + '$'
    }
    else{
        doi = 'Số tiền sau khi đổi là: ' + tien + '€'
    }
    document.getElementById("doi").innerHTML = doi;
}