// $(document).ready(function(){
//     $('#btn-view-search').click(function(){
//         // $('#searchbar-container-show').toggleClass('searchbar-container-hide');
//         // $('#searchbar-container-show').toggleClass('searchbar-container-show');
//         var curr_class = $('#searchbar-container').attr('class')
//         if(curr_class=='searchbar-container-show'){
//             $('#searchbar-container').attr('class','searchbar-container-hide')
//         }else{
//             $('#searchbar-container').attr('class','searchbar-container-show')
//         }
       
//     })
// })

$(document).ready(function(){
    $('#btn-view-search').click(function(){
        // $('#searchbar-container-show').toggleClass('searchbar-container-hide');
        // $('#searchbar-container-show').toggleClass('searchbar-container-show');
        var curr_class = $('#searchbar-container').attr('class')
        if(curr_class=='searchbar-container-show'){
            $('#searchbar-container').animate({top:"-10%"})
            $('#searchbar-container').attr('class','searchbar-container-hide')
        }else{
            $('#searchbar-container').animate({top:"0%"})
            $('#searchbar-container').attr('class','searchbar-container-show')
        }
       
    })
})