let $summerNote = null;

const generateItem = ( id ) => {

    let html = itemModel.join('');

    const regex = new RegExp('@@id@@','g');

    html = html.replace( regex, id );

    return html;

}

const addItem = () => {
    items++;

    const itemId = items;
    const item = generateItem( itemId );

    $('.editable-items-container').append(item);

    $summerNote.clone().appendTo( "#actividadesRealizadasContainer" + itemId);

    $('.editable-items-remove-btn').click( (event) => {
        deleteItem(event);
    });
}

const deleteItem = (event) => {

    const target = $(event.target);
    const id = target.attr('itemId');
    const $item = $('#' + 'GeneratedItem' + id);

    $item.remove();

}

$(document).ready( (id) => {

    $summerNote = $('.hiddenElement').children();

    $('.editable-items-add-btn').click( (event) => { 
        addItem();
    });

});