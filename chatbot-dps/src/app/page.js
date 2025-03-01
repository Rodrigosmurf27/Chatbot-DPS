import React from 'react';
import '/src/app/globals.css'; // Importa los estilos principales
import ChatBot from './ChatBot'; // Importa el ChatBot

function App() {
    return (
        <div className="app">
            {/* Header */}
            <header className="header">
                <div className="header-top">
                    <div className="container">
                        <div className="logo">
                        <img src="/img/LogoUDB.png" alt="Logo UDB" />
                        </div>
                        <div className="search-bar">
                            <input type="text" placeholder="Buscar..." />
                            <button>Buscar</button>
                        </div>
                    </div>
                </div>
                <nav className="navbar">
                    <div className="container">
                        <ul>
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/acerca">Acerca de</a></li>
                            <li><a href="/noticias">Noticias</a></li>
                            <li><a href="/eventos">Eventos</a></li>
                            <li><a href="/contacto">Contacto</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Banner Principal */}
            <section className="banner">
                <div className="container">
                    <h1>Bienvenidos a la Universidad Don Bosco</h1>
                    <p>Formando profesionales con valores y excelencia académica.</p>
                </div>
            </section>

            {/* Contenido Principal */}
            <main className="main-content">
                <div className="container">
                    <section className="news">
                        <h2>Noticias Recientes</h2>
                        <div className="news-grid">
                            <article className="news-item">
                                <img src="/img/carreras.jpg " alt="Noticia 1" />
                                <h3>Listado de Carreras</h3>
                                <p>La Universidad Don Bosco brinda una amplia oferta de carreras con enfoque especial para una sociedad que avanza; muchas de ellas, únicas a nivel nacional y regional que garantizan una colocación laboral acorde a la formación.

Ofrece carreras de grado con titulaciones de profesorado, técnico, licenciatura e ingeniería a través de las cinco Facultades que la conforman y dos Departamentos académicos.</p>
                                <a href="https://www.udb.edu.sv/udb/pagina/listado_carreras">Leer más</a>

                            </article>
                            <article className="news-item">
                                <img src="/img/pro.jpg" alt="Noticia 2" />
                                <h3>Carreras y programas</h3>
                                <p>La Universidad Don Bosco ofrece un total de 42 carreras de grado, 12 programas de postgrado, divididos en ocho de maestrías y tres doctorados a través de las cinco facultades que la conforman: Ingeniería, Ciencias y Humanidades, Ciencias Económicas, Ciencias de la Rehabilitación y Aeronáutica; así como de la Dirección de Educación a Distancia.</p>
                                <a href="https://www.udb.edu.sv/udb/pagina/posgrados">Leer más</a>

                            </article>
                        </div>
                    </section>

                    <section className="events">
                        <h2>Próximos Eventos</h2>
                        <div className="events-grid">
                            <article className="event-item">
                                <img src="/img/event.jpg" alt="Evento 1" />
                                <h3>Organizan conversatorio para conmemorar Día Internacional de la Niña y la Mujer en la Ciencia en la UDB</h3>
                                <p>Fecha: 26-02-2025</p>
                                <a href="https://www.udb.edu.sv/udb/noticia/organizan-conversatorio-para-conmemorar-dia-internacional-de-la-nina-y-la-mujer-en-la-ciencia-en-la-udb">Más información</a>

                            </article>
                            <article className="event-item">
                                <img src="/img/event1.jpg" alt="Evento 2" />
                                <h3>UDB Plus” acerca programas y servicios a estudiantes en una nueva edición</h3>
                                <p>Fecha: 21-02-2025</p>
                                <a href="https://www.udb.edu.sv/udb/noticia/-udb-plus--acerco-programas-y-servicios-a-estudiantes-en-una-nueva-edicion">Más información</a>
                            </article>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-section">
                        <h3>Contacto</h3>
                        <p>Teléfono: +503 2527-2000</p>
                        <p>Email: info@udb.edu.sv</p>
                    </div>
                    <div className="footer-section">
                        <h3>Enlaces Rápidos</h3>
                        <ul>
                            <li><a href="/admisiones">Admisiones</a></li>
                            <li><a href="/carreras">Carreras</a></li>
                            <li><a href="/biblioteca">Biblioteca</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Redes Sociales</h3>
                        <ul>
                            <li><a href="https://facebook.com/udb">Facebook</a></li>
                            <li><a href="https://twitter.com/udb">Twitter</a></li>
                            <li><a href="https://instagram.com/udb">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2023 Universidad Don Bosco. Todos los derechos reservados.</p>
                </div>
            </footer>

            {/* ChatBot */}
            <ChatBot />
        </div>
    );
}

export default App;

