//     CS601 Term Project
//     W. Alex Wikiel
//     NAV App
//     Shared by all pages 
const nav = Vue.createApp({
    template:
     `
    <link rel="stylesheet" href="/css/nav.css">
    <nav>
   <!--<img src="/images/bu_logo.png" alt="Boston Univerity Logo">-->
        <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/html/education.html">Education</a></li>
            <li><a href="/html/personal_life.html">Personal Life</a></li>
            <li><a href="/html/interests.html">Personal Interests</a></li>
            <li><a href="/html/tv_corner.html">TV Corner</a></li>
            <li><a href="/html/news.html">News</a></li>
            <li><a href="/html/favorites.html">Favorites</a></li>
            <li><a href="/html/tictactoe.html">Tic Tac Toe</a></li>
            <li><a href="/html/form.html">Contact Me</a></li>
        </ul>
   </nav>
    
`,
    data() {
        return {
            name: "nav"
        }
    },
        
    // Prep Work
    created() {
        console.log("everything is ready")
    }
});
nav.mount('#nav')
