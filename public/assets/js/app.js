
$(function(){
    $('.devour_it').on('click',function(){
        if($('#eater').val().trim() == ''){          
            alert('please enter who gonna devour it');
            return;
        }
        let id = $(this).data('id');
        let dataEater = {
            eater: $('#eater').val()
        };
        $(`#${id}`).remove();
        $.ajax('/api/burger/update/'+id,{
            type: 'PUT',
            data: dataEater
        }).then(function(){
            console.log('the borger devoured');
            location.reload();
        });
    });
    $('.create-form').on('submit',function(e){
        e.preventDefault();
        if($('#burger').val().trim() === '') {
            alert('please enter burger name');
        }
        let newBurger = {
            burger_name: $('#burger').val().trim(),

        }
        $.ajax('/api/burger/add',{
            type: 'POST',
            data: newBurger
        }).then(function(){
            console.log('new burger added');
            location.reload();
        })
    })
    
})