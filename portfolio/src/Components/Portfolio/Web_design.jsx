import Project from "./Project";

const Web_design = () => {

     let data = {

        img : ["/rest.png" , "/e-book.png" , "/viho.png" ,"/yaan.png","/cart.png" ,"/pass.png", "/crud.png","/focus.png", "/country.png", "/age.png", "/gta.png" , "/weather.png",],

        code : ['https://github.com/7885sitaram/Restoran' , 'https://github.com/7885sitaram/E-book','https://github.com/7885sitaram/Viho-Admin-Panel' , 'https://github.com/7885sitaram/Yaantech-project', 'https://github.com/7885sitaram/Add-to-Cart' , 'https://github.com/7885sitaram/Password-Generator-react' , 'https://github.com/7885sitaram/CRUD-PANEL', 'https://github.com/7885sitaram/Focus-on-today' , 'https://github.com/7885sitaram/Country-Guide', 'https://github.com/7885sitaram/Age-Calculator' , 'https://github.com/7885sitaram/GTA-VI', 'https://github.com/7885sitaram/Weather-App'],

        live : ['https://resteurent-by-jigs.netlify.app/', 'https://es-books.netlify.app/', 'https://viho-admin.netlify.app/', 'https://yaantech-by-jigs.netlify.app/', 'https://app.netlify.com/projects/add-to-cart-by-jigs/overview', 'https://password-ganerator-by-jigs.netlify.app/', 'https://crud-panel-by-jigs.netlify.app/' ,'https://focus-on-today-by-jigs.netlify.app/', 'https://country-guide-by-jigs.netlify.app/', 'https://age-calculator-by-jigs.netlify.app/', 'https://grand-tarsier-701cb5.netlify.app/','https://weather-app-by-jigs.netlify.app/'],

         name : ['Restoran' , 'E-book', 'Viho Admin Panel', 'Yaantech', 'Cart Application', 'Password Ganerator (React)' , 'CRUD Panel' , 'Focus On Today', 'Country Guide', 'Age Calculator (Live)', 'GTA-VI Landing Page (React)', 'Weather-App (Live)'],

        type : ['Web Design', 'Application']

    }

    return (

        <>

        
            <div className="w-full px-2 sm:px-4 md:px-6 lg:px-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    <Project name = {data.name[0]} img = {data.img[0]} code = {data.code[0]} live = {data.live[0]} type = {data.type[0]}/>
                    <Project name = {data.name[1]} img = {data.img[1]} code = {data.code[1]} live = {data.live[1]} type = {data.type[0]}/>
                    <Project name = {data.name[3]} img = {data.img[3]} code = {data.code[3]} live = {data.live[3]} type = {data.type[0]}  />
                    <Project name = {data.name[10]} img = {data.img[10]}code = {data.code[10]} live = {data.live[10]} type = {data.type[0]}/>
                   
                </div>
            </div>

        
        </>
    )
}


export default Web_design;