import Header2 from "./Header/Header2";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ScrollToTop from "./Pages/ScrollTop";



function Layout({children}){
    return(
        <>
            <ScrollToTop/>
            <div className="hidden lg:block">
                <Header/>
            </div>
            <Header2/>
            <div className="lg:hidden">
                <Header/>
            </div>
            {children}
            <Footer/>
        </>
    )
}

export default Layout;