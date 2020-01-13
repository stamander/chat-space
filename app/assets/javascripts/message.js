$(function(){

  function buildHTML(message){

    if (message.content && message.image) {
      var html = 
      `<div class="message-box" data-message-id=${message.id}>
        <div class="message-name-date">
          <div class="message-name">
            ${message.user_name}
          </div>
          <div class="message-date">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
        <p class="lower-message__content">
          ${message.content}
        </p>
        </div>
        <img src=${message.image} >
      </div>`
  return html;

    } else if(message.content) {
      var html =
      `<div class="message-box" data-message-id=${message.id}>
        <div class="message-name-date">
          <div class="message-name">
            ${message.user_name}
          </div>
          <div class="message-date">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
      </div>`
  return html;
    }

    else if(message.image){
      var html =
      `<div class="message-box" data-message-id=${message.id}>
        <div class="message-name-date">
          <div class="message-name">
            ${message.user_name}
          </div>
          <div class="message-date">
            ${message.created_at}
          </div>
        </div>
       <div class="message">
          <p class="lower-message__image">
            ${message.image}
          </p>
        </div>
      </div>`
    return html;
    }
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,  
      type: 'POST',  
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__message-list').append(html);
      $('.new_message')[0].reset();
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
    })
    .always(function(){
      $('.send-btn').prop('disabled',false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });

  var reloadMessages = function() {
    
    last_message_id = $('.message-box:last').data("message-id");
  console.log(last_message_id)
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
      var insertHTML = '';
      $.each(messages, function(i, message) {
        insertHTML += buildHTML(message)
      });

      $('.chat-main__message-list').append(insertHTML);
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $("#new_message")[0].reset();
      $(".send-btn").prop("disabled", false);
    }
    
    })
    .fail(function() {
    });
  };

  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }

});


