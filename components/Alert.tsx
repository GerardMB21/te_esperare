import { useState } from "react"

export default function Alert() {

    const [active, setActive] = useState(true)

    const close = () => {
        setActive(false)
    }

    if (active) {
        return (
          <div className="alert">
            <div className="blur"></div>
            <div className="ctn">
              <p>Presiona en cada imagen para acceder a cada submundo</p>
              <button onClick={close}>Cerrar</button>
            </div>
          </div>
        )
    }

    return null

}
