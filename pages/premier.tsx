import Title from "../components/Title";

export default function miniserie() {
  return (
    <div className="page premierPage">
      <div className="contain">
        <Title />
        <div className="content">
          <h1>Premier - Cineclub para el estreno de la Miniserie: Te esperare</h1>
          <p>Para estrenar la serie Te esperare decidimos realizar una premier en el auditorio del campus para difundir nuestra historia y sus consecuentes submundos. Acompa<span>ñ</span>anos a rememorar este dia.</p>
          <div className="map">
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.380857674833!2d-76.91009048505681!3d-12.08605854592367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c1c0e873ddf3%3A0x491a44b83b2677aa!2sAv.%20la%20Molina%203755%2C%20Cercado%20de%20Lima%2015026!5e0!3m2!1sen!2spe!4v1668975867549!5m2!1sen!2spe" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}