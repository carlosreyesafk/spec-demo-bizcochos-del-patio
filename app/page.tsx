import "./globals.css";

const PHONE_DISPLAY = "(809) 520-8688";
const PHONE_TEL = "tel:+18095208688";
const WHATSAPP = "https://wa.me/18095208688";
const ADDRESS =
  "Av. Venezuela esq., Santo Domingo Este, República Dominicana";
const MAP_EMBED =
  "https://www.google.com/maps?q=Bizcochos%20del%20Patio%2C%20Av.%20Venezuela%2C%20Santo%20Domingo%20Este&output=embed";

const HERO_IMG =
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=80";
const ABOUT_IMG =
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=80";
const GALLERY = [
  "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=1200&q=80",
];

const SERVICES = [
  {
    icon: "🎂",
    title: "Bizcochos de cumpleaños",
    text: "Bizcochos personalizados para cumpleaños: elige sabor, tamaño y decoración a tu gusto.",
  },
  {
    icon: "💒",
    title: "Bodas y XV años",
    text: "Bizcochos elegantes para bodas, quinceañeras y eventos especiales que se roban el show.",
  },
  {
    icon: "🍰",
    title: "Postres por encargo",
    text: "Tres leches, flan, brownies y más: postres caseros para compartir en familia.",
  },
  {
    icon: "🧁",
    title: "Cupcakes",
    text: "Cupcakes decorados por docena: perfectos para fiestas, oficinas y regalos.",
  },
  {
    icon: "🍮",
    title: "Mesa de postres",
    text: "Armamos tu mesa de postres completa para eventos, con variedad y presentación impecable.",
  },
  {
    icon: "🎁",
    title: "Pedidos para empresas",
    text: "Bizcochos y postres para actividades corporativas, con entrega coordinada.",
  },
];

