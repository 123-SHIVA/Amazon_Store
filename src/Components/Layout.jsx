import Header2 from "./Header/Header2";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";



function Layout({children}){
    return(
        <>
            <Header/>
            <Header2/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout;