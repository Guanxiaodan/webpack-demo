<div class="layer">
     下面这样写是得不到图片的
     <img src="../../assets/us.jpg"/> 
     但是这样写是可以得到图片的
     <img src="${require('../../assets/us.jpg')}"/> 
    <div> this is a layer <%= name %> 晓丹</div>
    <% for(var i = 0; i < arr.length; i++) { %>
        <%= arr[i] %>
    <% } %>
</div>