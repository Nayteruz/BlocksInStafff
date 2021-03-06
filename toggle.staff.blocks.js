if ($.fn.jquery){
    console.log('script is ready');
    let is_state = 'staff_user';
    let hide_blocks_classes = ['.version-json-controls',
                               '.staffUser',
                               '.staff.with-arrow-thin',
                               '.data-list-item.system',
                               'li.add-menu-wrap',
                               '.item-col.query',
                               '.item-col.alias',
                               '.item-col .edit',
                               '.tabs-header li a[href="#tab-page_boilerplate"]',
                               '.client-hidden'
                              ];
        hide_blocks_classes = hide_blocks_classes.join(', ');
    $(document).on('keydown', function(e){
        if ( e.ctrlKey && e.keyCode == 81 ) {
            if (is_state == 'staff_user'){
                alert('Скрыты блоки стафф пользователя');
                $(hide_blocks_classes).hide();
                is_state = 'client_user';
            } else if (is_state == 'client_user') {
                alert('Показаны блоки стафф пользователя');
                $(hide_blocks_classes).show();
                is_state = 'staff_user';
            }
        }
    })
}

