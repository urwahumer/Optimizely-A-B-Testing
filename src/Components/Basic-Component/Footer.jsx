import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div id="footer" className="sticky-footer">
      {/* <!-- Main --> */}
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-6">
            <Link to="/" className="text-dark ">
              <h1>
                <b>Rushmore</b>
              </h1>
            </Link>
            <br />
            <br />
            <p>
              Morbi convallis bibendum urna ut viverra. Maecenas quis consequat
              libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies
              laoreet ullamcorper phasellus semper.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 ">
            <h4>Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Propiedades</a>
              </li>
              <li>
                <a href="#">Nosotros</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>

            <ul className="footer-links ">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Nuestros Agentes</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3  col-sm-12">
            <h4>Contacto</h4>
            <div className="text-widget">
              <span>Montes Urales 320, Lomas de Chapultepec, CDMX.</span> <br />
              Phone:{" "}
              <span>
                <a className="anchor" href="tel:55204000">
                  55 20 4000{" "}
                </a>
              </span>
              <br />
              E-Mail:
              <span>
                {" "}
                <a className="anchor" href="mailto:contacto@rojkind.com.mx">
                  contacto@rojkind.com.mx
                </a>{" "}
              </span>
              <br />
            </div>

            <div className="mt-3 text-dark">
              <a className="facebook " href="#">
                <i className="fab fa-facebook ml-2 text-dark "></i>
              </a>

              <a className="twitter " href="#">
                <i className="fab fa-twitter ml-2 text-dark "></i>
              </a>

              <a className="linkedin " href="#">
                <i className="fab fa-linkedin-in ml-2 text-dark "></i>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Copyright --> */}
        <div className="row">
          <div className="col-md-12">
            <div className="copyrights">
              © 1976 - 2019 Rojkind Impulsora Inmobiliaria.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