export default function Page() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio">
            <span className="brand-mark">🧁</span>
            <span className="brand-name">
              Bizcochos del Patio
              <small>Repostería · Santo Domingo Este</small>
            </span>
          </a>
          <nav className="nav">
            <a href="#servicios">Productos</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#ubicacion">Ubicación</a>
            <a href="#contacto">Contacto</a>
            <a className="btn btn-primary btn-sm" href={WHATSAPP} target="_blank" rel="noreferrer">
              Pedir por WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        {/* HERO */}
        <section className="hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">🧁 Repostería en Santo Domingo Este</span>
              <h1>
                El bizcocho perfecto para <span>cada celebración</span>
              </h1>
              <p className="lead">
                En Bizcochos del Patio horneamos con amor: bizcochos
                personalizados, postres caseros y mesas de postres para que tus
                momentos especiales sepan aún mejor.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                  📲 Haz tu pedido por WhatsApp
                </a>
                <a className="btn btn-outline" href={PHONE_TEL}>
                  📞 {PHONE_DISPLAY}
                </a>
              </div>
              <div className="hero-meta">
                <div>
                  <strong>📍 Av. Venezuela</strong>
                  Santo Domingo Este
                </div>
                <div>
                  <strong>🕘 Lun–Vie 8am–5pm</strong>
                  Pedidos por WhatsApp
                </div>
              </div>
            </div>
            <div className="hero-card">
              <h2>¿Tienes una celebración?</h2>
              <p>
                Cuéntanos por WhatsApp qué necesitas (fecha, porciones y sabor)
                y te cotizamos tu bizcocho sin compromiso.
              </p>
              <ul className="hours-list">
                <li>
                  <span>Lunes – Viernes</span>
                  <span>8:00 am – 5:00 pm</span>
                </li>
                <li>
                  <span>Pedidos</span>
                  <span>Por WhatsApp</span>
                </li>
              </ul>
              <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                Cotizar mi bizcocho
              </a>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Nuestros productos</span>
              <h2>Dulces para cada ocasión</h2>
              <p>
                Todo hecho por encargo, con ingredientes de calidad y el toque
                casero que nos distingue.
              </p>
            </div>
            <div className="services-grid">
              {SERVICES.map((s) => (
                <article key={s.title} className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="section alt">
          <div className="container about-grid">
            <div className="about-copy">
              <span
                className="kicker"
                style={{
                  color: "var(--berry-600)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontSize: "0.78rem",
                }}
              >
                Nosotros
              </span>
              <h2>Sabor casero en Santo Domingo Este</h2>
              <p>
                Bizcochos del Patio es una repostería ubicada en la Av.
                Venezuela, en Santo Domingo Este, dedicada a endulzar
                cumpleaños, bodas y todo tipo de celebraciones con bizcochos y
                postres hechos por encargo.
              </p>
              <p>
                Cada pedido se prepara fresco y a tu medida: tú eliges el sabor,
                el tamaño y la decoración, y nosotros nos encargamos del resto.
              </p>
              <ul className="about-points">
                <li>
                  <span className="tick">✓</span>
                  <span>
                    <strong>Hecho por encargo:</strong> fresco y personalizado
                    para tu evento.
                  </span>
                </li>
                <li>
                  <span className="tick">✓</span>
                  <span>
                    <strong>Pedido fácil:</strong> cotiza por WhatsApp en
                    minutos.
                  </span>
                </li>
                <li>
                  <span className="tick">✓</span>
                  <span>
                    <strong>En la Av. Venezuela:</strong> céntrico, en Santo
                    Domingo Este.
                  </span>
                </li>
              </ul>
            </div>
            <div className="about-photo">
              <img src={ABOUT_IMG} alt="Postre de Bizcochos del Patio" loading="lazy" />
              <div className="about-photo-strip">
                {GALLERY.map((g) => (
                  <img key={g} src={g} alt="Bizcochos y postres" loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* UBICACIÓN */}
        <section id="ubicacion" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Ubicación</span>
              <h2>Encuéntranos fácilmente</h2>
              <p>{ADDRESS}</p>
            </div>
            <div className="location-grid">
              <div className="location-info">
                <div className="info-card">
                  <h3>📍 Dirección</h3>
                  <p>{ADDRESS}</p>
                </div>
                <div className="info-card">
                  <h3>🕘 Horario</h3>
                  <p>
                    Lunes a viernes: 8:00 am – 5:00 pm
                    <br />
                    Pedidos por WhatsApp
                  </p>
                </div>
                <div className="info-card">
                  <h3>🚗 Cómo llegar</h3>
                  <p>
                    Estamos en la Av. Venezuela, en Santo Domingo Este. Abre el
                    mapa para ver la ruta desde tu ubicación.
                  </p>
                </div>
              </div>
              <div className="map-frame">
                <iframe
                  title="Mapa — Bizcochos del Patio"
                  src={MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section contact">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Contacto</span>
              <h2>Haz tu pedido hoy</h2>
              <p>
                Escríbenos por WhatsApp con la fecha de tu evento y te
                cotizamos a la brevedad.
              </p>
            </div>
            <div className="contact-grid">
              <a className="contact-card" href={WHATSAPP} target="_blank" rel="noreferrer">
                <div className="label">WhatsApp</div>
                <div className="value">{PHONE_DISPLAY}</div>
                <div className="hint">Cotiza tu pedido aquí →</div>
              </a>
              <a className="contact-card" href={PHONE_TEL}>
                <div className="label">Teléfono</div>
                <div className="value">{PHONE_DISPLAY}</div>
                <div className="hint">Llámanos en horario de tienda →</div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <strong>Bizcochos del Patio</strong>
              {ADDRESS}
              <br />
              Tel. {PHONE_DISPLAY}
            </div>
            <div>
              <strong>Horario</strong>
              Lun–Vie 8:00 am – 5:00 pm
            </div>
          </div>
          <p className="demo-note">
            Página de muestra — propuesta de diseño web preparada por NexoDev.
            Los productos mostrados son categorías generales de repostería y
            pueden ajustarse a la oferta real del negocio.
          </p>
        </div>
      </footer>
    </>
  );
}
