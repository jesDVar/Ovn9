$(document).ready(function(){
    var next = 1;
    $(".add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn = '<input autocomplete="off" class="input form-control" id="field' + next + '" name="field' + next + '" type="text">';
        var newInput = $(newIn);
        var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >-</button></div><div id="field">';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#field" + next).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next);  
        
            $('.remove-me').click(function(e){
                e.preventDefault();
                var fieldNum = this.id.charAt(this.id.length-1);
                var fieldID = "#field" + fieldNum;
                $(this).remove();
                $(fieldID).remove();
            });
    });
    
});



// console.warn('Warning');
// console.error('Error');

/**
 * Bish-Bosch 1.0
 * 
 */


// let number = 1;

// while(number <= 100 )  {
//     if( ((number % 3) === 0) && ((number % 4) === 0 ))  {
//         console.log('Bish-Bosh');
//     }
//     else if ((number % 3) === 0)  {
//         console.log('Bish');
//     }
//     else if ((number % 4) === 0)  {
//         console.log('Bosh');
//     }
//     else  {
//         console.log(number);
//     }
//     number++;
// }


// function showProductId()  {
//     let productId = 12345;
//     console.log(productId);
// }

// showProductId();