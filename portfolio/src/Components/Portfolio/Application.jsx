import Project from "./Project";

const Application = () => {

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

                    <Project name = {data.name[2]} img = {data.img[2]} code = {data.code[2]} live = {data.live[2]}  type = {data.type[1]} />
                    <Project name = {data.name[4]} img = {data.img[4]} code = {data.code[4]} live = {data.live[4]}  type = {data.type[1]} />
                    <Project name = {data.name[5]} img = {data.img[5]} code = {data.code[5]} live = {data.live[5]}  type = {data.type[1]} />
                    <Project name = {data.name[6]} img = {data.img[6]} code = {data.code[6]} live = {data.live[6]}  type = {data.type[1]}/>
                    <Project name = {data.name[7]} img = {data.img[7]} code = {data.code[7]} live = {data.live[7]}  type = {data.type[1]}/>
                    <Project name = {data.name[8]} img = {data.img[8]} code = {data.code[8]} live = {data.live[8]}  type = {data.type[1]}/>
                    <Project name = {data.name[9]} img = {data.img[9]} code = {data.code[9]} live = {data.live[9]} type = {data.type[1]}/>
                    <Project name = {data.name[11]} img = {data.img[11]}code = {data.code[11]} live = {data.live[11]} type = {data.type[1]} />
                 

                </div>
            </div>

        
        </>
    )
}


export default Application;