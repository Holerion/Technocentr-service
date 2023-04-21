const setContent = () => {
    let content = "";
  
    //  ковш #######
    content += createArticle({
      id: "test",
      Name: "test",
      imgUrl: "../../src/img/Production/1.jpg",
      Price:"30 000 грн",  
      text:`
      Lorem ipsum dolor, sit rerum deserunt natus, recusandae repellat facere harum ea dolore temporibus? Cupiditate molestiae sunt nulla molestias eligendi enim earum perspiciatis explicabo?"      
      `  
    });

    content += createArticle({
        id: "test",
        Name: "test",
        imgUrl: "../../src/img/Production/1.jpg",
        Price:"30 000 грн",  
        text:`
        Lorem ipsum dolor, sit amet consectetue harum ea dolore temporibus? Cupiditate molestiae sunt nulla molestias eligendi enim earum perspiciatis explicabo?"      
        `  
      });

      content += createArticle({
        id: "test",
        Name: "test",
        imgUrl: "../../src/img/Production/1.jpg",
        Price:"30 000 грн",  
        text:`
        Lorem ipsum dolor,  earum perspiciatis explicabo?"      
        `  
      });

      content += createArticle({
        id: "test",
        Name: "test",
        imgUrl: "../../src/img/Production/1.jpg",
        Price:"30 000 грн",  
        text:`
        Lorem ipsum dolor,ae sunt nulla molestias eligendi enim earum perspiciatis explicabo?"      
        `  
      });
  

  
    document.querySelector("#Production").innerHTML = content;
  };
  