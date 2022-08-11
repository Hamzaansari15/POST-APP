var list = document.getElementById("list");
var a = document.getElementById("small_box");
console.log(a)

function post(){
    // if(form.length < 1){
    //     var noPost = document.createElement("div");
    //     noPost.setAttribute("id","box");
    //     var noPostBox = document.createElement("P");
    //     var noPostBoxText = document.createTextNode("Please, Tells Something!");
    //     noPostBoxText.setAttribute("id","small_box")
    //     noPostBox.appendChild(noPostBoxText);
    //     noPost.appendChild(noPostBox);
    // }
    var form = document.getElementById("form");
    var li = document.createElement("li");
    var liText = document.createTextNode(form.value);
    li.appendChild(liText);
    list.appendChild(li);
    form.value = "";
    li.setAttribute("class","post_list");


    var liLikeSection = document.createElement("li");

    var likeSection = document.createElement("div");
    var like = document.createElement("p");
    var likeBtn = document.createElement("i");
    var likeBtnText = document.createTextNode("class=fa-regular fa-thumbs-up")
    like.appendChild(likeBtn);
    
    var likeText = document.createTextNode("Like");
    like.appendChild(likeText);
    likeSection.appendChild(like);


    var comment = document.createElement("a");
    comment.setAttribute("href","#");
    comment.setAttribute("id","comment");
    comment.setAttribute("onClick","comment");
    var commentText = document.createTextNode("Comment");
    comment.appendChild(commentText);
    likeSection.appendChild(comment);
    liLikeSection.appendChild(likeSection);
    list.appendChild(liLikeSection);
    likeSection.setAttribute("id","like_section1");
    liLikeSection.setAttribute("id","like_section");
}
// var list = document.getElementById("list");