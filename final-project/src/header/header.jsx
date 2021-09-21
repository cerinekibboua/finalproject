import "./header.css"

export default function Header (){
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img
               className="headerImg"
               src="https://images.pexels.com/photos/2569169/pexels-photo-2569169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
               alt=""
               >
            </img>
        </div>
    )
}