import Link from "next/link";

export default function Home(){
    return(
        <div>
            <h1>
                Software Practice Emperical 
                Evidence Database (Speed)
            </h1>
            <br/>
            <ul className= "header">
                <h1>
                    <Link href = "/"> Home </Link></h1> 
                    <li>
                    <Link href = "/SEPractice"> Select the Practice </Link></li> 
                    <li>
                    <Link href = "/SubmitArticle"> Submit an Article </Link></li> 
                    
                    </ul>
                    <div className = "content "> </div>

        </div>
    );
}